const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const prompts = require('prompts');
const path = require("path");
const fs = require("fs");

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
    type: `input`,
    message: `Office number:`,
    name: `number`

    },
    {
    type: `input`,
    message: `Email Address`,
    name: `Email`,
    validate: function(email)
    {
        valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(valid) {
            console.log( ` It's Valid!`);
            return true;
        } else {
            console.log(` Sorry invalid`);
            return false;
        }
    }
    },
    // need to fix email inquirer
    {
        type: `select`,
        message: `Here are your options`,
        name: `value`,
        choices: [
            {title: `Add an engineer`, value: `Add an engineer`},
            {title: `Add an intern`, value: `Add an intern`},
            {title: `Finish building the team`, value: `Finish building the team`},
        ]
    
        },
    
])
.then((response) => {
    console.log(response);

    fs.watchFile(`index.html`, generateTeam, (error) =>
    error ? console.error(error) : console.log(`We did it!`)
     )
});