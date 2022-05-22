const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
const fs = require("fs");

let featureName = featureFileInPath('./features')[0].split(".")[0];
const dataPool = require(`../../../data_pools/${featureName}.json`);
let dataIndex = getRandomInt(0, dataPool.length);
const retryButtonSelector = "//span[normalize-space()='Retry']";
const retryButtonTagSelector = "body > div.gh-app > div > main > section > form > div.gh-canvas-header > header > section > button.gh-btn-red";

When('I click Members', async function () {
    let elements = await this.driver.$$("body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(4) > a");
    return await elements[0].click();
});

When('I click New Member', async function () {
    let elements = await this.driver.$$("body > div.gh-app > div > main > section > div > header > section > div.view-actions-top-row > a.gh-btn-primary");
    return await elements[0].click();
});

When('I click on delete member', async function () {
    let elements = await this.driver.$$(`body > div.gh-app > div > main > section > div.gh-canvas-header > header > section > span > ul > li:nth-child(2) > button`);
    return await elements[0].click();
});


When('I enter name new member {string}', async function (inputName) {
    let elements = await this.driver.$$("input[id='member-name']");
    return await elements[0].setValue(dataPool[dataIndex][inputName]);
});

When('I enter email new member {string}', async function (inputName) {
    let elements = await this.driver.$$("input[id='member-email']");
    return await elements[0].setValue(dataPool[dataIndex][inputName]);
});

Then('the new member exists {string}', async function (inputName) {
    let elements = await this.driver.$$(`//p[contains(., '${dataPool[dataIndex][inputName]}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click on a member', async function () {
    let elements = await this.driver.$$(`body > div.gh-app > div > main > section > section > div.gh-list-scrolling.gh-list-with-helpsection > table > tbody > tr:nth-child(2) > a:nth-child(1)
    `);
    return await elements[0].click();
});

Then('I not expect a Retry button', async function () {
    let elements = await this.driver.$(retryButtonSelector);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(false);
});

Then('I not expect a Retry button tag', async function () {
    let elements = await this.driver.$(retryButtonTagSelector);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(false);
});

Then('I expect a Retry button page', async function () {
    let elements = await this.driver.$(retryButtonSelector);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

Then('I expect a Retry button tag', async function () {
    let elements = await this.driver.$('//span[contains(., "Retry")]');
    elements.click()
    //let ingreso = elements.length === 0;
    //expect(ingreso).to.equal(true);
});

When('I enter label to member {string}', async function (inputName) {
    let elements = await this.driver.$$("input[id='member-email']");
    return await elements[0].setValue(dataPool[dataIndex][inputName]);
});

When('I enter note to member {string}', async function (inputName) {
    let elements = await this.driver.$$("textarea[id='member-note']");
    return await elements[0].setValue(dataPool[dataIndex][inputName]);
});


When('I click on subscribe button', async function () {
    let elements = await this.driver.$$("body > div.gh-app > div > main > section > div:nth-child(2) > form > div > section > div > div:nth-child(1) > div > div.gh-members-subscribed-checkbox > div > div.for-switch > label > span");
    return await elements[0].click();
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

