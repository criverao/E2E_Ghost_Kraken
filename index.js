const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const properties = require("./properties.json");
const fs = require('fs');
let steps = [];
let resultInfo = {}
const adminUrl = properties.ADMIN_URL;
const folder1 = config.folder1;
const folder2 = config.folder2;
const resultDir = config.resultsFolder;

async function getDiff(){


    let datetime = new Date().toISOString().replace(/:/g,".");

    if (!fs.existsSync(`.${resultDir}`)){
        fs.mkdirSync(`.${resultDir}`, { recursive: true });
    }

    const files = fs.readdirSync(`.${folder1}`);
    let id = 0;
    for (const file of files) {
        id = file.split(".")[0]
        steps[id] = id;
        const data = await compareImages(
            await fs.readFileSync(`.${folder1}/${file}`),
            await fs.readFileSync(`.${folder2}/${file}`),
            config.options
        );
        resultInfo[id] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }

        await fs.writeFileSync(`.${resultDir}/${file}`, data.getBuffer());

    }

    fs.writeFileSync(`.${resultDir}/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `.${resultDir}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")

}

getDiff();

function row(step, info){
    return `<div class=" browser" id="test ${step}">
        <div class="btitle">
            <h2>Paso: ${step}</h2>
            <p>Data: ${JSON.stringify(info)}</p>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Reference</span>
            <img class="img2" src="${folder1}/${step}.png" id="refImage" alt="Reference">
          </div>
          <div class="imgcontainer">
            <span class="imgname">Test</span>
            <img class="img2" src="${folder2}/${step}.png" id="testImage" alt="Test">
          </div>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Differences</span>
            <img class="imgfull" src="${step}.png" id="diffImage" alt="Diff">
          </div>
        </div>
    </div>`
}

function createReport(datetime, resInfo){
    return `<html>
    <head>
        <title>VRT Report</title>
        <link href="index.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <h1>Report for <a href="${adminUrl}"> ${adminUrl}</a></h1>
        <p>Executed: ${datetime}</p>
        <div id="visualizer">
            ${steps.map(s=>row(s, resInfo[s]))}
        </div>
    </body>
</html>`
}
