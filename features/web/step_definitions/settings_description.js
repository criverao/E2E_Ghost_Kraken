const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
let descriptionValue = '';
const descriptionSelector = "(//input[@type='text'])[2]";

When('I click on input Description', async function () {
    let element = await this.driver.$(descriptionSelector);
    return await element.click();
});

When('I get text value in Description', async function () {
    descriptionValue = await this.driver.$(descriptionSelector).getValue();
});

When('I set value {kraken-string} into input Description', async function (text) {
    let element = await this.driver.$(descriptionSelector);
    return await element.setValue(text);
});

When('I restore default value into input Description', async function () {
    let element = await this.driver.$(descriptionSelector);
    return await element.setValue(descriptionValue);
});

Then('I check text {kraken-string} in Description', async function (text) {
    let elementValue = await this.driver.$(descriptionSelector).getValue();
    expect(elementValue).to.equal(text);
});