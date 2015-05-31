var Rechannel;
(function (Rechannel) {
    var Retailers;
    (function (Retailers) {
        var RetailersCtrl = (function () {
            function RetailersCtrl($http,RetailersFactory) { // errors

                var _this = this;
                _this.retailers = [];
                RetailersFactory.getRetailers(function (retailers) {
                    _this.retailers = retailers;
                });

            }
            return RetailersCtrl;
        })();
        Retailers.RetailersCtrl = RetailersCtrl;
        angular.module("Rechannel").controller("RetailersCtrl", RetailersCtrl).config(function ($stateProvider) {
            $stateProvider.state({
                name: "root.retailers",
                url: "retailers",
                controller: "RetailersCtrl",
                controllerAs: "retailersCtrl",
                templateUrl: "retailers/retailers.html"
            });
        });
    })(Retailers = Rechannel.Retailers || (Rechannel.Retailers = {}));
})(Rechannel || (Rechannel = {}));