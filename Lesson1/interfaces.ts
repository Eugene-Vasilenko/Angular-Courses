interface Pet {
    age: number;
    color?: string;
    name: string;
}

const myPet: Pet = {
    age: 3,
    name: 'Tom'
}

interface Cat extends Pet {
    hasLongTail: boolean;
}

const myCatL: Cat = {
    age: 5,
    name: 'Tom',
    hasLongTail: true,
    color: 'white'
}