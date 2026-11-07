// const paragrafo = document.getElementById("paragrafo1")
// const paragrafo2 = document.getElementById("paragrafo2")
// const paragrafo3 = document.getElementById("paragrafo3")
// const paragrafo4 = document.getElementById("paragrafo4")

// console.log(paragrafo) 
// console.log(paragrafo2) 
// console.log(paragrafo3) 
// console.log(paragrafo4) 

// const title = document.getElementById ("title")

// title.innerText = "Troquei"
// title.style.fontFamily = "arial"

// const tparagrafo = document.getElementById ("tparagrafo")

// tparagrafo.innerText = "Virou 2"
// tparagrafo.style.color = "red"
// tparagrafo.style.fontSize = "90px"
// tparagrafo. style.backgroundColor = "black"
// tparagrafo.style.fontFamily = "arial"

// const exercicio1 = document.getElementById("exercicio1")

// exercicio1.style.fontFamily = "arial"
// exercicio1.style.backgroundColor = "green"
// exercicio1.styl.color ="red"

// const title = document.getElementById ("title")
// const img1 = document.getElementById("img1")

// title.style.color ="red"
// title.style.backgroundColor ="black"
// title.classList.toggle("animado")


// const paragrafo = document.getElementById ("paragrafo")

// const btn = document.getElementById ("btn")

// btn.innerText = "Teste seus conhecimentos"

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "Maquina sendo hakeada"
//     paragrafo.style.color = "Green"
//     img1.src = "https://i.gifer.com/origin/c8/c826763531d018224bda0fbbde65b83e_w200.gif"

// document.addEventListener("keydown", function(e){
//     alert("Você apertou a tecla" + e.key)
// })

const body = document.getElementById ("body")
const btn = document.getElementById ("btn")

document.addEventListener("keydown", function(e) {

    if (e.key === "r") {
        document.body.style.backgroundColor = "red";
    }
    else  if (e.key === "g") {
        document.body.style.backgroundColor = "green";
    }
    else  if (e.key === "b") {
        document.body.style.backgroundColor = "blue";
    }
btn
    
});

