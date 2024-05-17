// as const elimina los métodos de mutación de los arreglos
export const numberArray = [1, 2, 3, 4, 5]; //as const
numberArray.push( 6 );

// Los arreglos de igual manera que los objetos se copian por referencia, si modificamos los valores de uno se modifican en la copia
const numberArray2 = numberArray;
numberArray2.push( 7 );

//Al utilizar el operador spread (...) se crea una copia de los valores del arreglo y se rompe la referencia
const numberArray3 = [ ...numberArray ];
numberArray3.push( 8 );

console.log( {numberArray, numberArray2, numberArray3} );