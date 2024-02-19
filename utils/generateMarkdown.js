// function to generate markdown for README
function generateMarkdown(data) {
  let  licenseBadgePath = '';
  let licenseBadgeLink = '';

  switch (data.license) {
    case 'Apache 2.0 License':
      licenseBadgePath = 'Apache_2.0-blue';
      licenseBadgeLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost Software License 1.0':
      licenseBadgePath = 'Boost_1.0-lightblue';
      licenseBadgeLink = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'BSD 2-Clause "Simplified" License':
      licenseBadgePath = 'BSD_2--Clause-orange';
      licenseBadgeLink = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadgePath = 'BSD_3--Clause-orange';
      licenseBadgeLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadgePath = 'CC0_1.0-lightgrey';
      licenseBadgeLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Eclipse Public License 2.0':
      licenseBadgePath = 'EPL_2.0-red';
      licenseBadgeLink = 'https://opensource.org/licenses/EPL-2.0';
      break;
    case 'GNU General Public License v3.0':
      licenseBadgePath = 'GPLv3-blue';
      licenseBadgeLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU General Public License v2.0':
      licenseBadgePath = 'GPL_v2-blue';
      licenseBadgeLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'GNU Affero General Public License v3.0':
      licenseBadgePath = 'AGPL_v3-blue';
      licenseBadgeLink = 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU Lesser General Public License v3.0':
      licenseBadgePath = 'LGPL_v3-blue';
      licenseBadgeLink = 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'MIT License':
      licenseBadgePath = 'MIT-yellow';
      licenseBadgeLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadgePath = 'MPL_2.0-brightgreen';
      licenseBadgeLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      licenseBadgePath = 'Unlicense-blue';
      licenseBadgeLink = 'http://unlicense.org/';
      break;
    default:
      licenseBadgePath = 'N/A-blue';
      licenseBadgeLink = 'Unknown';
  }

  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${licenseBadgePath}.svg)](${licenseBadgeLink})
  
  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.tests}

  To run the tests simply enter \`${data.testCommand}\` in the terminal.

  ## Questions

  If you have any questions or need further assistance with the application, feel free to reach out via GitHub or email:

  GitHub - [${data.GitHub}](https://github.com/${data.GitHub})

  Email - [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;
