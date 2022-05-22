const {Given, When} = require("@cucumber/cucumber");

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

When('I click on select Tags', async function () {
    let element = await this.driver.$("//div[@class='form-group']//input[@type='search']");
    return await element.click();
});

When('I select a tag', async function () {
    let element = await this.driver.$("(//input[@type='search'])[1]");
    await element.keys("ArrowDown");
    return await element.keys("Enter");
});

When('I click on tag filter', async function () {
    let element = await this.driver.$("//span[normalize-space()='All tags']");
    return await element.click();
});

When('I click on tags input', async function () {
    let element = await this.driver.$("(//input[@type='search'])[1]");
    return await element.click();
});

When('I filter post by All tags', async function () {
    let element = await this.driver.$("//li[@aria-current='true']");
    return await element.click();
});

When('I deselect a selected tag', async function () {
    let element = await this.driver.$("(//input[@type='search'])[1]");
    return await element.keys("Backspace");
});

When('I click on Sign out item menu', async function () {
    let element = await this.driver.$("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]");
    return await element.click();
});

When('I click on the button having id {string}', async function (button) {
    let element = await this.driver.$('#' + button);
    return await element.click();
});

When('I select a Post', async function () {
    let elements = await this.driver.$$("body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > ol:nth-child(1) > li:nth-child(2) > a:nth-child(1)");
    return await elements[0].click();
});


