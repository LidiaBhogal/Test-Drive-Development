const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function promptUser() {
    // return inquirer.prompt(




    //         [{
    //             type: 'checkbox',
    //             message: 'Do you want to add an engineer?, add an intern? or finish building the team?',
    //             name: 'addSomething',
    //             choices: ['add an engineer', 'add an intern', 'finish building the team?']

    //         }],
    //     )

inquirer.prompt(
    //manager questions
    [
        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'managersName'


        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'managerId'


        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'


        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber'


        
}]).then(response => {
    // populate manager info
    const manager = new Manager(response.name,response.id,response.email,response.officeNumber)

    promptForNexEmployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)
}}