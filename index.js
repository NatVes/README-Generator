const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add description for your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this application be used?',        
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is required with this project?',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense', 'N/A'],
        default: 'MIT License',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instruction for testing your application?',        
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'What command should be used to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, `${fileName}.md`);
    fs.writeFile(filePath, generateMarkdown(data), (error) =>
        error ? console.error('Error writing README file: ', error) : console.log('README file generated successfully')
    )    
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(answers.title, answers);
        })
}

// function call to initialize program
init();
