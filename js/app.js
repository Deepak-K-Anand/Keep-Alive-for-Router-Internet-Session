angular.module( "keepAliveApp", [] ).config(
    function( $sceDelegateProvider ) {
        $sceDelegateProvider.resourceUrlWhitelist(
            [
                "self",
                config.defRouterDomain
            ]
        );
    }
).controller(
    "WebViewCtrl",
    [ 
        "$scope",
        function( $scope ) {
            var self = this;

            self.orgName  = null;
            self.loginURL = null;
            self.hasSaved = false;

            self.orgName = config.orgName;

            self.loadURL = function() {
                chrome.storage.sync.get(
                    {
                        loginURL : config.defRouterEP
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