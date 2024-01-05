/* example 01
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        console.log(`Meu nome é ${name} ${lastname}.`);
    };

    module.exports.name = name;
    module.exports.lastname = lastname;
    module.exports.speakName = speakName;

    console.log(module.exports);
*/

/* example 02
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        console.log(`Meu nome é ${name} ${lastname}.`);
    };

    exports.name = name;
    exports.lastname = lastname;
    exports.speakName = speakName;

    console.log(module.exports);
*/

/* example 03
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        console.log(`Meu nome é ${name} ${lastname}.`);
    };

    exports.name = name;
    exports.lastname = lastname;
    exports.speakName = speakName;

    this.anything = 'Teste';

    console.log(module.exports);
*/

/* example 04
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        console.log(`Meu nome é ${name} ${lastname}.`);
    };

    exports.NAME = name;
    exports.LASTNAME = lastname;
    exports.SPEAKNAME = speakName;

    this.anything = 'Teste';

    console.log(exports);
*/

/* example 05
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        return `Meu nome é ${name} ${lastname}.`;
    };

    exports.name = name;
    exports.lastname = lastname;
    exports.speakName = speakName;

    this.anything = 'Teste';
*/

/* example 06
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        return `Meu nome é ${name} ${lastname}.`;
    };

    exports.name = name;
    exports.lastname = lastname;
    exports.speakName = speakName;

    this.anything = 'Teste';
*/

/* example 07
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        return `Meu nome é ${name} ${lastname}.`;
    };

    exports.name = name;
    exports.lastname = lastname;
    exports.speakName = speakName;

    this.anything = 'Teste';
*/

/* example 08
    const name = 'Leonardo';
    const lastname = 'Santos';

    const speakName = () => {
        return `Meu nome é ${name} ${lastname}.`;
    };

    exports.name = name;
    exports.lastname = lastname;
    exports.speakName = speakName;

    this.anything = 'Teste';
*/

/* example 09
    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    exports.Person = Person;
*/

/* example 10*/
class Person {
    constructor(name) {
        this.name = name;
    }
}

exports.Person = Person;