// "use strict"
let rgbBtn = document.getElementById("rgb");
let hexBtn = document.getElementById("hex")
let code = document.getElementById("color_code");
// random rgb color generate
rgbBtn.addEventListener('click', () => {
    let random1 = parseInt(Math.random()*256)
    let random2 = parseInt(Math.random()*256)
    let random3 = parseInt(Math.random()*256)

    document.body.style.background = `rgb(${random1},${random2},${random3})`;
    code.innerHTML = `rgb(${random1},${random2},${random3})`;

    
})

//random hex color generate
hexBtn.addEventListener('click', () => {
    //16777215 = ffffff
    let random = parseInt(Math.random() * 16777215).toString(16);
    document.body.style.background = `#${random}`;
    code.innerHTML = `#${random}`;
})