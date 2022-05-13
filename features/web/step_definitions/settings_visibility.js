const {Then, When, Given} = require("@cucumber/cucumber");
const {expect} = require("chai");
let sitePassword = '';

When('I check a site password was generated', async function () {
    sitePassword = await this.driver.$("(//input[@name='general[password]'])[1]").getValue();
    let ingreso = sitePassword.length > 0;
    expect(ingreso).to.equal(true);
});

When('I click on Make this site private', async function () {
    let element = await this.driver.$("(//span[@class='input-toggle-component'])[1]");
    return await element.click();
});

When('I enter the private site password', async function () {
    let element = await this.driver.$("//input[@name='password']");
    return await element.setValue(sitePassword);
});

When('I click Access site', async function() {
    let element = await this.driver.$("//button[@type='submit']");
    return await element.click();
});

Then('I check the site is private', async function () {
    let element = await this.driver.$("//input[@name='password']").getValue();
    expect(element).to.be.empty;
});
