// Menu Lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function MostrarOcultarMenu(){
    if(menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    }

    else{
        menu.style.display = "none"
        menu_visible = false;
    }
}

// Ocultar el menu una vez que se selecciono la opción.

let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Animaciones Barras de % identificadas por si id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);

    }
}

// Seleccionar todas las barras generales para luego manipularlas

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

let php = document.getElementById("php");
crearBarra(php);

let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

// Se eliminaron los elementos "e" del index.html 1hs 03'

// Marco el porcentaje en las barras (Pintamos la barra segun el %).

// Inicia en -1 por que no tiene ninguna celda pintada.

let contadores = [-1,-1,-1,-1,-1,-1]




