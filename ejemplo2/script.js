let usuarios = [{
    id: 1,
    nombre: 'Larry',
},
{
    id: 2,
    nombre: 'Esteban',
},
{
    id: 3,
    nombre: 'Goku',
}];

let telefonos = [
    {
        id: 1,
        telefono: 12345,
    },
    {
        id: 2,
        telefono: 54321,
    },
    {
        id: 4,
        telefono: 00000,
    }
];

let obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if (usuarios.find(usuario => usuario.id === id)) {
            console.log('Se encontro el usuario ', id);
            resolve(obtenerTelefono(id))
        } else {
            console.log('No se encontro el usuario');
            reject(obtenerTelefono(id))
        }
    })
}


let obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if (telefonos.find(telefono => telefono.id === id)) {
            resolve('Se encontro el telefono');
        } else {
            reject('No se encontro el telefono');
        }
    })
}
function operacionAsincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5;
            if (exito) {
                resolve('Operación completada exitosamente.');
            } else {
                reject('La operación falló.');
            }
        }, 1000);
    });
}


obtenerUsuario(2)
    .then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    });



