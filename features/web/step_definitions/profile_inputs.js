const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
const fs = require("fs");

let featureName = featureFileInPath('./features')[0].split(".")[0];
const dataPool = require(`../../../data_pools/${featureName}.json`);
let dataIndex = getRandomInt(0, dataPool.length);

let initialValues = {
    'Full name': "",
    'Slug': "",
    'Email': "",
    'Location': ""
};
let selectors = {
    'Full name': "(//input[@type='text'])[1]",
    'Slug': "(//input[@type='text'])[2]",
    'Email': "(//input[@type='email'])[1]",
    'Location': "(//input[@type='text'])[3]"
}

When('I click on input {string}', async function (inputName) {
    let selector = selectors[inputName]
    let element = await this.driver.$(selector);
    return element.click();
});

When('I get text value in {string}', async function (inputName) {
    let selector = selectors[inputName];
    initialValues[inputName] = await this.driver.$(selector).getValue();
});

When('I set data from pool into input {string}', async function (inputName) {
    let selector = selectors[inputName];
    let element = await this.driver.$(selector);
    return element.setValue(dataPool[dataIndex][inputName]);
});

Then('I check text updated in {string}', async function (inputName) {
    let selector = selectors[inputName];
    let elementValue = await this.driver.$(selector).getValue();
    expect(elementValue).to.equal(dataPool[dataIndex][inputName]);
});

Then('I expect text was not updated in {string}', async function (inputName) {
    let selector = selectors[inputName];
    let elementValue = await this.driver.$(selector).getValue();
    expect(elementValue).to.not.equal(dataPool[dataIndex][inputName]);
});

Then('I expect error message {string}', async function (error) {
    let elementValue = await this.driver.$("//div[@class='first-form-group form-group error ember-view']//p[@class='response']").getText();
    expect(elementValue).to.equal(error);
    //expect(elementValue).to.include(error);
});

Then('I restore initial value into input {string}', async function (inputName) {
    let selector = selectors[inputName];
    let element = await this.driver.$(selector);
    return element.setValue(initialValues[inputName]);
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function featureFileInPath(path) {
    let filesInFeaturePath = filesInPath(path);
    return filesInFeaturePath.filter((fileName) => {
        return fileName.match(/\.feature$/);
    });
}

function filesInPath(path) {
    return fs.readdirSync(path);
}