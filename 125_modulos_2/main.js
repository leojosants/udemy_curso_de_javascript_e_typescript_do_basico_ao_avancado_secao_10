/* example 01
    const multiplication = require('./mode1');
    const dividend = 2;
    const divider = 2;
    const result = multiplication(dividend, divider);
    console.log(`${dividend} * ${divider} = ${result}`);
*/

/* example 02
    const number = require('./mode1');
    const n = number;
    console.log(n);
*/

/* example 03
    const Dog = require('./mode1');
    const dog = new Dog('Dick');
    dog.bark();
*/

/* example 04 
    const Dog = require('./b/c/d/mode1');
    const dog = new Dog('Dick');
    dog.bark();
*/

/* example 05
    const Dog = require('./z/mod2');
    const dog = new Dog('Dick');
    console.log(dog)
    dog.bark();
*/

/* example 06 
    // console.log(__filename); // current file    - absolute path
    // console.log(__dirname); // current folder   - absolute path

    const path = require('path');
    console.log(path.resolve(__dirname));
    console.log(path.resolve(__dirname, '..',));
    console.log(path.resolve(__dirname, '..', '..'));
    console.log(path.resolve(__dirname, '..', '..', '..'));
*/

/* example 07 */
const Dog = require('./z/mod2.js');
const dog = new Dog('Viking');
dog.bark();