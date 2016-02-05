# Keep Alive for Router Internet Session


### Inspiration
With the new Wi-Fi router setup at the Dazeworks office, each one of us who will be using the Internet will have to login to the router's portal at `192.168.1.1` in order to authenticate ourselves with our credentials. Wait! That isn't enough. After logging in, we have to also keep the tab open for the Internet connection to be persistent. The moment you close the tab, you'll be logged out of the current active Internet Session. No, that is a pain! We might accidentally close our Browser and then you have to repeat this all over again. And believe me, saving one tab from being open saves a bit of the Chrome's memory from being hogged! And thus this Chrome Packaged App.

![A Glimpse of the App](https://cloud.githubusercontent.com/assets/3683725/12606468/bcc68ab6-c4f3-11e5-9e9d-520c0e3c6470.png)

### What is Chrome Packaged App
[**Chrome Packaged App**](https://developer.chrome.com/extensions/apps) lets you to build desktop based applications that can run on any machine that has Chrome installed. This means that a Chrome Packaged App can run on PC, Linux and Mac as Chrome runs on all of them! Chrome Packaged Apps can be downloaded from the Chrome Web Store and can be added to the Desktop / Taskbar as shortcuts in order to launch them. Pretty much like a **Desktop Application**, these have a window of their own with options to maximize and minimize and doesn't require you to even open your Chrome Browser unlike Extensions which comes to life only after you open your Chrome Browser. Now for the best part - You can develop these with just **HTML/CSS** and **JavaScript**.

### How it Works
Let me explain how keeping a tab open works:

![How it Works](https://cloud.githubusercontent.com/assets/3683725/12574803/414a0276-c42d-11e5-916f-14592d3971a7.png)

That being said, let us see how the Chrome Packaged App works! Now behind the hood as mentioned earlier, it is just HTML/CSS and JavaScript that was employed to build the App. We're using a [**WebView Tag**](https://developer.chrome.com/apps/tags/webview) wherein we will load the router's portal or website. WebView Tags are just like the IFRAME Tag in HTML but with more features and functionalities. Users can login and then simply keep the App minimized to maintain the session! At the top, we will also have a **text box** wherein one can change the URI to the router's portal. This would be helpful if the address to the router's portal / website changes in future. Thus in short instead of keeping a separate tab open on your Browser, it'll be kept open in our Chrome Packaged App which doesn't disturb your normal browsing and keeps itself minimized on your taskbar!

### Technologies Used
1.  Front End
    * Angular JS
    * Bootstrap
    * Web View
2.  Back End
    * Chrome Storage
    * Chrome Packaged App
    
### Installing the App(*Dazework's Copy*)
You can install the App from the Chrome Webstore - http://bit.ly/keep_alive. Also, it can only be installed for the "**dazeworks.com**" domain! This means that you have to login via your Dazeworks Google Account and then install the same from the Chrome Webstore.

### Contributions / Suggestions
I am very certain that organizations might have come across a similar situation wherein employees need to authenticate via the router's portal and then will have to keep the tab open to maintain the session. Thus you can easily re-purpose this App with it's source, brand it to meet your organization's needs and publish the same via Chrome Webstore. Also, feel free to thrown in suggestions and don't hesitate to fork it and get your's up and running.

### Branding
The name of the Chrome Packaged App as well as the [`manifest.json`](https://github.com/Deepak-K-Anand/Keep-Alive-for-Router-Internet-Session/blob/master/manifest.json) has been kept as *generic* as possible to ease the process of re-branding. Now in order to configure the labels / content within the App Window, you can use the [`config.js`](https://github.com/Deepak-K-Anand/Keep-Alive-for-Router-Internet-Session/blob/master/js/config.js) file:

```javascript
var config = {
    "orgName"           : "Dazeworks",
    "defRouterDomain"   : "http://192.168.1.1:8090/**",
    "defRouterEP"       : "http://192.168.1.1:8090/httpclient.html"
};
```

Change the values in the `config` JS Object and the same should be reflected in the App Window.

### Licensing
Completely free! Use it at your own will.

### Credits
Deepak @ [Dazeworks Technologies Pvt Ltd](http://dazeworks.com/)
