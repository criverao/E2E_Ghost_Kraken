const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
let locationValue = '';
const locationSelector = "(//input[@type='text'])[3]";

When('I click on input Location', async function () {
    let element = await this.driver.$(locationSelector);
    return await element.click();
});

When('I get text value in Location', async function () {
    locationValue = await this.driver.$(locationSelector).getValue();
});

When('I set value {string} into input Location', async function (text) {
    let element = await this.driver.$(locationSelector);
    return await element.setValue(text);
});

When('I restore default value into input Location', async function () {
    let element = await this.driver.$(locationSelector);
    return await element.setValue(locationValue);
});

Then('I check text {string} in Location', async function (text) {
    let elementValue = await this.driver.$(locationSelector).getValue();
    expect(elementValue).to.equal(text);
});