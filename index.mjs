import inquirer from 'inquirer';
import fs from "fs/promises";

let { projectName, description, contents, license, usage, installation, contributing, tests, questions, licenseinput } = await inquirer
   .prompt([

      {
         type: 'input',
         message: 'What is your project name?',
         name: 'projectName',
      },
      {
         type: 'input',
         message: 'Write a brief description of your project ',
         name: 'description',
      },
      {
         type: 'input',
         message: 'Enter the installation instructions: ',
         name: 'installation',
      },
      {
         type: 'input',
         message: 'Explain how to use this application: ',
         name: 'usage',
      },
      {
         type: 'input',
         message: 'What license does the application use? ',
         name: 'licenseinput',
      },
      {
         type: 'list',
         message: 'Please select the license from the list below: ',
         name: 'license',
         choices: ['MIT', 'Apache', 'IBM', 'BOOST', 'Mozilla'],
      },
      {
         type: 'input',
         message: 'What content does it include? ',
         name: 'contents',
      },
      {
         type: 'input',
         message: 'Enter contribution guidelines: ',
         name: 'contributing',
      },
      {
         type: 'input',
         message: 'Enter Test methods for your code: ',
         name: 'tests',
      },
      {
         type: 'input',
         message: 'Enter instructions on how to contact the project creator for questions, feedback or to report issues with the application: ',
         name: 'questions',
      },
   ])

let readmeText = `# ${projectName}
   ${generateLicense(license)}
## Project Description   
   * ### ${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contents](#contents)
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions) 

## Installation
   ### ${installation}
## Usage
   ### ${usage}
## License 
   ### ${licenseinput}
## Contents  
   ### ${contents}
## Contributing  
   ### ${contributing}
## Tests
   ### ${tests}
## Questions 
   ### ${questions}

`
function generateLicense(license) {

   switch (license) {
      case 'MIT':
         return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
         break;

      case 'Apache':
         return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
         break;

      case 'IBM':
         return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
         break;

      case 'BOOST':
         return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
         break;

      case 'Mozilla':
         return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
         break;

      default:
         break;
   }


}

fs.writeFile(`${projectName}.md`, readmeText)
console.log("Project Name: ", projectName)
console.log("Project Description: ", description)
console.log("Installation: ", installation)
console.log("Languages used: ", contents)
console.log("Usage: ", usage)
console.log("License: ", license)
console.log("Contributing: ", contributing)
console.log("Testing Methods: ", tests)
console.log("Questions: ", questions)



