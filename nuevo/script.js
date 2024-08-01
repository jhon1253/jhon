let caracEspeci = 'wesdrctfvgybhunijm';
let cadena = caracEspeci.split('');
let array = [];
function GeneradorContraseñas(caracteres){
    return function(longitud){
        for (let i = 0; i <= longitud; i++ ){
            let numAleatorio = (Math.random() * (caracteres.length)).toFixed(0);
            array.push(caracteres[numAleatorio]) ;
           
        }
        return array.join('');
    }
}
let contraseñaTotal = GeneradorContraseñas(cadena);
console.log("La contraseña es: " + contraseñaTotal(12));