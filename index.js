// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: function (answer) {
            return answer.length > 0
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project (What is it? Why and how did you make it?):",
        validate: function (answer) {
            return answer.length > 0
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
        validate: function (answer) {
            return answer.length > 0
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What instructions are needed to use your project?",
        validate: function (answer) {
            return answer.length > 0
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project:",
        choices: [
            "Apache 2.0",
            "MIT",
            "GNU GPL v3.0",
            "BSD 3-Clause",
            "OTHER",
            "NONE",
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter the names of those who contributed to the project:",
        validate: function (answer) {
            return answer.length > 0
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Was any testing done? If so, how?",
        validate: function (answer) {
            return answer.length > 0
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: function (answer) {
            return answer.length > 0
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: function (answer) {
            return answer.length > 0
        }
    },
];
const askQuestions = () => {
    return inquirer.prompt(questions)
};
// TODO: Create a function to initialize app
const init = () => {
    askQuestions()
        .then((data) => writeFile("readme.md", generateMarkdown(data)))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
