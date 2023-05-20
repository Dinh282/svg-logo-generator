//packages needed for this application. we're using import and from instead of require
//to comply with ES 6 since our version of inquirer is greater than 8.2.4
import  inquirer  from 'inquirer';
import  fs  from 'fs';
import  { Circle, Triangle, Square } from './lib/shapes.js';
//color-name package provides a list of names of colors that are supported by SVG.
import colorNames from 'color-name';

//we use Object.keys() to extract te color names from the colorNames object.
const validColors = Object.keys(colorNames);

//this function takes in the array of validColors and the color value that inquirer obtains from 
//the user to check if what the user entered exists in the array.
function checkColor (validColors, color) {

        const colorRegEx = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        //.test() method is a regular expression method in JS. it tests whethera string matches 
        // a regular expression pathern. in this case, it is checking whether what the user entered
        //matches with the pattern of colorRegEx.
        if(colorRegEx.test(color) || validColors.includes(color.toLowerCase())) {
            return true;
        }else {
            return 'Enter a valid color name or a hexadecimal color code.';
        }
}

//prompt() method of inquirer is called to retrieve data from user.
 inquirer
        .prompt([
          {
            //this checks if the length of the string the user input is equal to or less than 3.
            validate: (str) => str.length <=3, 
            name: 'text',
            message: 'Enter text for the logo. (Must not b more than 3 characters.)',
          },
          {
            //this checks the color name or Hex code entered by user by calling the checkColor() function. 
            validate: (color) => checkColor(validColors, color),
            name: 'textColor',
            message: 'Enter a color name or Hexadecimal color code for the text color.',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo.',
            choices: ['circle', 'triangle', 'square']
          },
          {
            validate: (color) => checkColor(validColors, color),
            name: 'shapeColor',
            message: 'Enter a color name or Hexadecimal color code for the shape color.',
          },
        ])
        //answers is the parameter to the => function that we obtain from inquirer.prompt().
        .then((answers) => {
            //we extract the properties from answers object and assign them to the variables
            //text, textColor, shape, shapeColor using destructuring syntax.
            const {text, textColor, shape, shapeColor} = answers;
            
            // we declare variable logo to assign the instance of specific shape based on user selection for shape.
            var logo;

            //switch statement to checks value of shape and then chooses the correct class to instantiate.
            switch (shape) {
                case 'circle':
                    logo = new Circle(text, textColor, shapeColor);
                    break;
                case 'triangle':
                    logo = new Triangle(text, textColor, shapeColor);
                    break;
                case 'square':
                    logo = new Square(text, textColor, shapeColor);
                    break;
                default:
                    throw new Error('Not a valid shape!')
            }

            // once the shape instance is created, the craeteLogo() method is called on the logo object. 
            // the createLogo() would return a string that is written to the svg file.
            const content = logo.createLogo();

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
    

   
  