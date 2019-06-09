const fs = require('fs');
const config = require('./config.json')
let path = config.path
main()
function main(){
    let files = [] 
    getAllFileName(files,path)
    let outputFiles = randomSelect(files,3)
    for (var file of outputFiles){
        fs.copyFile(path+file, "./output/"+file, (err) => {
        if (err) throw err;
        });
    }
}
async function getAllFileName(files,path){
    fs.readdirSync(path).forEach(file => {
        files.push(file)
        console.log("Pushing file name "+file);
    });
    
    return files
}

function randomSelect(files,number){
    let outputFiles = []
    do {
        
        outputFiles[outputFiles.length] = files.splice(Math.floor(Math.random() * files.length) , 1)[0];
    } while (outputFiles.length < number);
    return outputFiles
}