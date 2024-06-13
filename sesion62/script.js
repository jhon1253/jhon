const boton = document.getElementById("cambiar");

boton.addEventListener("mouseover", function(){
document.body.style.backgroundColor = "red";

})

boton.addEventListener("mouseout", function(){
    document.body.style.backgroundColor = "green";
    
})