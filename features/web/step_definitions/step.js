const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I click on Save button', async function () {
  let element = await this.driver.$("//body//div//div//main//section//div//header//section//button");
  return await element.click();
});

When('I click on options', async function () {
  let elements = await this.driver.$$(`body > div.gh-app > div > main > section > div.gh-canvas-header > header > section > span > button`);
  return await elements[0].click();
});

When('I confirm delete', async function () {
  let elements = await this.driver.$$(`div.modal-footer > button.gh-btn-red`);
  return await elements[0].click();
});

When('I enter the text {string}', async function (text) {
  return await this.driver.keys(text);
});

When('I click on link having href {string}', async function (href) {
    let element = await this.driver.$(`a[href="${href}"]`);
    return await element.click();
});