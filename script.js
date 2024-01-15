let menuVisible = false;

// Funcion que oculta o muestra menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// Oculto el menu una vez que selecciono una opcion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}