const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I click Sign In', async function() {
    let element = await this.driver.$("//button[@type='submit']");
    return await element.click();
});

Then('I am in Ghost', async function () {
    let elements = await this.driver.$$("div[class='gh-user-info']");
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});