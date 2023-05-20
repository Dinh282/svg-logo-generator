


class CreateLogo {
    constructor (text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;

    }
    
    //once creatLogo() is called, it calls on the function to creaete a logo based on the
    //shape that is passed. 
    createLogo() {
        console.log(this.shape)
        switch (this.shape) {
            case 'circle':
                return this.createCircleLogo();
            case 'triangle':
                return this.createTriangleLogo();
            case 'square':
                return this.createSquareLogo();
            default: 
            throw new Error('Not a valid shape!');
        }   

    }

    //each of the create(Shape)Logo() methods returns the code for fs.promises.writeFile()
    //to write the svg file. the code is written with template literal and the variables 
    // from answers are injected. 
    createCircleLogo() {
        return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>
            `;
    }

    createTriangleLogo() {
        return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0, 200 150, 0 300, 200" fill="${this.shapeColor}" />
                <text x="150" y="155" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
                </svg>
            `;
    }

    createSquareLogo() {
        return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="${this.shapeColor}" />
                <text x="100" y="120" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
                </svg>
            `;
    }
}


//we export class CreateLogo so our index.js file can import and use it.
export default CreateLogo