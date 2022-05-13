const {Given, When} = require("@cucumber/cucumber");

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


