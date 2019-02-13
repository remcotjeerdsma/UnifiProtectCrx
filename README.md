# UnifiProtectCrx
This is a Chrome app for Unifi Protect Live View

# Configuration
In live-view.html, change the src of the webview to the IP-address of your Unifi Protect installation. 
This is tested with the non-encrypted 7080 port, please use that if possible (for performance and to avoid certificate acceptence issues for self-signed certificates).
Leave the '/login?redirect=%2Fliveview' part of the URL untouched.

In custom_functions.js found in the js folder, adjust the following two lines by adding your credentials (create a set of credentials on the Protect appliance first):
```javascript
  setNativeValue(document.getElementById("username"), 'enterusernamehere');
  setNativeValue(document.getElementById("password"), 'enterpasswordhere');
```

# Installation
Zip the 'app' folder, and rename the fileextension to .crx. Then upload the chrome app to your Chrome browser or ChromeOS. 
The app is compatible with kiosk mode on ChromeOS devices (such as ChromeBit/ChromeStick etc) so that it autostarts on boot there.

If your chrome is in developer mode, you can also upload the 'app' folder directly to your own installation without zipping.
1.  Go to chrome://extensions/ and check the box for Developer mode in the top right.
2.  Refresh the page and click the 'Load unpacked extension' button and select the app folder to install it.

# Demonstration
[![Click to watch on Youtube](https://media.giphy.com/media/3kD93VteN3P2F87toN/giphy.gif)](https://www.youtube.com/watch?v=hcBLHpjcs5g)
