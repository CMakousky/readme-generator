// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## License

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Placeholder for License.

## Installation

${data.installationInstructions}

## Usage

${data.usageInformation}

## Contributing

${data.contributionGuidelines}

## Tests

${data.testInstructions}

## Questions

https://https://github.com/${data.gitHubQuestions}

${data.emailQuestions}

`;
}

export default generateMarkdown;
