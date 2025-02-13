// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  if(license === 'No License'){licenseBadge = ''}
  
  else if(license === 'Apache License 2.0'){licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'}

  else if(license === 'GNU AGPLv3'){licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'}

  else if(license === 'GNU GPLv3'){licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'}

  else if(license === 'GNU LGPLv3'){licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'}

  else if(license === 'Mozilla Public License 2.0'){licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'}

  else if(license === 'MIT License'){licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}

  else if(license === 'Boost Software License 1.0'){licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'}

  else if(license === 'The Unlicense'){licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'};

  return licenseBadge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  if(license !== 'No License'){licenseLink = '- [License](#license)'}
  else{licenseLink = ''};

  return licenseLink
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;

  if(license !== 'No License'){licenseSection = `## License\n\n${license}`}

  else{licenseSection = ''};

  return licenseSection
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
${licenseBadge}

## Description

${data.description}

![plot]()

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${licenseLink}

## Installation

${data.installationInstructions}

## Usage

${data.usageInformation}

[Video Demo]()

## Contributing

${data.contributionGuidelines}

## Tests

${data.testInstructions}

## Questions

https://github.com/${data.gitHubQuestions}

${data.emailQuestions}

${licenseSection}`;
};

export default generateMarkdown;
