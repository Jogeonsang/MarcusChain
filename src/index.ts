interface Person {
    name: string,
    gender: string,
    age: number,
};

const person = {
    name: 'marcus',
    gender: 'male',
    age: 23
};

const sayHi = (person:Person):void => {
    const {name, age, gender} = person;
    console.log(`Hello ${name}, You are ${age}, you are a ${gender}`);
};

sayHi(person);

export {}
