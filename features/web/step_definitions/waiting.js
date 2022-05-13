const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require("fs");
let appVersion = 'v4.41.3';
//let appVersion = 'v3.42';
let counter = 0;

When('I just wait for {int} seconds', async function (seconds) {
    return await new Promise(r => setTimeout(r, 1000 * seconds));
});

When('I wait for {int} seconds to take a screenshot', async function (seconds) {
    counter += 1;

    let featureName = featureFileInPath('./features');
    let dir = `./screenshots/${appVersion}/${featureName}`;

    createFolderIfDoesNotExists(dir);

    await new Promise(r => setTimeout(r, 1000 * seconds));
    return await this.driver.saveScreenshot(`${dir}/${counter}.png`);
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