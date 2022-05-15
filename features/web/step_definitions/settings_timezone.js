const {When} = require("@cucumber/cucumber");
const properties = require("../../../properties.json");

let appVersion = properties.appVersion.replace(/\./g,"_");

const expandSelector = (appVersion === 'v3_42') ? "(//button[@type='button'])[3]" : "(//button[@type='button'])[4]";

When('I click on Expand button from Site timezone', async function () {
    let element = await this.driver.$(expandSelector);
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