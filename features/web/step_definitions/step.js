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
    let element = await this.driver.$('button[id="ember11"]');
    return await element.click();
  })

  When('I click on profile', async function() {
    let element = await this.driver.$('div[id="ember33"]');
    return await element.click();
  })

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

  When('I click save button', async function () {
    let elements = await this.driver.$$("body > div.gh-app > div > main > section > div.gh-canvas-header > header > section > button");
    return await elements[0].click();
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
