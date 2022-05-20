const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require("fs");
const properties = require("../../../properties.json");
const {expect} = require("chai");

const skipWaiting = properties.skipWaiting;
const takeScreenshots = properties.takeScreenshots;
let appVersion = properties.appVersion.replace(/\./g,"_");
let counter = 0;

const buttonSaveSelector = (appVersion === 'v3_42') ?
    "//main[@role='main']//section//header//section//button" :
    "body > div.gh-app > div > main > section > div.gh-canvas-header > header > section > button";

const retryButtonSelector = "//span[normalize-space()='Retry']";

When('I refresh the current page', async function () {
    await this.driver.refresh();
});

When('I click on Profile button', async function () {
    let element = await this.driver.$("(//div[@role='button'])[1]");
    return await element.click();
});

When('I click on Save button', async function () {
    let element = await this.driver.$(buttonSaveSelector);
    return await element.click();
});

Then('I expect a Retry button', async function () {
    let elementValue = await this.driver.$(retryButtonSelector).getText();
    expect(elementValue).to.equal('Retry');
});

When('I click on Settings button', async function () {
    if (appVersion === 'v3_42') {
        return;
    }
    let element = await this.driver.$(`a[href="#/settings/"]`);
    return await element.click();
});

When('I click on General Setting button', async function () {
    let element = await this.driver.$(`a[href="#/settings/general/"]`);
    return await element.click();
});

When('I just wait for {int} seconds', async function (seconds) {
    return await new Promise(r => setTimeout(r, 1000 * seconds));
});

When('I wait for {int} seconds to take a screenshot', async function (seconds) {
    if (skipWaiting) return true;
    counter += 1;

    let featureName = featureFileInPath('./features')[0].split(".")[0];
    let dir = `./screenshots/${appVersion}/${featureName}`;

    createFolderIfDoesNotExists(dir);

    await new Promise(r => setTimeout(r, 1000 * seconds));

    if (takeScreenshots) {
        return await this.driver.saveScreenshot(`${dir}/${counter}.png`);
    }
});

function createFolderIfDoesNotExists(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function featureFileInPath(path) {
    let filesInFeaturePath = filesInPath(path);
    return filesInFeaturePath.filter((fileName) => {
        return fileName.match(/\.feature$/);
    });
}

function filesInPath(path) {
    return fs.readdirSync(path);
}