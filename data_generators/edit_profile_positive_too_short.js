let path = require('path');
const fs = require('fs');
let Mockaroo = require('mockaroo');
let client = new Mockaroo.Client({
    apiKey: 'd5b2c610'
})

let scriptName = path.basename(__filename).split(".")[0];

client.generate({
    count: 10,
    fields: [
        {
            name: 'Full name',
            type: 'Regular Expression',
            value: '\\w{1}'
        },
        {
            name: 'Slug',
            type: 'Formula',
            value: 'lower(/\\w{1}/.gen)'
        },
        {
            name: 'Email',
            type: 'Formula',
            value: "concat('u@', /\\w{1}/.gen, '.co')"
        },
        {
            name: 'Location',
            type: 'Regular Expression',
            value: '\\w{1}'
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