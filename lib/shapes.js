// Shape is the base class for Circle, Triangle, and Square classes.
class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

    }
        // createLogo is a placeholder method that will be override by classes Circle, Triangle, and Square
        createLogo() {
            throw new Error('createLogo() has not been implemented')
        }
    }

// extends allows the sub classes to inherit properties and methods of the Shape class. properties such as
// this.text will be used, but the createLogo() will be override since each sub classes needs different SVG code to
// generate the specific shape. 
class Circle extends Shape {
    createLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
    }
}

class Triangle extends Shape {
    createLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0, 200 150, 0 300, 200" fill="${this.shapeColor}" />
        <text x="150" y="140" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
    }
}

class Square extends Shape {
    createLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="120" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
        </svg>
    `;
    }
}

export { Circle, Triangle, Square }