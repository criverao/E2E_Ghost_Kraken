const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");
const properties = require("../../../properties.json");
let appVersion = properties.appVersion.replace(/\./g,"_");

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
    return await elements[0].setValue(name);
});

Then('the new tag exists {kraken-string}', async function (tagName) {
    let elements = await this.driver.$$(`//h3[contains(., '${tagName}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click save tag button', async function () {
    let elements = await this.driver.$$(saveTagSelector);
    return await elements[0].click();
});

When('I click on tag {kraken-string}', async function (name) {
    let elements = await this.driver.$$(`//a[contains(./h3, '${name}')]`);
    return await elements[0].click();
});

When('I enter a tag description {kraken-string}', async function (description) {
    let elements = await this.driver.$$("textarea[id='tag-description']");
    return await elements[0].setValue(description);
});

Then('the tag desc exists {kraken-string}', async function (tagDesc) {
    let elements = await this.driver.$$(`//p[contains(., '${tagDesc}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click on delete tag', async function () {
    let elements = await this.driver.$$(deleteTagSelector);
    return await elements[0].click();
});

Then('the delete tag not exists {kraken-string}', async function (tagName) {
    let elements = await this.driver.$$(`//h3[contains(., '${tagName}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(false);
});