//var -> No se debe utilizar debido a que scope es global
//let -> Se utiliza para variables locales
//const -> Se utiliza para variables constantes

const firstName = 'Tony';
const lastName = 'Stark';

if( true) {
    const firstName = 'Peter';
    let lastName = 'Parker';
    // No se imprime en consola ninguna de las variables debido a que su scope es local y no acta a los valores fuera de ella
}
export const fullName = `${firstName} ${lastName}`;
console.log( fullName );