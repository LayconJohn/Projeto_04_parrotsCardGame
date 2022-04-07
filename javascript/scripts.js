let numeroCartas;
let gifsCard = [
   `<img src="midias/bobrossparrot.gif" class="verso oculto"></img>`,
   `<img src="midias/explodyparrot.gif" class="verso oculto">`,
   `<img src="midias/fiestaparrot.gif" class="verso oculto">`,
   `<img src="midias/metalparrot.gif" class="verso oculto">`,
   `<img src="midias/revertitparrot.gif" class="verso oculto">`,
   `<img src="midias/tripletsparrot.gif" class="verso oculto">`,
   `<img src="midias/unicornparrot.gif" class="verso oculto">`
]

function inserirCartas() {
    // receber o número de cartas
     numeroCartas = prompt("Quantas cartas você quer jogar? (Selecione um número par entre 4 e 14)")
     // validar cartas
     while (validarCartas(numeroCartas) === false || (numeroCartas > 14 || numeroCartas < 4)) {
        numeroCartas = prompt("Por favor, selecione apenas valores pares entre 4 e 14:")
     }
     let contador = 0;
     //let index = 0;
     let espacoCard = document.querySelector('.cards')
     //espacoCard.innerHTML += `<div class="card"><img src="midias/front.png" alt=""></div>`
     while (contador < numeroCartas) {
        espacoCard.innerHTML += `<div class="card" onclick="clicarCarta (this)"><img src="midias/front.png" class="frente"><img src="midias/bobrossparrot.gif" class="verso oculto"></div>`
        contador ++
     }
     //if (index < gifsCard.length) {
      //index ++
   //} else {
      //index = 1
  // }
}

function validarCartas(numeroCartas) {
    const ePar = (numeroCartas%2 == 0)
    return ePar   
}

function clicarCarta (elemento) {
   let cardFrente = elemento.querySelector(".frente")
   let cardVerso = elemento.querySelector(".verso")
   cardFrente.classList.add("oculto")
   cardVerso.classList.remove("oculto")
}

inserirCartas()