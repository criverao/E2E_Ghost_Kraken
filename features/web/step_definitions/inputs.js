const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
const fs = require("fs");

const properties = require("../../../properties.json");
let ghostVersion = properties.appVersion.replace(/\./g,"_");

let featureName = featureFileInPath('./features')[0].split(".")[0];
let dataPoolFile = `../../../data_pools/${featureName}.json`;

let dataPool;

try {
    dataPool = require(dataPoolFile);
} catch (ex) {
    dataPool = [{}];
    console.log("Data pool file doesn't exist. Importing file skipped. " + ex)
}

let dataIndex = getRandomInt(0, dataPool.length);

let profileInitialValues = {
    'Full name': "",
    'Slug': "",
    'Email': "",
    'Location': "",
    'Website': "",
    'Bio': ""
};

let settingsInitialValues = {
    'Title': "",
    'Description': "",
    'Language': ""
}

let initialValues = {
    ...profileInitialValues,
    ...settingsInitialValues
}

let profileSelectors = {
    'Full name': "(//input[@type='text'])[1]",
    'Slug': "(//input[@type='text'])[2]",
    'Email': "(//input[@type='email'])[1]",
    'Location': "(//input[@type='text'])[3]",
    'Website': "(//input[@type='url'])[1]",
    'Bio': "(//textarea)[1]"
}

let settingsSelectors = {
    'Title': "(//input[@type='text'])[1]",
    'Description': "(//input[@type='text'])[2]",
    'Publication Language': "(//input[@type='text'])[3]"
}

let selectors = {
    ...profileSelectors,
    ...settingsSelectors
}

const expandButtonSelectors  = {
    "v3_42": {
        "Title and Description": "(//button[@type='button'])[2]",
        "Publication Language": "(//button[@type='button'])[4]",
        "Site timezone": "(//button[@type='button'])[3]"
    },
    "v4_41_3": {
        "Title and Description": "(//button[@type='button'])[3]",
        "Publication Language": "(//button[@type='button'])[5]",
        "Site timezone": "(//button[@type='button'])[4]"
    }
};

When('I click on input {string}', async function (inputName) {
    let selector = selectors[inputName]
    let element = await this.driver.$(selector);
    return await element.click();
});

When('I click on Expand button from {string}', async function (button) {
    let element = await this.driver.$(expandButtonSelectors[ghostVersion][button]);
    return await element.click();
});

When('I get text value in {string}', async function (inputName) {
    let selector = selectors[inputName];
    initialValues[inputName] = await this.driver.$(selector).getValue();
    console.log("INITIAL VALUE FOR " + inputName + ": " + initialValues[inputName]);
    return await initialValues[inputName];
});

When('I set value from data pool into input {string}', async function (inputName) {
    let selector = selectors[inputName];
    let element = await this.driver.$(selector);
    return await element.setValue(dataPool[dataIndex][inputName]);
});

When('I set value {kraken-string} into input {string}', async function (text, inputName) {
    let selector = selectors[inputName];
    let element = await this.driver.$(selector);
    return await element.setValue(text);
});

When('I clear value from input {string}', async function (inputName) {
    let selector = await selectors[inputName];
    let element = await this.driver.$(selector);
    return await element.clearValue();
});

Then('I check text updated in {string}', async function (inputName) {
    let selector = selectors[inputName];
    let elementValue = await this.driver.$(selector).getValue();
    expect(elementValue).to.equal(dataPool[dataIndex][inputName]);
});

Then('I check text {kraken-string} in {string}', async function (text, inputName) {
    let selector = selectors[inputName];
    let elementValue = await this.driver.$(selector).getValue();
    expect(elementValue).to.equal(text);
});

Then('I expect text was not updated in {string}', async function (inputName) {
    let selector = selectors[inputName];
    let elementValue = await this.driver.$(selector).getValue();
    expect(elementValue).to.not.equal(dataPool[dataIndex][inputName]);
});

Then('I expect error message {string}', async function (error) {
    let elementValue = await this.driver.$(`//p[normalize-space()='${error}']`).getText();
    expect(elementValue).to.equal(error);
});

Then('I restore initial value into input {string}', async function (inputName) {
    let selector = selectors[inputName];
    let element = await this.driver.$(selector);
    return await element.setValue(initialValues[inputName]);
});

When('I click on select Timezone', async function () {
    let element = await this.driver.$("select[name='general[timezone]']");
    return await element.click();
});

When('I select the Timezone option {string}', async function (timezone) {
    let element = await this.driver.$("option[value='" + timezone + "']");
    return await element.click();
});

// General functions
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