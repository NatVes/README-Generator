const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        massage: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        massage: 'Add description for your project',
    },
    {
        type: 'input',
        name: 'installation',
        massage: 'What is the installation process?',
    },
    {
        type: 'input',
        name: 'usage',
        massage: 'How will this project be used?',
    },
    {
        type: 'list',
        name: 'license',
        massage: 'What license is required with this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        massage: 'How can someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        massage: 'Provide instruction for testing your application?',
    },
    {
        type: 'input',
        name: 'GitHub',
        massage: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        massage: 'What is your email address?',
    },
];

// function to write README file
function writeToFile(fileName, data) { //generateMarkdown()
}

// function to initialize program
function init() {
//inquirer.prompt()
}

// function call to initialize program
init();
