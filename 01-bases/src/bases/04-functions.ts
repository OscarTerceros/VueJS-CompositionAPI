//Función declarada
function greetPerson( name:string ) {
  return `Hola, ${ name }`;
}
console.log( greetPerson( 'Juan' ) );

//función de flecha
const greetPersonArrow = ( name:string ) => `Hola, ${ name }`;
console.log( greetPersonArrow( 'Pedro' ) );

//cuando despues de la función de flecha viene un paréntesis quiere decir que tiene un retorno implicito
const greetPersonArrowImplicit = () => ({
  uid: 'ABC-123',
  userName: 'Tony001',
});
console.log( greetPersonArrowImplicit() );

//Comprobación null check -> El sígno de ? pregunta si el valor no es nulo, si existe un valor procesa la operación, si no existe valor te devuelve undefined
const heroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
    power: 'Super Strength',
  },
];

const hero = heroes.find( ( hero ) => hero.id === 2 );
console.log( hero?.power?.toUpperCase() )