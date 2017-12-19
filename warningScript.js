let positives = getQueryVariable('positives');
let scans = getQueryVariable('scans');
let screenshotUrl = getQueryVariable('screenshotUrl');
let tabUrl = getQueryVariable('tabUrl');

scans = scans.split(',');
scans = scans.map(scan => scan.includes('%20') ? scan.split('%20').join(' ') : scan);
let detectors = scans.join(', ');
// console.log(screenshotUrl);
viewParameters(screenshotUrl, positives, detectors);

function viewParameters(url, positives, detectors) {
    document.getElementById('screenshot').src = url;
    document.getElementById('detectors').innerHTML = `[ ${detectors} ]`;
    document.getElementById('message').innerHTML = `  Detected phishing by ${positives} / 66 . 
    												  Phishing sites pretend to be other websites 
    												  to trick you.`;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}