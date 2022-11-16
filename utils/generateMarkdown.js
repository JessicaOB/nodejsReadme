// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "NONE") {
    return ``;
  }
  else if (license === "OTHER") {
    return ``
  }
  else {
    return `[![License](https://img.shields.io/badge/License-${license}-blueviolet.svg?style=plastic)](${renderLicenseLink(license)})`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "GNU GPL v3.0":
      return `https://opensource.org/licenses/GPL-3.0`;
    case "BSD 3-Clause":
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case "OTHER":
    case "NONE":
      return ``;
    default:
      break;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NONE") {
    return ``;
  }
  else if (license === "OTHER") {
    return `## License
  Enter information regarding the license you used here.`
  }
  else {
    return `## License
  ${license} license. Click the license badge at the top for license details.`
  }
};
//This function generates the table of contents, with or without the license section, depending upon the user input
function contents(license) {
  if (license === "NONE") {
    return `
* [Description](#description)
* [Installation](#installation
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)`
  }
  else {
    return `
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents
  ${contents(data.license)}

## Description
  ${data.description}
  
## Installation
  ${data.installation}
  
## Usage
  ${data.usage}
  
## Contributing
  ${data.contributing}
  
${renderLicenseSection(data.license)}
  
## Tests
  ${data.tests}
  
## Questions
  Contact information for any questions regarding this project:  
  Github - https://github.com/${data.username}  
  Email - ${data.email}`;
};

module.exports = generateMarkdown;
