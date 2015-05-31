var RootCtrl = (function () {
    function RootCtrl() {
        this.brand = "Rechannel";
        this.navStates = [
            { state: "root.retailers", title: "RETAILERS" },
            { state: "root.orders", title: "ORDERS" }
        ];
    }
    return RootCtrl;
})();

angular.module("Rechannel", ["ui.router","pascalprecht.translate"]).controller("RootCtrl", RootCtrl)
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider,$translateProvider) {
    $stateProvider.state({
        name: "root",
        url: "/",
        controller: "RootCtrl",
        controllerAs: "rootCtrl",
        templateUrl: "root.html"
    });
    $urlRouterProvider.otherwise("/");

    // should be abstracted into config file
    var translations = {
        RETAILERS: 'Retailers',
        ORDERS: 'Orders',
        NAME: 'Name',
        RETAILER: 'Retailer',
        EMAIL: 'Email',
        TELEPHONE: 'Telephone',
        RETAIL_BUYERS: 'Retail Buyers',
        BUYER : 'Buyer',
        DATE: 'Date',
        TOTAL: 'Total',
        STATUS: 'Status'
    };

    $translateProvider
        .translations('en', translations)
        .preferredLanguage('en');

}).run(function ($state, $rootScope) {
    $rootScope.$state = $state;
});