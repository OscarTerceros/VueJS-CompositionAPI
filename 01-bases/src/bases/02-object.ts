
export const person = {
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 10001,
    lat: 40.7128,
    lng: 74.0059,
  },
}; //as const -> Se utiliza as const cuando no se quiere modificar los valores de las variables

//En JavaScript los objetos se pasan por referencia es por eso que cuando se asigna un objeto a otro, los valores al ser modificados se modifican en ambos
const person2 = person;
person2.lastName = 'Lannister';

//Al utilizar el operador spread para copiar los valores, se rompe la referencia siempre y cuando no se tenga objetos anidados
const person3 = { ...person };
person3.lastName = 'Targaryen';

//Esto permite romper todo tipo de referencia sin importar que haya objetos anidados en el mismo
const person4 = structuredClone( person );
person4.address.city = 'Winterfell';

console.log( {person} );
console.log( {person2} );
console.log( {person3} );
console.log( {person4} );