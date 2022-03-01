import {footer} from "../Shared/footer.js";
import {header} from "../Shared/header.js"
import "../Styles/General.css" assert { type: "css"}
import imgCampo from "../Media/sabana.png"



var content = document.getElementById("content");

//const imgCampo =  require("../Media/sabana.png");
const imgLeon2 = require("../Media/leon2.png");
const imgLeones = require("../Media/lions.png");
const imgLeon = require("../Media/leon.png");
const eggHacthing = require("../Media/hatch.png");
const imgPiedra = require("../Media/cave.png");
const imgTronco = require("../Media/log.png");

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

var pagesText = [[
    "La Sabana Africana",
    `Poco a poco la sabána africana se ha vuelto más caliente y las presas 
    disminuyen a gran velocidad pues la falla de alimento los está matanfo 
    a todos. Los pocos restantes están desesperados en halla agua y algo de 
    de comer. <br> <br>
    La manada de leónes tiene conflictos internos por las raciones que se reparten. <br><br>
    Naces con un fuerte instinto de caza y, aunque eres pequeño, aprendes de las 
    técnicas de las leonas de la manada y te inspiras para salir en busca de algún 
    pequeño.`
],
[
    "Campo",
    `Entre el pasto seco ves algo que parece un gusano gigante. No sabes 
    que es, pero como tienes mucha hambre y curiosidad, vas detrás de el. 
    Se aleja rápidamente mientras caminas. Es algo veloz pero poco a poco 
    puedes ver qué tan grande es. Al pasar unos minutos ya estas lejos de 
    la manada pero ellos no se dan cuenta de tu ausencia. De pronto, el gusano 
    entra en unas rocas con muchos huecos e intentas rascar la piedra para que 
    salga.`
],
[
    "Leones Descansando",
    `legas junto a todos los demás, te acuestas y el sueño te gana. 
    Mientras duermes, escuchas un chillido extraño en el campo al 
    lado de donde tu manada descanza. Tu padre se acerca a ver qué 
    está pasando. Al parecer las hienas atraparon a un monito bebé 
    y su familia detrás de ellos pero no pueden hacer nada porque hay
    muchas hienas.`
],
[
    "¡AYUDA!",
    `El león padre aparece de pronto y se lanza sobre las hienas rasgándolas a todas con sus grandes garras salvando al pobre mono. <br><br>
    En ese momento llegan todos los monos a toda velocidad asustados por lo que había pasado, agradecidos con el león por haber salvado al 
    pequeño mono prometieron apoyar a los leones en todo lo que necesitaran.`
],[
    "¿Qué está pasando?",
    `Una enorme serpiente aparece de entre los huecos y te rodea. Comienza a 
    apretarte tan fuerte que terminas desmayado. Sientes que la serpiente 
    te lleva a algún lado pero no sabes donde es. Parece un lugar un poco 
    estrecho y oscuro. No tienes fuerzas para llamar a la manada.`
],
[
    "Tronco Podrido",
    `Un mono baja de un árbol hacia un tronco, ve que se está moviendo y le llama la atención a lo lejos se escuchan pequeños chillidos y ve 
    que hay un gran hueco en uno de los costados. Parece que hay un animal dentro que está atorado. Con todas las fuerzas se rompe el tronco 
    y se observa que hay un pequeño león siendo estrangulado por una serpiente grande y robusta. <br>
    <br>
    De emergencia el mono llama al líder de la manada para que salve al leoncito. El líder toma a la serpiente y la lanza lejos salvando al 
    pequeño león. <br>
    <br>
    Llega un grupo de leónes a toda velocidad y observan que los monos encontraron al leoncito perdido. Agradecidos se lo llevan y prometen 
    protegerlos por siempre.`
],
]

window.onload = function () {
    document.body.insertAdjacentElement("afterbegin",header());
    document.body.insertAdjacentElement("beforeend",footer());
    
    content.innerHTML = genericHTML(eggHacthing,pagesText[0][0],pagesText[0][1],imgCampo,"Campo",imgLeones,"Leones");
    runpage0();
}

const runpage0 = () => {
    const Campo = document.getElementById("Campo");
    Campo.addEventListener("click", function() {
        content.innerHTML = genericHTML(imgLeon,pagesText[1][0],pagesText[1][1],imgPiedra, "Piedra", imgLeones, "Leones");
        window.scrollTo(0,0);
        runpage10();
    });
    const Leones = document.getElementById("Leones");
    Leones.addEventListener("click", function() {
        content.innerHTML = genericHTML(imgLeon,pagesText[2][0],pagesText[2][1], imgLeon2,"Leon",imgCampo,"Campo");
        window.scrollTo(0,0);
        runpage11();
    });
}

const runpage10 = () => {
    const Piedra = document.getElementById("Piedra");
    Piedra.addEventListener("click", function() {
        content.innerHTML = genericHTML(imgLeon,pagesText[4][0],pagesText[4][1],imgTronco,"Log");
        window.scrollTo(0,0);
        runpage2();
    });
    const Leones = document.getElementById("Leones");
    Leones.addEventListener("click", function() {
        content.innerHTML = genericHTML(imgLeon,pagesText[2][0],pagesText[2][1], imgLeon2,"Leon",imgCampo,"Campo");
        window.scrollTo(0,0);
        runpage11();
    });
}

const runpage11 = () => {
    const Campo = document.getElementById("Campo");
    Campo.addEventListener("click", function() {
        content.innerHTML = genericHTML(imgLeon,pagesText[1][0],pagesText[1][1],imgPiedra, "Piedra", imgLeones, "Leones");
        window.scrollTo(0,0);
        runpage10();
    });
    const Leon = document.getElementById("Leon");
    Leon.addEventListener("click", function() {
        content.innerHTML = genericHTML(imgLeon,pagesText[3][0],pagesText[3][1]);
        window.scrollTo(0,0);
    });
}

const runpage2 = () => {
    const Log = document.getElementById("Log");
    Log.addEventListener("click", function() {
        content.innerHTML = genericHTML(imgLeon,pagesText[5][0],pagesText[5][1]);
        window.scrollTo(0,0);
    });
}

