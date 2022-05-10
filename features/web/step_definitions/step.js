const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
  });
  
When('I enter password {kraken-string}', async function (password) {
  let element = await this.driver.$('input[name="password"]');
  return await element.setValue(password);
});

When('I click Sign In', async function() {
  let element = await this.driver.$("//button[@type='submit']");
  return await element.click();
})

When('I click on Profile button', async function () {
  let element = await this.driver.$("(//div[@role='button'])[1]");
  return await element.click();
});

Then('I am in Ghost', async function () {
  let elements = await this.driver.$$("div[class='gh-user-info']");
  let ingreso = elements.length > 0;
  expect(ingreso).to.equal(true);
});

When('I click Members', async function () {
  let elements = await this.driver.$$("body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(4) > a");
  return await elements[0].click();
});

When('I click New Member', async function () {
  let elements = await this.driver.$$("body > div.gh-app > div > main > section > div > header > section > div.view-actions-top-row > a.gh-btn-primary");
  return await elements[0].click();
});

When('I enter name new profile {kraken-string}', async function (name) {
  let elements = await this.driver.$$("input[id='member-name']");
  return await elements[0].setValue(name);
});

When('I enter email new profile {kraken-string}', async function (email) {
  let elements = await this.driver.$$("input[id='member-email']");
  return await elements[0].setValue(email);
});

/*When('I click save button', async function () {
  let elements = await this.driver.$$("body > div.gh-app > div > main > section > div.gh-canvas-header > header > section > button");
  return await elements[0].click();
});*/
When('I click on Save button', async function () {
  let element = await this.driver.$("//body//div//div//main//section//div//header//section//button");
  return await element.click();
});

Then('the new profile exists {kraken-string}', async function (email) {
  let elements = await this.driver.$$(`//p[contains(., '${email}')]`);
  let ingreso = elements.length > 0;
  expect(ingreso).to.equal(true);
});

When('I click on profile {kraken-string}', async function (name) {
  let elements = await this.driver.$$(`//a[contains(./div/div/h3, '${name}')]`);
  return await elements[0].click();
});


When('I click on options', async function () {
  let elements = await this.driver.$$(`body > div.gh-app > div > main > section > div.gh-canvas-header > header > section > span > button`);
  return await elements[0].click();
});

When('I click on delete member', async function () {
  let elements = await this.driver.$$(`body > div.gh-app > div > main > section > div.gh-canvas-header > header > section > span > ul > li:nth-child(2) > button`);
  return await elements[0].click();
});


Then('the delete profile not exists {kraken-string}', async function (email) {
  let elements = await this.driver.$$(`//p[contains(., '${email}')]`);
  let ingreso = elements.length > 0;
  expect(ingreso).to.equal(false);
});

//Métodos para tags
When('I click Tags', async function () {
  let elements = await this.driver.$$("body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a");
  return await elements[0].click();
});

When('I click New Tag', async function () {
  let elements = await this.driver.$$("body > div.gh-app > div > main > section > div > header > section > a.gh-btn-primary");
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
  let elements = await this.driver.$$("body > div.gh-app > div > main > section > form > div.gh-canvas-header > header > section > button");
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
  let elements = await this.driver.$$(`body > div.gh-app > div > main > section > div > button`);
  return await elements[0].click();
});

When('I confirm delete', async function () {
  let elements = await this.driver.$$(`div.modal-footer > button.gh-btn-red`);
  return await elements[0].click();
});

Then('the delete tag not exists {kraken-string}', async function (tagName) {
  let elements = await this.driver.$$(`//h3[contains(., '${tagName}')]`);
  let ingreso = elements.length > 0;
  expect(ingreso).to.equal(false);
});

//Métodos para POSTS
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
// METODOS CESAR RIVERA
Given('I navigate to administration page', async function () {
  return await this.driver.url("http://localhost:2368/ghost/#/signin");
});

Given('I navigate to page public page', async function () {
  return await this.driver.url("http://localhost:2368/");
});

When('I click on Settings button', async function () {
  let element = await this.driver.$(`a[href="#/settings/"]`);
  return await element.click();
});

When('I click on General Setting button', async function () {
  let element = await this.driver.$(`a[href="#/settings/general/"]`);
  return await element.click();
});

When('I click on Staff Save button', async function () {
  let element = await this.driver.$("//button[@class='gh-btn gh-btn-primary gh-btn-icon ember-view']");
  return await element.click();
});

When('I click on Expand button from Title & Description', async function () {
  let element = await this.driver.$("(//button[@type='button'])[3]");
  return await element.click();
});

When('I click on Expand button from Site timezone', async function () {
  let element = await this.driver.$("(//button[@type='button'])[4]");
  return await element.click();
});

When('I click on Expand button from Social accounts', async function () {
  let element = await this.driver.$("(//button[@type='button'])[9]");
  return await element.click();
});

When('I click on Post settings button', async function () {
  let element = await this.driver.$("//button[@title='Settings']");
  return await element.click();
});

When('I click on Publish dropdown menu', async function () {
  let element = await this.driver.$(".ember-view.ember-basic-dropdown-trigger");
  return await element.click();
});

When('I click on Schedule it for later radio button', async function () {
  let element = await this.driver.$("//body/div/div/div/section/div/div[2]/div[1]");
  return await element.click();
});

When('I click on Publish button', async function () {
  let element = await this.driver.$("//body//div//footer//button[2]");
  return await element.click();
});

When('I click on confirmation alert Publish button', async function () {
  let element = await this.driver.$("//button[@class='gh-btn gh-btn-black gh-btn-icon ember-view']");
  return await element.click();
});

When('I click on {string} menu', async function (name) {
  let element = await this.driver.$('a[href="#/' + name + '/"]');
  return await element.click();
});

When('I click on New {string} button', async function (name) {
  let element = await this.driver.$('a[href="#/editor/' + name + '/"]');
  return await element.click();
});

When('I click on input Title', async function () {
  let element = await this.driver.$("(//input[@type='text'])[1]");
  return await element.click();
});

When('I click on input Description', async function () {
  let element = await this.driver.$("(//input[@type='text'])[2]");
  return await element.click();
});

When('I click on input Facebook link', async function () {
  let element = await this.driver.$("(//input[@type='url'])[1]");
  return await element.click();
});

When('I click on input Twitter link', async function () {
  let element = await this.driver.$("(//input[@type='url'])[2]");
  return await element.click();
});

When('I click on input Page title', async function () {
  let element = await this.driver.$("//body//div//div//main//div//section//div//div//textarea");
  return await element.click();
});

When('I click on input Content page', async function () {
  let element = await this.driver.$("(//div[@data-kg='editor'])[1]");
  return await element.click();
});
When('I click on input Full name', async function () {
  let element = await this.driver.$("(//input[@type='text'])[1]");
  return await element.click();
});

When('I click on select Timezone', async function () {
  let element = await this.driver.$("(//span[@class='gh-select'])[1]");
  return await element.click();
});

When('I select the Timezone option America-Tijuana', async function () {
  let element = await this.driver.$("(//option[@value='America/Tijuana'])[1]");
  return await element.click();
});

When('I click on select Tags', async function () {
  let element = await this.driver.$("//div[@class='form-group']//input[@type='search']");
  return await element.click();
});

When('I select a tag', async function () {
  let element = await this.driver.$("//li[normalize-space()='#internal']");
  return await element.click();
});

When('I click on tag filter', async function () {
  let element = await this.driver.$("//span[normalize-space()='All tags']");
  return await element.click();
});

When('I filter post by All tags', async function () {
  let element = await this.driver.$("//li[@aria-current='true']");
  return await element.click();
});

When('I deselect a selected tag', async function () {
  let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/ul[1]/li[1]");
  return await element.click();
});

When('I click on Make this site private', async function () {
  let element = await this.driver.$("(//span[@class='input-toggle-component'])[1]");
  return await element.click();
});

When('I click on Sign out item menu', async function () {
  let element = await this.driver.$("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]");
  return await element.click();
});

When('I click on Your profile item menu', async function () {
  let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]/a[1]');
  return await element.click();
});

When('I click on the button having id {string}', async function (button) {
  let element = await this.driver.$('#' + button);
  return await element.click();
});

/*When('I see list of post', async function () {
    let elements = await this.driver.$$("//li[5]");
    let emailWasReceived = elements.length > 0;
    expect(emailWasReceived).to.equal(true);
});*/
/*When('I click on link having href {string}', async function (href) {
    let element = await this.driver.$(`a[href="${href}"]`);
    return await element.click();
});*/

When('I select a Post', async function () {
  let elements = await this.driver.$$("body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > ol:nth-child(1) > li:nth-child(2) > a:nth-child(1)");
  return await elements[0].click();
});