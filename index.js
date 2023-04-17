const fs = require('fs')
const inquirer = require('inquirer');

const generateCircle = ({ text, textColor, shape, shapeColor }) =>
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`

  const generateSquare = ({ text, textColor, shape, shapeColor }) =>
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="${shapeColor}" />
  
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`

  const generateTriangle = ({ text, textColor, shape, shapeColor }) =>
    `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

    <polygon points="100,20 40,200 199,199" fill="${shapeColor}" />
  
    <text x="250" y="295" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`

const questions = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter a text.'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color keyword or hexadecimal for the text.'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to use?',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color keyword or hexadecimal for the shape.'
            }
        ])
        .then((answer) => {
            const svgCircle = generateCircle(answer);
            const svgSquare = generateSquare(answer)
            const svgTriangle = generateTriangle(answer)
            if (answer.shape == 'circle') {
                fs.writeFile('logo.svg', svgCircle, (err) =>
                    err ? console.log(err) : console.log("Success made a circle!"))
            }else if (answer.shape == 'square') {
                fs.writeFile('logo.svg', svgSquare, (err) =>
                err ? console.log(err) : console.log("Success made a csqa!"))  
            } else {
                fs.writeFile('logo.svg', svgTriangle, (err) =>
                err ? console.log(err) : console.log("Success made a tri!")) 
            }
        })
}

questions()