import "../Styles/Header.scss" assert { type: "css"}


export const header = () => {
    const headerContent = document.createElement("header");
    
    const lnk = document.createElement("div");
    lnk.id = "lnk";
    lnk.className = "link";
    lnk.innerHTML = "Inicio"

    headerContent.appendChild(lnk);
    
    lnk.addEventListener("click", function(){

        if (window.location.pathname == "./Inicio.html") {
            window.scrollTo(0,700)
        } else {
            window.location.replace("./Inicio.html");
        }
        
    });


    return headerContent;
}
