# Keep Alive for Dazeworks Internet

### Inspiration
With the new Wi-Fi router setup at the Dazeworks office, each one of us who will be using the Internet will have to login to the router's portal at 192.168.1.1 in order to authenticate ourselves with our credentials. Wait! That isn't enough. After logging in, we have to also keep the tab open for the Internet connection to be persistent. The moment you close the tab, you'll be logged out of the current active Internet Session. No, that is a pain! We might accidently close our Browser and then you have to repeat this all over again. And believe me, saving one tab from being open saves a bit of the Chrome's memory from being hogged! And thus this **Chrome Packaged App**.

![screenshot_1](https://cloud.githubusercontent.com/assets/3683725/12562473/5b06549c-c3cb-11e5-83df-0c6cb32e054b.png)

### What is Chrome Packaged App
[Chrome Packaged App](https://developer.chrome.com/apps/about_apps) lets you to build *desktop based applications* that can run on any machine that has Chrome installed. This means that a Chrome Packaged App can run on PC, Linux and Mac as Chrome runs on all of them! Chrome Packaged Apps can be downloaded from the **Chrome Web Store** and can be added to the Desktop / Taskbar as shortcuts in order to launch them. Pretty much like a Desktop Application, these have a window of their own with options to Maximize and Minimze and doesn't require you to even open your Chrome Browser unlike Extensions which comes to life only after you open your Chrome Browser. Now for the best part - You can develop these with just **HTML/CSS** and **JavaScript**.

### How it Works
Now behind the hood as mentioned earlier, it is just HTML/CSS and JavaScript that was employed to build the App. We're using a [**WebView Tag**](https://developer.chrome.com/apps/tags/webview) wherein we will load the router's portal or website. WebView Tags are just like the IFRAME Tag in HTML but with more features and functionalities. Users can login and then simply keep the App minimized to maintain the session! At the top, we will also have a text box wherein one can change the URI to the router's portal. This would be helpful if the address to the router's portal / website changes in future.

### Technologies Used
1.  Front End
    * Angular JS
    * Bootstrap
    * Web View
2.  Back End
    * Chrome Storage
    * Chrome Packaged App

### Installing the App
You can install the App from the Chrome Webstore - [[link]]. Also, it can only be installed for the "**dazeworks.com**" domain! This means that you have to login via your Dazeworks Google Account and then install the same from the Chrome Webstore.

### Contributions / Suggesstions
I am very certain that organizations might have come across a similar situtation wherein employees need to authenticate via the router's portal and then will have to keep the tab open to maintain the session. Thus you can easily repurpose this App with it's source, brand it to meet your organization's needs and publish the same via Chrome Webstore. Also, feel free to thrown in suggesstions and don't hesitate to fork it and get your's up and running.

### Licensing
Completely free! Use it at your own will.

### Credits
Deepak @ [**Dazeworks Technologies Pvt Ltd**](http://dazeworks.com/)
