const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const prompts = require('prompts');
const path = require("path");
const fs = require("fs");
//const emailValidator = require('email-validator');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");
const { log } = require("console");
const { addAbortSignal } = require("stream");
//const { runInThisContext } = require("vm");

let employee = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
function addTeamMembers() {
    inquirer.prompt([
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
            message: `Email Address`,
            name: `Email`,
            // validate: function(input)
            // {
            //     valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            //     if(valid) {
            //         console.log( ` It's Valid!`);
            //         return true;
            //     } else {
            //         console.log(` Sorry invalid`);
            //         return false;
            //     }
            //     return input;
            // }
        },
        // need to fix email inquirer
        {
            type: `list`,
            message: `Here are your options`,
            name: `ListOfOptions`,
            choices: [`Add an engineer`, `Add an intern`, `Finish building the team`, `Add Manager`],
            default: `Finish building the team`
            // need to fix options  inquirer

        },
        {
            type: `input`,
            message: `Enginner's Github user Name:`,
            name: `EngineersGithub`,
            when: (answers) => answers.listOfOptions === `Add an engineer`
        },
        {
            type: `input`,
            message: `Intern School Name:`,
            name: `InternSchoolName`,
            when: (answers) => answers.listOfOptions === `Add an intern`
        },
        {
            type: `input`,
            message: `Manager Office Number:`,
            name: `ManagerOfficeNumber`,
            when: (answers) => answers.listOfOptions === `Add Manager`
        },

    ])
        .then((answers) => {
            console.log(answers);
            switch (answers.listOfOptions) {
                case "Add Manager":
                    const myManager = new Manager(name, id, Email, ManagerOfficeNumber)
                    employee.push(myManager)
                    break
                case "Add an intern":
                    const myIntern = new Intern(id, email, InternSchoolName)
                    employee.push(myIntern)
                    break
                case "Add an Enginner":
                    const myEnginner = new Engineer(id, email, EnginnerGithub)
                    employee.push(myEnginner)
                    break
                default:
                    writeFile()

            }
    addTeamMembers()

        });

}

function writeFile() {
    console.log(employee)
    fs.watchFile`team.html`, render(employee), (error) =>
        error ? console.error(error) : console.log(`We did it!`)

}


addTeamMembers()