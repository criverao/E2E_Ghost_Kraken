let path = require('path');
const fs = require('fs');
let Mockaroo = require('mockaroo');
let client = new Mockaroo.Client({
    apiKey: 'd5b2c610'
})

let scriptName = path.basename(__filename).split(".")[0];

client.generate({
    include_nulls: true,
    count: 10,
    fields: [
        {
            name: 'Member Name',
            type: 'Full Name'
        },
        {
            name: 'Member Email',
            type: 'Email Address'
        }
    ]
}).then(function(records) {

    let dataPoolDir = 'data_pools';
    let dataPoolName = `${dataPoolDir}/${scriptName}.json`;

    createFolderIfDoesNotExists(dataPoolDir);

    fs.writeFile(dataPoolName, JSON.stringify(records), err => {
        if (err) {
          console.error(err);
        } else {
            console.log("file written successfully");
        }
      });
});

function createFolderIfDoesNotExists(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}