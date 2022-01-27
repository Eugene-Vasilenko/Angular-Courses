const age: number = 33;

// age = 6;

let johnName: string;
johnName = 'Tim';


interface Pet {
    name: string,
    readonly age: number
}

const myPet: Pet = { name: 'Tom', age: 5 };

// myPet.age = 7;

let anotherPet: Pet = { name: 'Jim' } as Pet;
let oneMorePet: Pet = <Pet>{ name: 'Jim' };





function loop(): never {
    while (true) {
        console.log('test');
    }
}

function raisException(): never {
    throw new Error()
}


function logAge(age: number | string) {
    console.log(age);
}

logAge(45);
logAge("old");
// logAge(true);



const arrayOfNumbers: number[] = [3, 4, 5, 6];

const arrayOfStrings: string[] = ['a', 'b'];

const cortage: [number, string] = [0, 'true'];

const anotherCortage: { key: number, value: string } = { key: 0, value: 'true' };

let oneMoreArray: Array<number>;

oneMoreArray = [8, 9, 0];