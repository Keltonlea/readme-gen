// function to generate markdown for README
const generateMarkdown = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
    
    # Table Of Content
     
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contributing](#Contributing)
    * [Test](#test)
    * [License](#License)
    * [Contact](#Contact)
        
    # Description
        ${data.description}
    # Installation
        ${data.installation}
    # Usage
        ${data.usage}
    # Contribution
        ${data.contribution}
    # Test
        ${data.test}
    # License
        * This application is covered under ${data.license}.
        
    # Contact
    * [Github](https://github.com/${data.git})
    * E-mail: ${data.email}`;
}
  
  // use for importing Markdown in index 
  module.exports = generateMarkdown;