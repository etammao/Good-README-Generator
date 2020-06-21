const inquirer = require("inquirer");

const fs = require('fs')

//Prompt user for input
async function mainApp(){
    const response = await inquirer.prompt([{
        type: "input",
        name: "Badge",
        message: "What is your Badge? Badge1 or Badge2"
    },
    {
        type: "input",
        name: "Title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "Description",
        message: "Description of your application",
    },
    {
        type: "editor",
        message: "Table of Contents",
        name: "TableOfContent",
    },
    {
        type: "input",
        name: "Installation",
        message: "Installation",
    },
    {
        type: "input",
        name: "Usage",
        message: "Usage",
    },
    {
        type: "input",
        name: "License",
        message: "License",
    },
    {
        type: "input",
        name: "Contributing",
        message: "Contributing",
    },
    {
        type: "input",
        name: "Tests",
        message: "Tests",
    },
])
    writeToFile( response );
}

mainApp();

function callback(err){
    if (err) {
        return console.log(err);
        }
        console.log("Success! Check your README.");
    };

function writeToFile( data ){
    
    fs.writeFile( 'README.md', 'README Generator' ,callback)
    Object.keys( data ).forEach( function( key ){
        fs.appendFile( 'README.md', `\n# ${key}\n${data[key]}`, callback)
    })
}






// var inquirer = require('inquirer');
// const fs = require('fs');


// async function mainApp(){
//     const response= await inquirer.prompt([{
//         type:'checkbox',
//         name:'Badge',
//         choices:['badge1', 'badge2']

//     },
//     {
//         type:'input',
//         name:'Title',
//         message:'what is your project tittle?',
//     }
// ])
// writeToFile(response);
// }

// mainApp();

// function complete(err){
//     if (err) throw err;
//   console.log('The file has been saved!');
// }

// function writeToFile(data){
//     fs.writeFile('README.md','This is a README Generator','complete()')
//     Object.keys(data).forEach(function(key){
//         fs.appendFile('README.md',`\n#${key}\n${data[key]}`,complete)
//     })
// }










// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
