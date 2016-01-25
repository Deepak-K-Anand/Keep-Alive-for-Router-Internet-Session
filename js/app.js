angular.module( "keepAliveDWApp", [] ).config(
    function( $sceDelegateProvider ) {
        $sceDelegateProvider.resourceUrlWhitelist(
            [
                "self",
                "http://192.168.1.1:8090/**"
            ]
        );
    }
).controller(
    "WebViewCtrl",
    [ 
        "$scope",
        function( $scope ) {
            var self = this;

            self.loginURL = null;
            self.hasSaved = false;

            self.loadURL = function() {
                chrome.storage.sync.get(
                    {
                        loginURL : "http://192.168.1.1:8090/httpclient.html"
                    },
                    function( config ) { 
                        self.loginURL = config.loginURL;

                        $scope.$apply();
                    }
                );
            };

            self.saveURL = function() {
                chrome.storage.sync.set(
                    {
                        loginURL : self.loginURL
                    },
                    function() { 
                        self.hasSaved = true;
                        
                        $scope.$apply();

                        window.setTimeout(
                            function() {
                                self.hasSaved = false;

                                $scope.$apply();
                            },
                            3000
                        );
                    }
                );
            };
        }
    ]
);