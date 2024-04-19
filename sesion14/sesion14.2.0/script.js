var fondo = localStorage.getItem("fondo");


if (fondo === null) {
    fondo = "#FFFFFF";

} 
document.getElementById("body").style.backgroundColor = fondo;


function Azul(){
    fondo = "#0000FF";
    document.getElementById("body").style.backgroundColor = fondo;
   

    localStorage.setItem('fondo', fondo);
}

function Rojo(){
    fondo = "#FF0000";
    document.getElementById("body").style.backgroundColor = fondo;
  

    localStorage.setItem('fondo', fondo);
}
function Verde(){
    fondo = "#00ff00";
    document.getElementById("body").style.backgroundColor = fondo;
  

    localStorage.setItem('fondo', fondo);
}