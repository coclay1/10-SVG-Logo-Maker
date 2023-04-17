const fs = require('fs')
const inquirer = require('inquirer');

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
            name: 'text-color',
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
            name: 'shape-color',
            message: 'Please enter a color keyword or hexadecimal for the shape.'
        }
    ])
}