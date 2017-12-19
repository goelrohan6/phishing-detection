chrome.tabs.onUpdated.addListener(function(tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.captureVisibleTab(function(dataUrl) {
            chrome.tabs.sendMessage(activeTab.id, {
                "message": "page_loaded",
                "tabUrl": tabs[0].url,
                "screenshotUrl": dataUrl
            });
        })
    });
});
chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.message === "open_new_tab") {
                console.table(request);
                chrome.tabs.create({
                        "url": request.url +
                            "?positives=" + request.positives +
                            "&scans="+ de request.scans +
                            "&tabUrl=" + request.tabUrl +
                            "&screenshotUrl=" + request.screenshotUrl
                    }
                }
            }
        );