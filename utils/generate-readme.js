const fs = require('fs');

const writeFile = readmeText => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/yourREADME.md', readmeText, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;