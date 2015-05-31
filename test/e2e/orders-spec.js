describe('Rechannel Orders Scenarios', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/public/app/index.html#/orders');
    });

    it('should render table headings', function() {
        element.all(by.css('.table th')).count().then(function(els){
            expect(els).toEqual(6);
        });
    });

    it('should filter by last month orders', function() {
        var aMonthAgo = Date.now() - (86400000 * 30);
        element(by.model('ordersCtrl.checkBoxModel')).click();
        element.all(by.css('.table > tbody > tr > td:nth-child(4)')).each(function(element, index){
            element.getText().then(function (text) {
                var orderDate = new Date( text.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).getTime();
                expect(orderDate >= aMonthAgo).toBeTruthy();
            });
        });
    });
});