var path = require('path');

describe('angularjs homepage todo list', function() {
  it('should add a new contact', function() {
    browser.get('http://localhost:8080');
    // element(by.model('contact.name')).sendKeys('Am Pm')
    // element(by.model('contact.phone')).sendKeys('1234567890')
    // element(by.css('.button')).click();

    element(by.model('contact.name')).sendKeys('Tim')
    element(by.model('contact.phone')).sendKeys('3934203242')
    element(by.css('.button')).click();

    // element(by.model('contact.name')).sendKeys('Am Pm')
    // element(by.model('contact.phone')).sendKeys('1234567890')
    // element(by.css('.button')).click();
    //
    // element(by.model('contact.name')).sendKeys('Am Pm')
    // element(by.model('contact.phone')).sendKeys('1234567890')
    // element(by.css('.button')).click();
    //
    var contactList = element.all(by.repeater('contact in vm.contacts'));
    expect(contactList.count()).toEqual(4);
  });
});
