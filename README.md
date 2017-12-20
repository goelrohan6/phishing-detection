# Phish Detect
This is a chrome extension to help alert and warn users if they open up a potential phishing email or browses some malicious url.

## Installation
1. Download/clone the repo: ```git clone git@github.com:goelrohan6/phishing-detection.git```
2. Install the requirements:
```cd phishing-detection && npm install```
3. In chrome, open up the extensions page by going to chrome://extensions
4. Check "Developer mode" then click on "Load unpacked extension". Click the phish_detect folder. This should install the extension. You can disable Developer mode after it is installed.

Note: There may be some startup time before the extension is loaded. Therefore, if you navigate to an email too quickly, the extension may not be loaded and would not detect whether or not the email has failed authentication. Please way a second or two before navigate. Additionally, there is a message in the console that displays when the extension is fully loaded. 

Chrome Store: Eventually I will package this up to be distributed in the Chrome Store. However, should you want to install from source, you can follow these instructions.

## Usage
Module1: When a user browses some malicious phishing website it opens a new tab showing the warning.
Module2: After the extension is installed, it will automatically alert the user via a javascript alert box (for now) as well as output some logging info in the console. The extension activates only when a user opens up an email. The following screenshot depicts the alert message after opening up a spoofed email located in my inbox:
