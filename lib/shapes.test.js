const { Triangle, Circle, Square } = require('./shapes.js');


test('Triangle createLogo() method returns correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.createLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0, 200 150, 0 300, 200" fill="$blue" />
    <text x="150" y="140" text-anchor="middle" font-size="60" fill="">$</text>
    </svg>`)
})