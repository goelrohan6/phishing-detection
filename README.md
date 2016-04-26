# Phish Detect
This is a chrome extension to help alert and warn users if they open up a potential phishing email. This extension works by checking whether or not SPF or DKIM failed. Sometimes, in Gmail, even if an email has failed SPF and DKIM, it will not be sent to the spam folder. Instead, it will remain in the user's inbox. There is a valid reason why this may happen. For example, if a company uses a 3rd party emailer, they will need them to spoof the email address to make it appear it came from the 1st party company. However, unlike email that has been sent to spam, gmail does not inform the user that the email is not properly authenticated. This can give a false sense of security. Phish Detect attempts to at least inform the user that the sender could be a spoofed address.

Note: This extension relies on the Gmail.js API. This is an unsupported javascript api for Gmail and can break at any slight changes to the Gmail DOM. Therefore, users should be know how to validate emails manually. For an idea of how to do this, please see the following blog: historypeats.com/<some slug here>


# Installation
Requi
