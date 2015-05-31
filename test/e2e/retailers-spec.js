describe('Rechannel Retailers Scenarios', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/public/app/index.html#/retailers');
    });

    it('should render table headings', function() {
        element.all(by.css('.table th')).count().then(function(els){
            expect(els).toEqual(3);
        });
    });

    it('should render table rows', function() {
        element.all(by.css('.table > tbody > tr:first-child > td:first-child')).count().then(function(els) {
            expect(els).toEqual(3);
        });
    });
});