
const fs = require('fs').promises;

fs.readdir('./boys').then(files =>{
    console.log(files);


for (const file of files) {
    fs.readFile(`./boys/${file}`).then(data=>{
        if(data.includes('"gender": "female"')){
            fs.rename(`./boys/${file}`,`./girls/${file}`)
        }
    })

}
})
fs.readdir('./girls').then(files =>{
    console.log(files);


    for (const file of files) {
        fs.readFile(`./girls/${file}`).then(data=>{
            if(data.includes('"gender": "male"')){
                fs.rename(`./girls/${file}`,`./boys/${file}`)
            }
        })

    }
})