const {When, Then} = require("@cucumber/cucumber");
const { faker } = require('@faker-js/faker');
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
    console.log("Data pool file doesn't exist. Importing file skipped. " + ex);
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
    'Publication Language': ""
}

let pageInitialValues = {
    "Page title": "",
    "Content page": "",
    "Excerpt": ""
}

let initialValues = {
    ...profileInitialValues,
    ...settingsInitialValues,
    ...pageInitialValues
}

let loginSelectors = {
    "Email": 'input[name="identification"]',
    "Password": 'input[name="password"]'
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

let pageSelectors = {
    "Page title": "//body//div//div//main//div//section//div//div//textarea",
    "Content page": "(//div[@data-kg='editor'])[1]",
    "Excerpt": "(//textarea[@id='custom-excerpt'])[1]",
}

let selectors = {
    ...loginSelectors,
    ...profileSelectors,
    ...settingsSelectors,
    ...pageSelectors
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

let fakerInputTypes = {
    'Title': {
        value: "",
        "lower": {
            length: 1
        },
        "upper": {
            length: 150
        },
        "too long": {
            length: 151
        }
    },
    'Description': {
        value: "",
        "lower": {
            length: 1
        },
        "upper": {
            length: 200
        },
        "too long": {
            length: 201
        }
    },
    'Publication Language': {
        value: "",
        "lower": {
            length: 1
        },
        "upper": {
            length: 150
        },
        "too long": {
            length: 5000
        }
    },
    'Page title': {
        value: "",
        "normal": {
            length: 5
        },
        "lower": {
            length: 1
        },
        "upper": {
            length: 255
        },
        "too long": {
            length: 256
        }
    },
    'Content page': {
        value: "",
        "normal": {
            length: 5
        },
        "lower": {
            length: 1
        },
        "upper": {
            length: 10
        },
        "too long": {
            length: 20
        }
    },
    'Excerpt': {
        value: "",
        "normal": {
            length: 50
        },
        "lower": {
            length: 1
        },
        "upper": {
            length: 300
        },
        "too long": {
            length: 301
        }
    },
    'Email': {
        value: "",
        "normal": {
            length: 30
        },
        "lower": {
            length: 1
        },
        "upper": {
            length: 190
        },
        "too long": {
            length: 191
        }
    },
    'Password': {
        value: "",
        "normal": {
            length: 30
        },
        "lower": {
            length: 1
        },
        "upper": {
            length: 60
        },
        "too long": {
            length: 61
        }
    }
}

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
    //console.log("INITIAL VALUE FOR " + inputName + ": " + initialValues[inputName]);
    return await initialValues[inputName];
});

// ************* Steps to Set values ************* //
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

When('I set {string} {string} value on runtime into input {string}', async function (limit, dataType, inputName) {
    let selector = selectors[inputName];
    let element = await this.driver.$(selector);
    const fakerData = fakerGenerator(limit, dataType, inputName);
    fakerInputTypes[inputName].value = fakerData;
    return await element.setValue(fakerData);
});

When('I set random {string} {string} value on runtime into input {string}', async function (limit, dataType, inputName) {
    let selector = selectors[inputName];
    let element = await this.driver.$(selector);
    let fakerData = randomFakerGenerator(limit, dataType, inputName);
    let dataIndex = getRandomInt(0, fakerData.length);
    //console.log("DATA INDEX FAKER: " + fakerData);
    return await element.setValue(fakerData[dataIndex]);
});

// ************* End ************* //
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

Then('I check fake text updated in {string}', async function (inputName) {
    let selector = selectors[inputName];
    let elementValue = await this.driver.$(selector).getValue();
    expect(elementValue).to.equal(fakerInputTypes[inputName].value);
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

Then('I expect the Publish dropdown menu is not displayed', async function () {
    let elements = await this.driver.$$(".ember-view.ember-basic-dropdown-trigger");
    expect(elements.length > 0).to.equal(false);
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

function fakerGenerator(limit, dataType, input) {

    if(dataType === 'string') {
        return faker.datatype.string(fakerInputTypes[input][limit].length);
    }
    else if(dataType === 'sentence') {
        return faker.lorem.sentence(fakerInputTypes[input][limit].length);
    }
    else if(dataType === 'paragraphs') {
        return faker.lorem.paragraphs(fakerInputTypes[input][limit].length);
    }

}

function randomFakerGenerator(limit, dataType, input) {
    let fakeData = [];
    let randomInt = getRandomInt(10, 20);
    for (let i = 0; i < randomInt; i++) {
        fakeData[i] = fakerGenerator(limit, dataType, input)
    }
    return fakeData;
}