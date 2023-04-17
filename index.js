const fs = require('fs').promises
const { writeFile } = require('fs');
const inquirer = require('inquirer');

const questions = function () {
    return inquirer
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
};

const generateSVG = ({text, textColor, shape, shapeColor}) =>
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <${shape} cx="150" cy="100" r="80" fill="${shapeColor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}>${text}</text>
  
  </svg>`;

const init = () => {
    questions()
    .then((answer) => writeFile('logo.svg', generateSVG(answer)))
    .then(() => console.log('Success!'))
    .catch((err) => console.log(err))
};
init();