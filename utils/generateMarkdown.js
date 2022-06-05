// function to generate markdown for README
const generateMarkdown = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
    

    ## Description 
    ${data.description}

    ## Table Of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#ontributing)
    * [Tests](#tests)
    * [License](#license)
    * [Contact](#contact)
        
   
    ## Installation
        ${data.installation}
    ## Usage
        ${data.usage}
    ## Contribution
        ${data.contribution}
    ## Test
        ${data.test}
    ## License
        * This application is covered under ${data.license}.
        
    ## Contact
    * [Github](https://github.com/${data.git})
    * E-mail: ${data.email}`;
}
  
  // use for importing Markdown in index 
  module.exports = generateMarkdown;