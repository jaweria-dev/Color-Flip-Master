const btn = document.querySelector(".btn");
 const color_text = document.querySelector("#color-text")

 const hexaCode = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"]

 function getRandomNo(){
    return Math.floor(Math.random() * hexaCode.length)

 }

 btn.addEventListener('click', () => {
    let hexaColor = "#" ;

    for(let i=0; i<6; i++) {
        hexaColor += hexaCode[getRandomNo()]
    }
   
    document.body.style.backgroundColor = hexaColor;
    color_text.textContent = hexaColor ;
 })