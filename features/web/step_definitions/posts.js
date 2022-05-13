const {When, Then} = require("@cucumber/cucumber");
const {expect} = require("chai");

When('I click Posts', async function () {
    let elements = await this.driver.$$("body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(1) > a");
    return await elements[0].click();
});

When('I click New Post', async function () {
    let elements = await this.driver.$$("body > div.gh-app > div > main > section > div > header > section > a.gh-btn-primary");
    return await elements[0].click();
});

When('I enter title new post {kraken-string}', async function (title) {
    let elements = await this.driver.$$("textarea.gh-editor-title");
    elements[0].setValue(title);
    await new Promise(r => setTimeout(r, 3000));
    let eles = await this.driver.$$("body > div.gh-app > div > main > button");
    eles[0].click();
    await new Promise(r => setTimeout(r, 3000));
    eles[0].click();
});

When('I enter description new post {kraken-string}', async function (description) {
    let elements = await this.driver.$$("div.koenig-editor__editor > p");
    return await elements[0].setValue(description);
});

When('I click Post Back', async function () {
    let elements = await this.driver.$$(`a.gh-editor-back-button`);
    return await elements[0].click();
});

Then('the new post exists {kraken-string}', async function (postTitle) {
    let elements = await this.driver.$$(`//h3[contains(., '${postTitle}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click on post {kraken-string}', async function (name) {
    let elements = await this.driver.$$(`//a[contains(./h3, '${name}')]`);
    return await elements[0].click();
});

When('I click on publish menu', async function () {
    let elements = await this.driver.$$(`div.gh-publishmenu-trigger`);
    return await elements[0].click();
});

When('I click on publish button', async function () {
    let elements = await this.driver.$$(`button.gh-publishmenu-button`);
    return await elements[0].click();
});

When('I confirm publish', async function () {
    let elements = await this.driver.$$(`div.modal-footer > button.gh-btn-black`);
    return await elements[0].click();
});

When('I click on update menu', async function () {
    let elements = await this.driver.$$(`div.gh-publishmenu-trigger`);
    return await elements[0].click();
});

When('I click on update button', async function () {
    let elements = await this.driver.$$(`button.gh-publishmenu-button`);
    return await elements[0].click();
});

When('I select unpublish', async function () {
    let elements = await this.driver.$$(`#ember-basic-dropdown-wormhole > div > div > section > div:nth-child(1) > div.gh-publishmenu-radio-button`);
    return await elements[0].click();
});

When('I expand Posts', async function () {
    let elements = await this.driver.$$("button.gh-nav-button-expand");
    return await elements[0].click();
});

When('I click Draft', async function () {
    let elements = await this.driver.$$("a[title='Drafts']");
    return await elements[0].click();
});

When('I click on edit menu', async function () {
    let eles = await this.driver.$$("body > div.gh-app > div > main > button");
    return eles[0].click();
});

When('I click on delete button', async function () {
    let eles = await this.driver.$$("button.settings-menu-delete-button");
    return eles[0].click();
});

Then('the post not exists {kraken-string}', async function (postTitle) {
    let elements = await this.driver.$$(`//h3[contains(., '${postTitle}')]`);
    let ingreso = elements.length > 0;
    expect(ingreso).to.equal(false);
});