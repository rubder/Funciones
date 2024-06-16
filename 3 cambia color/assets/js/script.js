// // version original
// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

// // version 2.2
// function pintar(elemento) {
//     elemento.style.backgroundColor = 'yellow';
// }

// const ele = document.getElementById("ele1");
// ele.addEventListener("click", function() {
//     pintar(ele);
// });



function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});
