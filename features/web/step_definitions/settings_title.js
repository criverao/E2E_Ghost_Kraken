const {Then, When} = require("@cucumber/cucumber");
const {expect} = require("chai");
const properties = require("../../../properties.json");

let appVersion = properties.appVersion.replace(".","_");
let titleValue = '';
const expandSelector = (appVersion === 'v3_42') ? "(//button[@type='button'])[2]" : "(//button[@type='button'])[3]";
const titleSelector = "(//input[@type='text'])[1]";

When('I click on Expand button from Title & Description', async function () {
    let element = await this.driver.$(expandSelector);
    return await element.click();
});

When('I click on input Title', async function () {
    let element = await this.driver.$(titleSelector);
    return await element.click();
});

When('I get text value in Title', async function () {
    titleValue = await this.driver.$(titleSelector).getValue();
});

When('I set value {string} into input Title', async function (text) {
    let element = await this.driver.$(titleSelector);
    return await element.setValue(text);
});

When('I restore default value into input Title', async function () {
    let element = await this.driver.$(titleSelector);
    return await element.setValue(titleValue);
});

Then('I check text {string} in Title', async function (text) {
    let elementValue = await this.driver.$(titleSelector).getValue();
    expect(elementValue).to.equal(text);
});

