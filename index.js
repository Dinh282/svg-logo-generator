//packages needed for this application. we using import from instead of require
//to comply with ES 6 since our version of inquirer is later than 8.2.4
import  inquirer  from 'inquirer';
import  fs  from 'fs';
import join from 'path';



class CLI {
    constructor() {
        
    }
    run() {
      return inquirer
        .prompt([
          {
            type: 'input',
            name: 'text',
            message: 'Enter text fr the logo. (Must not b more than 3 characters',
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color.',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo.',
            choices: ['circle', 'triangle', 'square']
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color',
          },
        ])
        .then(() => {
          return writeFile(
            join(__dirname, 'logo.svg'),
            createLogo()
          );
        })
        .then(() => console.log('Generated logo.svg'))
        .catch((err) => {
          console.log(err);
          console.log('Oops. Something went wrong.');
        });
    }
  
   
  }