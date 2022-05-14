const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

async function getDiff(){

    const folder1 = config.folder1;
    const folder2 = config.folder2;
    const resultDir = config.resultsFolder;

    if (!fs.existsSync(resultDir)){
        fs.mkdirSync(resultDir, { recursive: true });
    }
    var step = 0;
    fs.readdir(folder1, async (err, files) => {
        for (const file of files) {
            step ++;
            const data = await compareImages(
                await fs.readFileSync(`${folder1}/${file}`),
                await fs.readFileSync(`${folder2}/${file}`),
                config.options
            );

            await fs.writeFileSync(`${resultDir}/${file}`, data.getBuffer());
        }
    });

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")

}
getDiff();
