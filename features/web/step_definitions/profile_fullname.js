const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
let fullnameValue = '';
const fullnameSelector = "(//input[@type='text'])[1]";

When('I click on input Full name', async function () {
    let element = await this.driver.$(fullnameSelector);
    return await element.click();
});

When('I get text value in Full name', async function () {
    fullnameValue = await this.driver.$(fullnameSelector).getValue();
});

When('I set value {string} into input Full name', async function (text) {
    let element = await this.driver.$(fullnameSelector);
    return await element.setValue(text);
});

When('I restore default value into input Full name', async function () {
    let element = await this.driver.$(fullnameSelector);
    return await element.setValue(fullnameValue);
});

Then('I check text {string} in Full name', async function (text) {
    let elementValue = await this.driver.$(fullnameSelector).getValue();
    expect(elementValue).to.equal(text);
});