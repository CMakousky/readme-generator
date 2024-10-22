// TODO: Include packages needed for this application

import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    `Enter a project title.`,
    `Enter a description for the project.`,
    `Select a license to use for this project.`,
    `Enter installation instructions for the app.`,
    `Input app usage instructions.`,
    `What are the contribution guidelines for this project?`,
    `What are the recommended test instructions for this project?`,
    `Enter a GitHub username.`,
    `Enter an email address for contact information.`,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) => {err ? console.error(err) : console.log(`\nREADME created!`)});
};

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: `${questions[0]}`,
            },
            {
                type: 'input',
                name: 'description',
                message: `${questions[1]}`,
            },
            {
                type: 'list',
                name: 'license',
                message: `${questions[2]}`,
                choices: [
                    'GNU AGPLv3',
                    'GNU GPLv3',
                    'GNU LGPLv3',
                    'Mozilla Public License 2.0',
                    'Apache License 2.0',
                    'MIT License',
                    'Boost Software License 1.0',
                    'The Unlicense'
                ],
            },
            {
                type: 'input',
                name: 'installationInstructions',
                message: `${questions[3]}`,
            },
            {
                type: 'input',
                name: 'usageInformation',
                message: `${questions[4]}`,
            },
            {
                type: 'input',
                name: 'contributionGuidelines',
                message: `${questions[5]}`,
            },
            {
                type: 'input',
                name: 'testInstructions',
                message: `${questions[6]}`,
            },
            {
                type: 'input',
                name: 'gitHubQuestions',
                message: `${questions[7]}`,
            },
            {
                type: 'input',
                name: 'emailQuestions',
                message: `${questions[8]}`,
            },
        ])
        .then((data) => {
            const markdownContent = generateMarkdown(data);
            writeToFile(`markdownTest.md`, markdownContent);
        });
};

// Function call to initialize app
init(questions);
