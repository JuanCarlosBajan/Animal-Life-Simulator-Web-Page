import {footer} from "../Shared/footer.js";
import {header} from "../Shared/header.js"
import "../Styles/Inicio.css" assert { type: "css"}


window.onload = function () {
    document.body.insertAdjacentElement("afterbegin",header());
    document.body.insertAdjacentElement("afterend",footer());
    document.getElementById("personajes"). innerHTML = 
    `<img id="mono" class="sender" src="${require('../Media/gorila.png')}">
    <img id="leon" class="sender" src="${require('../Media/leon.png')}">`
    runpage();
}

const runpage = () => {
    const mono = document.getElementById("mono")
    mono.addEventListener("click", function() {
        //window.location.replace("./src/App/Components/Mono.html");
        window.location.replace("./Mono.html");
    });

    const leon = document.getElementById("leon")
    leon.addEventListener("click", function() {
        //window.location.replace("./src/App/Components/Leon.html");
        window.location.replace("./Leon.html");
    });
}
