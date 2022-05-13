const {When} = require("@cucumber/cucumber");

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