const {When} = require("@cucumber/cucumber");

When('I click on Expand button from Site timezone', async function () {
    let element = await this.driver.$("(//button[@type='button'])[4]");
    return await element.click();
});

When('I click on select Timezone', async function () {
    let element = await this.driver.$("select[name='general[timezone]']");
    return await element.click();
});

When('I select the Timezone option {string}', async function (timezone) {
    let element = await this.driver.$("option[value='" + timezone + "']");
    return await element.click();
});