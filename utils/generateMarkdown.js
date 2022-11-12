// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch (license){
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GNU GPL v3.0":
      return "https://opensource.org/licenses/GPL-3.0";
    case "BSD 3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "OTHER":
    case "NONE":
        return "";
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

`;
}

module.exports = generateMarkdown;
