// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeToFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project (What is it? Why and how did you make it?):",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",

    },
    {
        type: "input",
        name: "usage",
        message: "What instructions are needed to use your project?",

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
    },
    {
        type: "input",
        name: "test",
        message: "Was any testing done? If so, how?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
];

// TODO: Create a function to initialize app
const init = () => {
    const answers = inquirer.prompt(questions);
    generateMarkdown()
      .then(() => writeToFile(readme.md, generateMarkdown()))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
