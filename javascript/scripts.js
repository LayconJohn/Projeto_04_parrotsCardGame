let numeroCartas;
let cartasPraJogo = []; //Adicionar aqui todas as cartas do jogo
let gifsCard = [
   //colocar aqui os pares de cartas
   `<img src="midias/bobrossparrot.gif" class="verso bobross oculto">`,
   `<img src="midias/explodyparrot.gif" class="verso explody oculto">`,
   `<img src="midias/fiestaparrot.gif" class="verso fiesta oculto">`,
   `<img src="midias/metalparrot.gif" class="verso metal oculto">`,
   `<img src="midias/revertitparrot.gif" class="verso revertit oculto">`,
   `<img src="midias/tripletsparrot.gif" class="verso triplets oculto">`,
   `<img src="midias/unicornparrot.gif" class="verso unicorn oculto">`
]

function criarParAleatorio() {
   let indice = Math.floor((Math.random() * gifsCard.length) + 1) //valor aleatorio de 0 ao tamanho de gif card  
   for (let i = 1; i <= 2; i++) {
      cartasPraJogo.push(gifsCard[indice])
   }
}

function inserirPar() {
   for (let index = 0; index < numeroCartas/2; index ++) {
      criarParAleatorio()
   }
   return cartasPraJogo
}

function inserirCartas() {
    // receber o número de cartas
     numeroCartas = prompt("Quantas cartas você quer jogar? (Selecione um número par entre 4 e 14)")
     // validar cartas
     while (validarParCartas(numeroCartas) === false || (numeroCartas > 14 || numeroCartas < 4)) {
        numeroCartas = prompt("Por favor, selecione apenas valores pares entre 4 e 14:")
     }
     let contador = 0;
     let espacoCard = document.querySelector('.cards')
     //espacoCard.innerHTML += `<div class="card"><img src="midias/front.png" alt=""></div>`
     while (contador < numeroCartas) {
        espacoCard.innerHTML += `
        <div class="card" onclick="clicarCarta(this)">
         <div class="frente">
               <img src="midias/front.png" class="">
            </div>
         <div class="verso">
               ${cartasPraJogo[contador]}
         </div> 
       </div>
       `
        contador ++
     }   
     //if (index < gifsCard.length) {
      //index ++
   //} else {
      //index = 1
  // }
}

function validarParCartas(numeroCartas) {
    const ePar = (numeroCartas%2 == 0)
    return ePar   
}

function clicarCarta (elemento) {
   let cardFrente = elemento.querySelector(".frente img")
   let cardVerso = elemento.querySelector(".verso img")
   cardFrente.classList.add("oculto")
   cardVerso.classList.remove("oculto")
}  

inserirCartas()
