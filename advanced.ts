type Engineer = {
    name: string;
    role: string;
}
type Blogger = {
    name: string;
    follower: number;
}
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger { }

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

type tmp = string & number; // never

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
const upperHello = toUpperCase('hello');

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: 'dog' = 'dog'
    speak() {
        console.log('bow-bow');
    }
}
class Bird {
    kind: 'bird' = 'bird'
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}

havePet(new Bird());

// const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';
(<HTMLInputElement>document.getElementById('input')).value = 'initial input value';

interface Designer {
    name: string;
    [index: string]: string;
}
const designer: Designer = {
    name: 'Quill',
    role: 'web',
    1: 'web'
}
console.log(designer.hoge);
