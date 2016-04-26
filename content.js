
// Inject jquery into DOM
var j = document.createElement('script');
j.src = chrome.extension.getURL('node_modules/gmail-js/node_modules/jquery/dist/jquery.min.js');
(document.head || document.documentElement).appendChild(j);

// Inject jquery into DOM
var p = document.createElement('script');
p.src = chrome.extension.getURL('node_modules/bootstrap/dist/js/bootstrap.min.js');
(document.head || document.documentElement).appendChild(p);

// Inject Gmail.js into DOM
var g = document.createElement('script');
g.src = chrome.extension.getURL('node_modules/gmail-js/src/gmail.js');
(document.head || document.documentElement).appendChild(g);

// Inject main.js. Main should contain the rest of the code
var s = document.createElement('script');
s.src = chrome.extension.getURL('main.js');
(document.head || document.documentElement).appendChild(s);


