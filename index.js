// const { log } = require('console');
import inquirer from 'inquirer';
import Manager from './lib/manager';
import Engineer from './lib/engineer';
import Intern from './lib/intern';
const generatePage = require("./src/generatePage");

const employeeArr = [];

const questions = [
    {
        type: 'input',
        name: 'role',
        message: 'Please input employee name',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Name of employee?',
        validate: nameInput => {
            if (nameInput)
            {
                return true;
            } else {
                console.log('Please enter valid employee');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is id?',
        validate: idInput => {
            if (idInput)
            {
                return true;
            } else {
                console.log('Please enter employee id');
                return false;
            }
    }
},
{
        type: 'input',
        name: 'email',
        message: 'What is email?',
        validate: emailInput => {
            if (emailInput)
            {
                return true;
            } else {
                console.log('Please enter employee email');
                return false;
            }
        }
    },
];

const promptEmployee = () => {
    console.log (`add a new employee`);
        return inquirer.prompt(questions).then(employeeData => {
            let{role, name, id, email, github, school} = employeeData;
            let employee;
            if (role === 'Manager'){
                employee = new Manager(name, id, email, officeNumber);
            }
        })
};

promptEmployee().then(employeeArr => {
    return generatePage(employeeArr);
}).then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});
