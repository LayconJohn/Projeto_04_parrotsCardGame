let numeroCartas;
let gifsCard = [
   `<img src="midias/bobrossparrot.gif" class="verso bobross oculto">`,
   `<img src="midias/explodyparrot.gif" class="verso explody oculto">`,
   `<img src="midias/fiestaparrot.gif" class="verso fiesta oculto">`,
   `<img src="midias/metalparrot.gif" class="verso metal oculto">`,
   `<img src="midias/revertitparrot.gif" class="verso revertit oculto">`,
   `<img src="midias/tripletsparrot.gif" class="verso triplets oculto">`,
   `<img src="midias/unicornparrot.gif" class="verso unicorn oculto">`
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
        espacoCard.innerHTML += `
        <div class="card" onclick="clicarCarta(this)">
         <div class="frente">
               <img src="midias/front.png" class="">
            </div>
         <div class="verso">
               <img src="midias/bobrossparrot.gif" class="oculto">
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

function verificarPeimeiraCarta () {
   // Verificar e retornar se é a primeira carta virada da classe (true ou false)
}

function verificarPares() {
   //Verificar e retornar se os pares são iguais (true ou false) -> Talvez usar o switch case
}

function contadorJogadas() {
   // A cada jogada, contabilizar o número de cartas viradas
}

function virarCarta() {
   //Virar a carta
}

function fimJogo() {
   // Dar um alert sobre o total de jogadas
   //incluir espaço para bônus
}
if (verificarPeimeiraCarta) {
   // Criar a função, ela deve permanecer virada até verificar a segunda      
   contadorJogadas()
} else {
   //Caso seja a segunda carta
   contadorJogadas()
   if (verificarPares) {
      //Se as duas são pares, elas devem ficar viradas
   } else {
      // Se não são iguais, as duas cartas devem virar
      virarCarta()
   }
}

inserirCartas()