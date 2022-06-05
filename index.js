
const inquirer = require('inquirer');
const fs = require('fs');
//link to readme template
const generatePage = require('./utils/generateMarkdown.js');


const licenseMap = {
    'None': 'None',
    'Apache License 2.0': 'Apache-2.0',
    'MIT License': 'MIT',
    'Boost Software License 1.0': 'BSL-1.0',
    'Eclipse Public License 2.0': 'EPL-2.0',
    'Mozilla Public License 2.0': 'MPL-2.0',
};


// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt( [
    {
        type: "input",
        name: "title",
        message: "Enter your project title:",
        validate: async (input)  => {
            if (input) {
                return true; 
            } else {
                console.log("Project title is required. Please enter a title."); 
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "desc",
        message: "project description:",
        validate: async (input)  => {
            if (input) {
                return true; 
            } else {
                console.log("Please enter a description"); 
                return false; 
            }
        }
        
    },
    {
        type: "input",
        name: "installation",
        message: "installation instructions:"

    },
    {
        type: "input",
        name: "usage",
        message: "usage instructions:"
    },
    {
        type: "input",
        name: "contribution",
        message: "contribution guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "tests:"
    },
    {
        type: 'list',
        message: 'Select License:',
        choices: Object.keys(licenseMap),
        name: 'license',
        validate: async (checkbox)  => {
            if (checkbox.length == 1) {
                return true; 
            } else {
                console.log("Please choose an option."); 
                return false; 
            }
        }
       
    },
    {
        type: "input", 
        name: "username", 
        message: "Github username:",
        
    }, 
    {
        type: "input", 
        name: "link", 
        message: "Github link:",
    },    
    {
        type: "input", 
        name: "email", 
        message: "email:",
        validate: emailInput => {
            if (emailInput) {
                return true; 
            } else {
                console.log("Email is required.");
                return false; 
            }
    }}, 
    
]
    )}

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
    
