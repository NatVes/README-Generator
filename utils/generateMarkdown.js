// function to generate markdown for README
function generateMarkdown(data) {
  return 
  `# ${data.title}
  
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

  ## Questions

  [${data.GitHub}](https://github.com/${data.GitHub})
  [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
