var Rechannel;
(function (Rechannel) {
    var Orders;
    (function (Orders) {
        var OrdersCtrl = (function () {
            function OrdersCtrl($http,RetailersFactory,DateFactory) { // errors
                var _this = this;

                _this.orders, _this.displayOrders = [];
                $http.get("../api/orders.json").success(function (orders) {
                    _this.orders = orders.orders;
                    _this.displayOrders = orders.orders;

                });

                _this.getRetailerName = function (id) {
                    return RetailersFactory.getProperty(_this.retailers,id,"name");
                };

                _this.getBuyerName = function (id) {
                    return RetailersFactory.getProperty(_this.buyersList,id,"name");
                };

                _this.retailers, _this.buyersList = [];
                RetailersFactory.getRetailers(function (retailers) {
                    _this.retailers = retailers;
                    _this.buyersList = RetailersFactory.getBuyersList(retailers);
                });

                _this.toggleLastMonthView = function () {
                    if(_this.checkBoxModel){
                        _this.displayOrders = DateFactory.filterByDaysAgo(
                            _this.orders,
                            30,
                            "order_date",
                            "dd/mm/yyyy"
                        );
                    } else {
                        _this.displayOrders = _this.orders;
                    }
                };

                _this.checkBoxModel = {
                    on : true
                };
            }
            return OrdersCtrl;
        })();
        Orders.OrdersCtrl = OrdersCtrl;
        angular.module("Rechannel").controller("OrdersCtrl", OrdersCtrl).config(function ($stateProvider) {
            $stateProvider.state({
                name: "root.orders",
                url: "orders",
                controller: "OrdersCtrl",
                controllerAs: "ordersCtrl",
                templateUrl: "orders/orders.html"
            });
        });
    })(Orders = Rechannel.Orders || (Rechannel.Orders = {}));
})(Rechannel || (Rechannel = {}));