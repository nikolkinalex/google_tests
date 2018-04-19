describe('Kitcast dashboard', function() {

    before(function() {

        const chai = require('chai');
          global.expect = chai.expect;
          chai.Should();

        browser.url('https://www.google.com');
    });
    it('should add a slide in a new playlist', function() {
    const googleSearchButtonElement = browser.element("/html/body/div/div[3]/form/div[2]/div[3]/center/input[1]");
    googleSearchButtonElement.waitForExist(10000);
    expect(googleSearchButtonElement.isExisting());        
    });
});
