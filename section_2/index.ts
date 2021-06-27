let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}
const fruits: string[] = ['Apple', 'Banana', 'Grape']

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
    SHORT, // 0
    TALL = 'TALL',
    GRANDE = 1,
    VENTI// 2
}
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true]
anything = {};
anything.aaaaa = 'aaaa';
let banana = 'banana';
banana = anything;

let unionType: number | string = 10;
unionType = 'hello';
unionType.toUpperCase();
let unionTypes: (number | string)[] = [10, 'hello'];

type ClothSize = 'small' | 'medium' | 'large'
const apple: 'apple' = 'apple';
const zero: 0 = 0;
let clothSize: ClothSize = 'large';
const cloth: {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: clothSize
}
cloth.size = 'small';

function add(num1: number, num2: number): number {
    return num1 + num2
}

function sayHello(): void | undefined {
    console.log('Hello!');
    return;
}
console.log(sayHello()); // undefined
// let tmp: undefined = null;
// let tmpNull: null = undefined;

const anotherAdd: (n1: number, n2: number) => number = add;
const doubleNumber: (number: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

function error(message: string): never {
    throw new Error(message);
    // while (true) {
    //
    // }
}
console.log(error('This is an error'));
