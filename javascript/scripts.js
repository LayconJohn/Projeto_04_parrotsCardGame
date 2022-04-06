let numeroCartas;

function inserirCartas() {
    // receber o número de cartas
     numeroCartas = prompt("Quantas cartas você quer jogar? (Selecione um número par entre 4 e 14)")
     // validar cartas
     while (validarCartas(numeroCartas) === false || (numeroCartas > 14 || numeroCartas < 4)) {
        numeroCartas = prompt("Por favor, selecione apenas valores pares entre 4 e 14:")
     }
     let contador = 0;
     let espacoCard = document.querySelector('.cards')
     //espacoCard.innerHTML += `<div class="card"><img src="midias/front.png" alt=""></div>`
     while (contador < numeroCartas) {
        espacoCard.innerHTML += `<div class="card"><img src="midias/front.png" alt=""></div>`
        contador ++
     }
}

function validarCartas(numeroCartas) {
    const ePar = (numeroCartas%2 == 0)
    return ePar   
}

inserirCartas()