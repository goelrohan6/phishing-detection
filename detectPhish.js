chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "page_loaded") {
            fetchReport(request.tabUrl, request.screenshotUrl);
        }
    }
);

function fetchReport(tabUrl, screenshotUrl) {
    let apiUrl = 'https://www.virustotal.com/vtapi/v2/url/report?apikey=f41739bc86b087f6e417ead57411aa6b4f9fe706534eed53036db7dea185aa90';
    apiUrl = apiUrl + '&resource=' + tabUrl;
    fetch(apiUrl, {
            method: 'GET',
            headers: new Headers()
        })
        .then((res) => res.json())
        .then((data) => checkReport(data, tabUrl, screenshotUrl));
}

function checkReport(data, tabUrl, screenshotUrl) {
    if (data.positives > 0) {
        const scans = [];
        for (key in data.scans) {
            if (data.scans[key].detected == true) {
                scans.push(key);
            }
        }
        chrome.runtime.sendMessage({
            "message": "open_new_tab",
            "url": "warn.html",
            "positives": data.positives,
            "scans": scans,
            "positives": data.positives,
            "tabUrl": tabUrl,
            "screenshotUrl": screenshotUrl
        });
    }
}