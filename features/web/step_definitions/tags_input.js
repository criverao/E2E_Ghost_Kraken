const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
const fs = require("fs");
const properties = require("../../../properties.json");
let appVersion = properties.appVersion.replace(/\./g,"_");
const { faker } = require('@faker-js/faker');
let featureName = featureFileInPath('./features')[0].split(".")[0];
const dataPool = require(`../../../data_pools/${featureName}.json`);
let dataIndex = getRandomInt(0, dataPool.length);


let randomColor = faker.internet.color().substring(1, 7)
let randomInvalidColor = faker.datatype.string(6)
let randomDesc = faker.lorem.sentence(50)
let randomInvalidDesc = faker.datatype.string(600)
let randomName = faker.company.companyName()
let randomSlug = faker.company.companyName()


const tagsSelector = (appVersion === 'v3_42') ?
    "body > div.gh-app > div > nav.gh-nav > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(4)" :
    "body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a";

const newTagSelector = (appVersion === 'v3_42') ?
    "body > div.gh-app > div > main > section > header > section > a.gh-btn-green" :
    "body > div.gh-app > div > main > section > div > header > section > a.gh-btn-primary";

const saveTagSelector = (appVersion === 'v3_42') ?
    "body > div.gh-app > div > main > section > form > header > section > button" :
    "body > div.gh-app > div > main > section > form > div.gh-canvas-header > header > section > button";

const deleteTagSelector = (appVersion === 'v3_42') ?
    "body > div.gh-app > div > main > section > button" :
    "body > div.gh-app > div > main > section > div > button";

    When('I click Tags', async function () {
    let elements = await this.driver.$$(tagsSelector);
    return await elements[0].click();
});

When('I click New Tag', async function () {
    let elements = await this.driver.$$(newTagSelector);
    return await elements[0].click();
});

When('I enter name new tag {kraken-string}', async function (name) {
    let elements = await this.driver.$$("input[id='tag-name']");
    return await elements[0].setValue(dataPool[dataIndex][name]);
});

Then('the new tag exists {string}', async function (tagName) {
    let elements = await this.driver.$$(`//h3[contains(., '${dataPool[dataIndex][tagName]}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click save tag button', async function () {
    let elements = await this.driver.$$(saveTagSelector);
    return await elements[0].click();
});

When('I click on tag', async function () {
    let elements = await this.driver.$$(`body > div.gh-app > div > main > section > section > ol > li:nth-child(3) > a`);
    return await elements[0].click();
});

When('I enter a tag description {string}', async function (description) {
    let elements = await this.driver.$$("textarea[id='tag-description']");
    return await elements[0].setValue(dataPool[dataIndex][description]);
});

Then('the tag desc exists {string}', async function (tagDesc) {
    let elements = await this.driver.$$(`//p[contains(., '${dataPool[dataIndex][tagDesc]}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click on delete tag', async function () {
    let elements = await this.driver.$$(deleteTagSelector);
    return await elements[0].click();
});

Then('the delete tag not exists {string}', async function (tagName) {
    let elements = await this.driver.$$(`//h3[contains(., '${dataPool[dataIndex][tagName]}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(false);
});

When('I enter slug new tag {string}', async function (slug) {
    let elements = await this.driver.$$("input[id='tag-slug']");
    return await elements[0].setValue(dataPool[dataIndex][slug]);
});

When('I enter color new tag {string}', async function (color) {
    let elements = await this.driver.$$("input[name='accent-color']");
    return await elements[0].setValue(dataPool[dataIndex][color].substring(1, 7));
});

//Métodos para generar los escenarios con valores aleatorios

When('I enter color new tag random', async function () {
    let elements = await this.driver.$$("input[name='accent-color']");
    return await elements[0].setValue(randomColor);
});

When('I enter invalid color new tag random', async function () {
    let elements = await this.driver.$$("input[name='accent-color']");
    return await elements[0].setValue(randomInvalidColor);
});

When('I enter description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='tag-description']");
    return await elements[0].setValue(randomDesc);
});

When('I enter invalid description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='tag-description']");
    return await elements[0].setValue(randomInvalidDesc);
});

When('I click on expand facebook', async function () {
    let elements = await this.driver.$$('body > div.gh-app > div > main > section > form > div.ember-view > section > div:nth-child(3) > div.gh-expandable-header > button.gh-btn-expand');
    return await elements[0].click();
});

When('I click on expand twitter', async function () {
    let elements = await this.driver.$$('body > div.gh-app > div > main > section > form > div.ember-view > section > div:nth-child(2) > div.gh-expandable-header > button.gh-btn-expand');
    return await elements[0].click();
});

When('I click on expand meta', async function () {
    let elements = await this.driver.$$('body > div.gh-app > div > main > section > form > div.ember-view > section > div:nth-child(1) > div.gh-expandable-header > button.gh-btn-expand');
    return await elements[0].click();
});

When('I enter invalid facebook description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='og-description']");
    return await elements[0].setValue(randomInvalidDesc);
});

When('I enter invalid twitter description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='twitter-description']");
    return await elements[0].setValue(randomInvalidDesc);
});

When('I enter invalid meta description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='meta-description']");
    return await elements[0].setValue(randomInvalidDesc);
});

When('I enter facebook description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='og-description']");
    return await elements[0].setValue(randomDesc);
});

When('I enter twitter description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='twitter-description']");
    return await elements[0].setValue(randomDesc);
});

When('I enter meta description new tag random', async function () {
    let elements = await this.driver.$$("textarea[id='meta-description']");
    return await elements[0].setValue(randomDesc);
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
