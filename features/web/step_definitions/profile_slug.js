const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
let slugValue = '';
const slugSelector = "(//input[@type='text'])[2]";

When('I click on input Slug', async function () {
    let element = await this.driver.$(slugSelector);
    return await element.click();
});

When('I get text value in Slug', async function () {
    slugValue = await this.driver.$(slugSelector).getValue();
});

When('I set value {string} into input Slug', async function (text) {
    let element = await this.driver.$(slugSelector);
    return await element.setValue(text);
});

When('I restore default value into input Slug', async function () {
    let element = await this.driver.$(slugSelector);
    return await element.setValue(slugValue);
});

Then('I check text {string} in Slug', async function (text) {
    let elementValue = await this.driver.$(slugSelector).getValue();
    expect(elementValue).to.equal(text);
});