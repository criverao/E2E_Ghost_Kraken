const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
let emailValue = '';
const emailSelector = "(//input[@type='email'])[1]";

When('I click on input Email', async function () {
    let element = await this.driver.$(emailSelector);
    return await element.click();
});

When('I get text value in Email', async function () {
    emailValue = await this.driver.$(emailSelector).getValue();
});

When('I set value {string} into input Email', async function (text) {
    let element = await this.driver.$(emailSelector);
    return await element.setValue(text);
});

When('I restore default value into input Email', async function () {
    let element = await this.driver.$(emailSelector);
    return await element.setValue(emailValue);
});

Then('I check text {string} in Email', async function (text) {
    let elementValue = await this.driver.$(emailSelector).getValue();
    expect(elementValue).to.equal(text);
});