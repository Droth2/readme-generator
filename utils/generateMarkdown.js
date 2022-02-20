// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  if (license === 'Apache License v2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License v2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License v3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'MIT License') {
    return '(https://opensource.org/licenses/MIT)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, questionsGithub) {
  if (!license) {
    return '';
  }

  return `
  Copyright [${new Date().getFullYear()}] [${questionsGithub}]
  ${license}
  see the License for the specific language governing permissions and limitations.
  -${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  const {projectTitle, description, installation, usage, license, contributions, tests, questionsGithub, questionsEmail} = readmeData

  return `
  # ${projectTitle}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${renderLicenseSection(license, questionsGithub)}

  ## Contributions
  ${contributions}

  ## Tests
  ${tests}

  ## Questions
  Contact us
  -https://github.com/${questionsGithub}
  -${questionsEmail}
`;
}

module.exports = generateMarkdown;
