import "../Styles/Footer.scss" assert { type: "css"}

export const footer = () => {
    const footerContent = document.createElement("footer");

    footerContent.innerHTML = `
        @Copyright Juan Carlos Baján Castro 20109 - All Right Reserved.  
    `

    return footerContent;
}


