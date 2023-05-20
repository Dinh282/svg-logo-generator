//packages needed for this application. we using import from instead of require
//to comply with ES 6 since our version of inquirer is later than 8.2.4
import  inquirer  from 'inquirer';
import  fs  from 'fs';
import  CreateLogo from './lib/shapes.js';

 inquirer
        .prompt([
          {
            validate: (str) => str.length <=3, 
            name: 'text',
            message: 'Enter text fr the logo. (Must not b more than 3 characters)',
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
        //answers is parameter to the => function that we obtain from inquirer.prompt().
        .then((answers) => {
            //we destructure to extract the properties from answer object and assign them to the variables
            //text, textColor, shape, shapeColor
            const {text, textColor, shape, shapeColor} = answers;
            //we instantiate CreateLogo(with the variables as arguments) and call the createLogo() method
            //and whatever is returned from createLogo() we are saving to variabel content.
            const content =  new CreateLogo(text, textColor, shape, shapeColor).createLogo() 
            // fs.promises.writeFile() method is used to generate the svg file. we pass in svg file name,
            // and the data to be written (content).
           return fs.promises.writeFile(
            './examples/logo.svg',
            content
          );
        })
        //we log this to let user know that the svg file was generated successfully.
        .then(() => console.log('Generated logo.svg'))
        //error handling. prints out "Oops. Something went wrong." and the error.
        .catch((err) => {
          console.log('Oops. Something went wrong.');
          console.log(err);
        });
    
  
   
  