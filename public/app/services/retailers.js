var Rechannel;
(function (Rechannel) {
    var Retailers;
    (function (Retailers) {
        angular.module("Rechannel").factory("RetailersFactory", ['$http','$filter', function($http,$filter) {

            return {

                getRetailers : function (callback) {
                    $http.get("../api/retailers.json").success(function (res) {
                        callback(res.retailers);
                    });
                },
                /**
                 * Creates a list of buyers from retailers.json
                 * @param retailers
                 * @returns {Array}
                 */
                getBuyersList : function (retailers) {
                    var buyers = [];
                    for (var retailer in retailers) {
                        buyers.push(retailers[retailer]["retail_buyers"]);
                    }
                    var merged = [];
                    return merged.concat.apply(merged,buyers);
                },
                /**
                 * Fetches a value from Object list based on sibling property value
                 * @param {Array} list - to extract value from
                 * @param {Number} id - the sibling property id value
                 * @param {String} property - present in the list item
                 * @returns {*} property value
                 */
                getProperty : function (list,id,property) {
                    if (list && list.length) {
                        var el = $filter('filter')(list, {id: id});
                        if (el && el.length) {
                            return el[0][property];
                        }
                    }
                }
            }
        }]);
    })(Retailers = Rechannel.Retailers || (Rechannel.Retailers = {}));
})(Rechannel || (Rechannel = {}));