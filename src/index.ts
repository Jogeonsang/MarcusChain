const name:string = "marcus",
    age:number = 23,
    gender:string = 'male';
const sayHi = (name: string, age: number, gender: string):void => {
    console.log(`Hello ${name}, You are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);

export {}
