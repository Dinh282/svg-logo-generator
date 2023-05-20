//we use Common JS here bcause when Jest runs this file it doesnt throw and unexpected token error,
//since Jest by default doesn't reaad ES6.
const { Triangle, Circle, Square } = require('./shapes.js');

test('Circle createLogo() method returns correct SVG string', () => {
    //here we define the expect values of shapeColor, textColor, and text.
    const shapeColor = 'blue';
    const textColor = 'white';
    const text = 'UNC';
    const circle = new Circle(text, textColor, shapeColor);

    //expect function is used to assert that the output of circle.createLogo() equals to the expected string.
    expect(circle.createLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    )
})

test('Triangle createLogo() method returns correct SVG string', () => {
    const shapeColor = 'blue';
    const textColor = 'white';
    const text = 'UNC';
    const triangle = new Triangle(text, textColor, shapeColor);

    expect(triangle.createLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0, 200 150, 0 300, 200" fill="${shapeColor}" />
        <text x="150" y="140" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text>
        </svg>`
    )
})

test('Square createLogo() method returns correct SVG string', () => {
    const shapeColor = 'blue';
    const textColor = 'white';
    const text = 'UNC';
    const square = new Square(text, textColor, shapeColor);

    expect(square.createLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="0" width="200" height="200" fill="${shapeColor}" />
        <text x="150" y="120" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text>
        </svg>`
    )
})