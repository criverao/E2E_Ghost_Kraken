const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
let languageValue = '';
const languageSelector = "(//input[@type='text'])[3]";

When('I click on Expand button from Publication Language', async function () {
    let element = await this.driver.$("(//button[@type='button'])[5]");
    return await element.click();
});

When('I set value {kraken-string} into input Publication Language', async function (text) {
    let element = await this.driver.$(languageSelector);
    return await element.setValue(text);
});

When('I get text value in Publication Language', async function () {
    languageValue = await this.driver.$(languageSelector).getValue();
});

When('I restore default value into input Publication Language', async function () {
    let element = await this.driver.$(languageSelector);
    return await element.setValue(languageValue);
});

Then('I check text {kraken-string} in Publication Language', async function (text) {
    let elementValue = await this.driver.$(languageSelector).getValue();
    expect(elementValue).to.equal(text);
});

