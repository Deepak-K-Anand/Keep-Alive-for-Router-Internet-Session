chrome.app.runtime.onLaunched.addListener(
    function() {
        chrome.app.window.create(
            "../pages/main.html", {
                outerBounds: {
                    minHeight: 500,
                    minWidth: 500
                }
            },
            function(wnd) {
                wnd.maximize();
            }
        );
    }
);
