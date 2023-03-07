const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const prompts = require('prompts');
const path = require("path");
const fs = require("fs");
const emailValidator = require('email-validator');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");
const { log } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


inquirer.prompt ([
    {
    type: `input`,
    message: `Name:`,
    name: `name`

    },
    {
    type: `input`,
    message: `Employee ID:`,
    name: `id`

    },
    {
    type:`number`,
    message: `Office number:`,
    name: `office number`

    },
    {
    type: `input`,
    message: `Email Address`,
    name: `Email`,
    validate: function(input)
    {
        valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(valid) {
            console.log( ` It's Valid!`);
            return true;
        } else {
            console.log(` Sorry invalid`);
            return false;
        }
        return input;
    }
    },
    // need to fix email inquirer
    {
        type: `list`,
        message: `Here are your options`,
        name: `List of options`,
        choices: [ `Add an engineer`, `Add an intern`, `Finish building the team` ],
        default: `Finish building the team`
    // need to fix options  inquirer
    
        },
    
])
.then((response) => {
    console.log(response);

    fs.watchFile(`team.html`, render, (error) =>
    error ? console.error(error) : console.log(`We did it!`)
     )
});