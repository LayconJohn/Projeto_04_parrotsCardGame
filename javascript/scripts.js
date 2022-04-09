let numeroCartas;
let cartasPraJogo = []; //Adicionar aqui todas as cartas do jogo
let gifsCard = [
   '<img src="midias/bobrossparrot.gif" class="verso oculto">',
   '<img src="midias/explodyparrot.gif" class="verso oculto">',
   '<img src="midias/fiestaparrot.gif" class="verso oculto">',
   '<img src="midias/metalparrot.gif" class="verso oculto">',
   '<img src="midias/revertitparrot.gif" class="verso oculto">',
   '<img src="midias/tripletsparrot.gif" class="verso oculto">',
   '<img src="midias/unicornparrot.gif" class="verso oculto">'
]

//

function criarParAleatorio() {
   let indice = Math.floor((Math.random() * 7) + 1) //valor aleatorio de 0 ao tamanho de gif card  
   cartasPraJogo.push(gifsCard[indice])
   cartasPraJogo.push(gifsCard[indice])
   console.log(cartasPraJogo)
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
}

function validarParCartas(numeroCartas) {
    const ePar = (numeroCartas%2 == 0)
    return ePar   
}

function clicarCarta (elemento) {
   let divCard = elemento.querySelector(".verso").parentNode
   let cardFrente = elemento.querySelector(".frente img")
   let cardVerso = elemento.querySelector(".verso img")
   cardFrente.classList.add("oculto")
   cardVerso.classList.remove("oculto")
   divCard.classList.add("selecionado")
}  


function embaralhador() {
   return Math.random()
}

inserirCartas()
