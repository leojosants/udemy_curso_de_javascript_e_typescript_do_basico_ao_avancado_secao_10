
/* example 05 
    // imports
    const mod1 = require('./mode1'); // relative path
 
    console.log(mod1.speakname());
*/

/* example 06
    // imports
    const speakName = require('./mode1').speakName; // relative path

    console.log(speakName());
*/

/* example 07
    // imports
    const mod1 = require('./mode1'); // relative path
   
    const speakName = mod1.speakName;
    console.log(speakName());
*/

/* example 08
    // imports
    const { name, lastname, speakName } = require('./mode1'); // relative path
    
    console.log(`Nome ...........: ${ name }`);
    console.log(`Sobrenome ......: ${lastname}`);
    console.log(`Nome completo ..: ${speakName()}`);
*/

/* example 09
// imports
    const { Person } = require('./mode1'); // relative path
    
    const person = new Person('Leonardo');
    console.log(person);
*/

/* example 10 */
// imports
const path = require('path');
const axios = require('axios');
const { Person } = require('./mode1'); // relative path

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json') // broken endpoint
axios('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.warn('Fim do programa')
    });