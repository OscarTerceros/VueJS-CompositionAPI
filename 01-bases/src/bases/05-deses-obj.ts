//Las interfaces definen como se van a ver los objetos
interface Person {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
  power?: string;
};

export const person: Person = {
	name: 'Maximilian',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author']
};

const { name, age, hobbies, power = 'No tiene poder' } = person;
console.log( {name, age, hobbies, power});

//Desestructuracion en los argumentos
interface CreateHeroArgs {
  name: string;
  age: number;
  hobbies: string[];
  power?: string;
};

const createHero = ( args: CreateHeroArgs ) => ({
  id: 123123,
  name: args.name,
  age: args.age,
  hobbies: args.hobbies,
  power: args.power ?? 'No tiene poder', //El operador ?? sirve para asignar un valor por defecto
});

console.log( createHero( person ) );