const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

const people = [
    { name: 'Ana' },
    { name: 'Joao' },
    { name: 'Jose' },
    { name: 'Juca' },
];

const json = JSON.stringify(people, '', 2); // convert to json (string)
// console.log(typeof json);

write(filePath, json, 'w'); // a (add) - w (overwrite)

async function readFile(pathFileRead) {
    const data = await read(pathFileRead);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data); // convert to object
    // console.log(typeof data);
    data.forEach(value => console.log(value));
    data.forEach(value => console.log(value.name));
}

readFile(filePath);