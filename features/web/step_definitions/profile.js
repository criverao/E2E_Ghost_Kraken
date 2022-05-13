const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I click on Profile button', async function () {
    let element = await this.driver.$("(//div[@role='button'])[1]");
    return await element.click();
});

When('I enter name new profile {kraken-string}', async function (name) {
    let elements = await this.driver.$$("input[id='member-name']");
    return await elements[0].setValue(name);
});

When('I enter email new profile {kraken-string}', async function (email) {
    let elements = await this.driver.$$("input[id='member-email']");
    return await elements[0].setValue(email);
});

Then('the new profile exists {kraken-string}', async function (email) {
    let elements = await this.driver.$$(`//p[contains(., '${email}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click on profile {kraken-string}', async function (name) {
    let elements = await this.driver.$$(`//a[contains(./div/div/h3, '${name}')]`);
    return await elements[0].click();
});

Then('the delete profile not exists {kraken-string}', async function (email) {
    let elements = await this.driver.$$(`//p[contains(., '${email}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(false);
});