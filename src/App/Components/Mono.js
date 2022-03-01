import {footer} from "../Shared/footer.js";
import {header} from "../Shared/header.js"
import "../Styles/General.css" assert { type: "css"}


var content = document.getElementById("content");
const imgCopaArbol = require("../Media/CopaArbol.png");
const imgBranch = require("../Media/branch.png");
const eggHacthing = require("../Media/hatch.png");
const gorila = require("../Media/gorila.png");
const treeHouse = require("../Media/tree-house.png");
const log = require("../Media/log.png");
const leon = require("../Media/leon2.png");

var genericHTML = (firstimg = null,title = "TITLE",text = "error",img1 = null,img1name = null,img2 = null,img2name = null) => {
    var html = `
    <div class="imgs">
        <img class="icon" src="${firstimg}">
    </div>
    <h1>${title}</h1>
    <h2>${text}</h2>
    `
    var imgs = `
        <h1>Selecciona a donde quieres ir</h1>
        <div class="imgs sl">
            <img id="${img1name}" class="icon sender" src="${img1}">
            <img id="${img2name}" class="icon sender" src="${img2}">
        </div>
    `
    const almost = `
        <h1>Continuar</h1>
        <div class="imgs sl">
            <img id="${img1name}" class="icon sender" src="${img1}">
        </div>
    `
    const end = '<h1 class="fin">Fin.</h1>'
    html = html +  ((img1 != null && img2 != null) ? imgs : ((img1 != null && img2 == null) ?  almost : end));
    return html;
}

var pagesText = [
    [
        "Has aparecido, ahora eres un mono",
        `Poco a poco la sabana africana se ha vuelto más caliente y los árboles luchan por sobrevivir. Tu familia es un grupo de monos nómadas que 
        buscan frutas en los pocos árobles que quedan. Eres un mono muy curioso y, a pesar de ser pequeño, te atrae todo. No has decidido que área 
        del árbol explorar primero.`
    ],
    [
        "Copa del Árbol",
        `Observas aves de rapiña en el cielo, están volando sobre los restosviejos de una cebra. A lo lejos hay hienas, ellas no suelen 
        acercarse al área donde están los monos porque la población de machos es alta y, en conjunto, son muy agresivos.`
    ],
    [
        "Ramas bajas",
        `Observas un tronco podrido tirado en el suelo. Es normal encontrar insectos ricos para los monos cuando se rompe la corteza. Es un poco 
        grande y tratar de romperlo podría ser difícil para ti. También obervas una línea de hormigas dirigiéndose al interior del árbol donde los 
        monos se resguardan. Parece que tienen un nido muy grande por dentro.`
    ],
    [
        "Nido Líder",
        `Entre todos hablan que las hienas se están acercando mucho al área donde donde se encuentran y la mitad de los monos machos no han 
        regresado de recolectar ramas para seguir construyendo más nidos. De pronto sientes por detrás que algo te muerde violentamente y te 
        lleva arrastrado a toda velocidad hacia el campo donde no podrás escapar. Las hienas te atraparon.`
    ],
    [
        "Tronco Podrido",
        `El mono baja del árbol hacia el tronco, ve que se está moviendo y te llama la atención a lo lejos se escuchan pequeños chillidos y ve 
        que hay un gran hueco en uno de los costados. Parece que hay un animal dentro que está atorado. Con todas las fuerzas se rompe el tronco 
        y se observa que hay un pequeño león siendo estrangulado por una serpiente grande y robusta. <br>
        <br>
        De emergencia el mono llama al líder de la manada para que salve al leoncito. El líder toma a la serpiente y la lanza lejos salvando al 
        pequeño león. <br>
        <br>
        Llega un grupo de leónes a toda velocidad y observan que los monos encontraron a el leoncito perdido. Agradecidos se lo llevan y prometen 
        protegerlos por siempre.`
    ],
    [
        "¡AYUDA!",
        `El león padre aparece de pronto y se lanza sobre las hienas rasgándolas a todas con sus grandes garras salvando al pobre mono. <br><br>
        En ese momento llegan todos los monos a toda velocidad asustados por lo que había pasado, agradecidos con el león por haber salvado al 
        pequeño mono prometieron apoyar a los leones en todo lo que necesitaran.`
    ]

]

window.onload = function () {
    document.body.insertAdjacentElement("afterbegin",header());
    document.body.insertAdjacentElement("beforeend",footer());
    
    content.innerHTML = genericHTML(eggHacthing,pagesText[0][0],pagesText[0][1],imgCopaArbol,"CopaArbol",imgBranch,"Branch");
    runpage0();
}

const runpage0 = () => {
    const CopaArbol = document.getElementById("CopaArbol");
    CopaArbol.addEventListener("click", function() {
        content.innerHTML = genericHTML(gorila,pagesText[1][0],pagesText[1][1],treeHouse,"treeHouse",imgBranch,"Branch");
        window.scrollTo(0,0);
        runpage10();
    });
    const Branch = document.getElementById("Branch");
    Branch.addEventListener("click", function() {
        content.innerHTML = genericHTML(gorila,pagesText[2][0],pagesText[2][1],imgCopaArbol,"CopaArbol",log,"Log");
        window.scrollTo(0,0);
        runpage11();
    });
}

const runpage10 = () => {
    const treeHouse = document.getElementById("treeHouse");
    treeHouse.addEventListener("click", function() {
        content.innerHTML = genericHTML(gorila,pagesText[3][0],pagesText[3][1],leon,"Leon");
        window.scrollTo(0,0);
        runpage20();
    });
    const Branch = document.getElementById("Branch");
    Branch.addEventListener("click", function() {
        content.innerHTML = genericHTML(gorila,pagesText[2][0],pagesText[2][1],imgCopaArbol,"CopaArbol",log,"Log");
        window.scrollTo(0,0);
        runpage11();
    });
}

const runpage11 = () => {
    const Log = document.getElementById("Log");
    Log.addEventListener("click", function() {
        content.innerHTML = genericHTML(gorila,pagesText[4][0],pagesText[4][1]);
        window.scrollTo(0,0);
    });
    const CopaArbol = document.getElementById("CopaArbol");
    CopaArbol.addEventListener("click", function() {
        content.innerHTML = genericHTML(gorila,pagesText[1][0],pagesText[1][1],treeHouse,"treeHouse",imgBranch,"Branch");
        window.scrollTo(0,0);
        runpage10();
    });
}

const runpage20 = () => {
    const Leon = document.getElementById("Leon");
    Leon.addEventListener("click", function() {
        content.innerHTML = genericHTML(gorila,pagesText[5][0],pagesText[5][1]);
        window.scrollTo(0,0);
    });
}