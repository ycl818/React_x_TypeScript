let userName = 'kevin';
const API_KEY = 'abc';

userName = 'kevin2';

let userAge = 30;

let isValid = true;

// string, number, boolean


type StringOrNum = string | number;

// union types
let userID: StringOrNum = 'abc1';
userID = 123;



// object types
type User = { 
  name: string,
  age: number, 
  isAdmin: boolean, 
  id: string | number
};

// user = 'kevin';
let user: User;

user = {
  name: 'kevin',
  age: 30,
  isAdmin: true,
  id: 'abc' // 123
}


// array types

let hobbies: Array<string>; 
// hobbies : string[]; number[]; boolean[]
// {name:string, age:number}[]

hobbies = ['Sports', 'Cooking', 'Reading'];



// adding types to functions- parameters and return value types
function add (a: number, b: number): void {
  const result = a + b;
  console.log(result);
}


// type aliases
// custom types
type CalculationFn = (a: number, b: number) => void;

function calculate(a: number, b:number, calcFn: CalculationFn) {
  calcFn(a, b);
}

calculate(10, 20, add);

// decoration merging
interface Credentials {
  password: string;
  email: string;
}

// easy to redefine the interface
interface Credentials {
  method: string;
}

let creds: Credentials;

creds = {
  password: 'abc',
  email:'abc@gmail.com',
  method: 'email'
}

// class has to implement all the properties of the interface
class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
  method: string; 
}

function login(creds: Credentials) {

}

// has the least of the properties in the interface
login(new AuthCredentials())
login(creds)

// login("1223")


// advantage of interfaces
// 1. we can extend interfaces
// 2. we can implement interfaces in classes



// type Admin = {
//   pemissions: string[];
// };

// type AppUser = {
//   userName: string;
// }

// // merge type
// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   userName: 'kevin',
//   pemissions: ['create', 'delete']
// }

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  userName: 'kevin',
  permissions: ['create', 'delete']
}

// -----------------------------


// Literal types
type Role = 'admin' | 'user' | 'editor';

let role: Role; // 'admin' | 'user' | 'editor'

role=  'admin';
role = 'user';
role = 'editor';

// adding Type Guards
function performAction (action: string | number, role: Role) {
  if (role === 'admin' && typeof action === 'string') {
    // ...
  }
}


// Generics types

let roles: Array<Role>;
// let roles: Role[];
roles = ['admin','editor'];

type DataStorage<T> = {
  storage: T[],
  add: (data: T) => void;
  delete: (data: T) => T;
}

const textStorage: DataStorage<string> = {
  storage: ['abc'],
  add(data) {
    this.storage.push(data);
  },
  delete(data) { return data }
}

const userStorage: DataStorage<User> = {
  storage: [{name: 'kevin', age: 30, isAdmin: true, id: 'abc'}],
  add(data) {
    this.storage.push(data);
  },
  delete(data) { return data }
}

function merge<T, U>(a:T, b: U) {
  return {
    ...a,
    ...b
  };
}

// typescript can infer the types
const newUser = merge(
  {name: 'kevin'}, {age: 30}
);

// const newUser = merge<{name: string}, {age: number}>(
//   {name: 'kevin'}, {age: 30}
// );

newUser.name = "gogo";
newUser.age = 35;

console.log(newUser);