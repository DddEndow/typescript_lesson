function Logging(message: string) {
    console.log('LoggingFactory');
    return function (constructor: Function) {
        console.log(message)
        console.log(constructor);
    }
}

function Component(template: string, selector: string) {
    console.log('ComponentFactory');
    return function <T extends { new(...args: any[]): { name: string }}> (constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                console.log('Component');
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1')!.textContent = instance.name;
                }
            }
        }
    }
}

function PropertyLogging(target: any, propertyKey: string) {
    console.log('propertyLogging');
    console.log(target);
    console.log(propertyKey);
}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('MethodLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('AccessorLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

@Logging('Logging User')
@Component('<h1>{{ name }}</h1>', '#app') // 下から実行される
class User {
    @PropertyLogging
    name = 'Quill';
    constructor(private _age: number) {
        console.log('User was created!');
    }
    @AccessorLogging
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    @MethodLogging
    greeting() {
        console.log('Hello!');
    }
}
const user1 = new User(32);
const user2 = new User(32);
const user3 = new User(32);
