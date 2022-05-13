const {When, Then} = require("@cucumber/cucumber");

When('I click on Settings button', async function () {
    let element = await this.driver.$(`a[href="#/settings/"]`);
    return await element.click();
});

When('I click on General Setting button', async function () {
    let element = await this.driver.$(`a[href="#/settings/general/"]`);
    return await element.click();
});

When('I click on Expand button from Social accounts', async function () {
    let element = await this.driver.$("(//button[@type='button'])[9]");
    return await element.click();
});

When('I click on Close button from expanded block', async function () {
    let element = await this.driver.$("(//span[normalize-space()='Close'])[1]");
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



