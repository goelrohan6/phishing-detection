# Phish Detect
This is a chrome extension to help alert and warn users if they open up a potential phishing email. This extension works by checking whether or not SPF or DKIM failed (unauthenticated email). Sometimes, in Gmail, even if an email has failed SPF and DKIM, it will not be sent to the spam folder. Instead, it will remain in the user's inbox. This behavior can be caused by the domain not setting the DMARC records, which specifies how to handle unauthenticated emails. There is a valid reason why this may happen. For example, if a company uses a 3rd party emailer, they will need them to spoof the email address to make it appear it came from the 1st party company. However, unlike spam email, gmail does not inform the user that the email is not properly authenticated. This can give a false sense of security. Phish Detect attempts to at least inform the user that the sender could be a spoofed address.

Note: This extension relies on the Gmail.js API. This is an unsupported javascript api for Gmail and can break at any slight changes to the Gmail DOM. Therefore, users should be know how to validate emails manually. For an idea of how to do this, please see the following blog: https://www.facebook.com/notes/goldexpaycom/phishing-emails-how-to-check-email-headers/10151534030445609/


## Installation
1. Download/clone the repo: ```git clone git@github.com:historypeats/phish_detect.git```
2. Install the requirements:
```cd phish_detect && npm install```
3. In chrome, open up the extensions page by going to chrome://extensions
4. Check "Developer mode" then click on "Load unpacked extension". Click the phish_detect folder. This should install the extension. You can opt to disable Developer mode after it is installed.

Note: Eventually I will package this up to be distributed in the Chrome Store. However, should you want to install from source, you can follow these instructions.

## Usage
After the extension is installed, it will automatically alert the user via a javascript alert box (for now) as well as output some logging info in the console. The extension activates only when a user opens up an email. The following screenshot depicts the alert message after opening up a spoofed email located in my inbox:



## ToDo
- Replace Alert box with a popup modal. I had some difficulties doing this, so if anyone wants to help contribute, by all means, please do!
