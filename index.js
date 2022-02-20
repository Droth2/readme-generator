// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/generate-readme.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project? (required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'what are the steps required to install your project?'
        },
        {
            input: 'input',
            name: 'usage',
            message: 'provide instructions on how to use your project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'what license does your project have?',
            choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Provide isntructions on how other developers can contribute to this project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any tests for your project that you have written here.'
        },
        {
            type: 'input',
            name: 'questionsGithub',
            message: 'What is your GitHub username to link this project to in case of questions by users?'
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'What is your email for users to get in contact with you?'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

questions()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(readmeText => {
        return writeFile(readmeText);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });