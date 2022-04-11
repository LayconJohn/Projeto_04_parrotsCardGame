let numeroCartas;
let cartasPraJogo = []; //Adicionar aqui todas as cartas do jogo
let gifsCard = [
   'midias/bobrossparrot.gif',
   'midias/explodyparrot.gif',
   //'midias/fiestaparrot.gif"',
   'midias/metalparrot.gif',
   'midias/revertitparrot.gif',
   'midias/tripletsparrot.gif',
   'midias/unicornparrot.gif'
]
let cartasSelecionadas = document.querySelectorAll(".selecionado").length;
const cartas = document.querySelectorAll("card");
let primeiraCarta;
let segundaCarta;
let bloquearCartas = false;
let contadorJogadas = 0;

function criarParAleatorio() {
   let indice = Math.floor((Math.random() * 7) + 1) //valor aleatorio de 0 ao tamanho de gif card  
   cartasPraJogo.push(gifsCard[indice])
   cartasPraJogo.push(gifsCard[indice])
}

function inserirPar() {
   for (let index = 0; index < numeroCartas/2; index ++) {
      criarParAleatorio()
   }
   cartasPraJogo.sort(embaralhador)
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
     // Criar os gifs
     inserirPar()
     //Inserir as cartas
     while (contador < numeroCartas) {
        espacoCard.innerHTML += `
        <div class="card" onclick="clicarCarta(this)" data-card="${cartasPraJogo[contador]}">
            <div class="frente">
                  <img src="midias/front.png" class="">
            </div>
            <div class="verso">
                  <img src=${cartasPraJogo[contador]} class="verso oculto"/>
            </div> 
       </div>
       `
        contador ++
     }   
}

function validarParCartas(numeroCartas) {
    const ePar = (numeroCartas%2 == 0)
    return ePar   
}

function clicarCarta (elemento) {
   if (bloquearCartas) return false
   contadorJogadas ++
   let divCard = elemento.querySelector(".verso").parentNode
   let cardFrente = elemento.querySelector(".frente img")
   let cardVerso = elemento.querySelector(".verso img")
   cardFrente.classList.add("oculto")
   cardVerso.classList.remove("oculto")
   divCard.classList.add("selecionado")
   if (!primeiraCarta) {
      primeiraCarta = elemento;
      return 
   } else {
      segundaCarta = elemento;   
   }
   comparadorCartas()
} 

function virarCarta(elemento) {
   bloquearCartas = true;
   setTimeout(() => {
   primeiraCarta.querySelector(".verso img").classList.add("oculto")
   primeiraCarta.querySelector(".frente img").classList.remove("oculto")
   segundaCarta.querySelector(".verso img").classList.add("oculto")
   segundaCarta.querySelector(".frente img").classList.remove("oculto")
   resetarCartas()
   }, 2000)
}

function resetarCartas(corresponde = false) {
   if (corresponde) {
      primeiraCarta.removeEventListener('click', clicarCarta)
      segundaCarta.removeEventListener('click', clicarCarta)
   }
   corresponde = false;
   bloquearCartas = false;
   primeiraCarta = null;
   segundaCarta = null;  
}

function embaralhador() {
   //for (let i = 0; i < cartasPraJogo.length; i++) {
      //let aleatorio = Math.floor(Math.random() * numeroCartas)
      //cartasPraJogo.style.order = aleatorio
   //}
   return Math.random()
}

function comparadorCartas() {
   let corresponde = primeiraCarta.dataset.card === segundaCarta.dataset.card

   if (!corresponde) {
      virarCarta()
   } else {
      resetarCartas(corresponde)
      setTimeout(verificarFimJogo, 2000)
   }
}

inserirCartas();

function verificarFimJogo() {
   if (document.querySelectorAll(".selecionado").length === Number(numeroCartas)) {
      alert(`Fim de jogo! Você completou o jogo com ${contadorJogadas} jogadas.`)
   }
}

