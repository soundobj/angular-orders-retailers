var Rechannel;
(function (Rechannel) {
    var Retailers;
    (function (Retailers) {
        angular.module("Rechannel").factory("DateFactory", ['$http','$filter', function($http,$filter) {

            return {

                getNDaysAgoTime : function (daysAgo) {
                    return Date.now() - (86400000 * daysAgo);
                },

                convertDateToMilliseconds : function (date, format) {
                    switch (format) {
                        case("dd/mm/yyyy"):
                            return new Date( date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).getTime();
                    }
                },
                /**
                 * Filters a list of Objects by date property being withing now a days ago parameter
                 * @param {Array} list
                 * @param {Number} daysAgo
                 * @param {String} dateProperty - present in the list items
                 * @param {String} dateFormat
                 * @returns {Array}
                 */
                filterByDaysAgo : function (list,daysAgo,dateProperty,dateFormat) {
                   var filteredList;
                   var filterProperties =  {
                       date: this.getNDaysAgoTime(daysAgo),
                       getMilliseconds : this.convertDateToMilliseconds,
                       dateProperty: dateProperty,
                       dateFormat: dateFormat
                   };

                   filteredList = list.filter(function (el) {
                        if( this.getMilliseconds(el[this.dateProperty],this.dateFormat) > this.date ) {
                            return true;
                        }
                    },filterProperties);

                    return filteredList;
                }
            }
        }]);
    })(Retailers = Rechannel.Retailers || (Rechannel.Retailers = {}));
})(Rechannel || (Rechannel = {}));