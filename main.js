const fs = require('fs');
const path = require('path');
const filename = process.argv[2];
const newJsonFile = filename+'.json';

function parseINI(filename,fin) {
    let test = fs.readFileSync(filename, 'utf-8');
    let find = test.match(/(.*)=(.*)/g);
    let count = test.match(/(.*)=(.*)/g).length;

    fs.writeFile(newJsonFile,'{', function(err) {
        if (err) throw err;
        console.log('File created or Text had been write!');
    });
     
    for (i=0; i<count; i++) {
        if ((find[i][0])!==";") {
            console.log('première lettre : ',find[i][0]);
            let replace = find[i].replace('=','" : "');
            let newReplace = ('"'+replace+'",'+'\n\r');
            console.log('group [',i,'] : ',newReplace);
            fs.appendFile(newJsonFile,newReplace, function(err) {
                if (err) throw err;
                console.log('File created or Text had been write!');
            });
        }
    }
    fs.appendFile(newJsonFile,'}', function(err) {
        if (err) throw err;
        console.log('File created or Text had been write!');
    });
    return 'Terminé';
}
    console.log(parseINI(filename));