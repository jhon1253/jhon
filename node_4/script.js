
 // delay retraso
function delay(ms){
    return new Promise((resolve) => setTimeout(resolve,ms)); //retorna un apromesa

}
 // declaramos la funcion asincrona para usar el  await

 // funcion asinc nos sirve para que nos permita para usar el aeait dentro
 async function asyncFunction(){
    console.log("Esperando 5 segundos...")
    await delay(5000)
    console.log("Han pasado 5 segundos");

 }

 // await nor sirve para traer datos


 //asyncFunction();

 // traer datos con una funci asincro

 // retorna un objeto

 // esta fun simula una api y devuelve los datos despues de 1 segundo

 function fetchData(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve({data: "hellow, world!"});
        }, 1000)
    });
 }

// func asyn que usa await para obtener datos

async function getData(){
    console.log('Obteniendo datos...');
    const result = await fetchData();  //espera a que los datos sean obtenidos 
    console.log('Datos obtenidos', result);

}

getData();