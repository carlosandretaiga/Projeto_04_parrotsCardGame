
//distribuição das cartas
// - o usuário será perguntado com quantas cartas quer jogar(utilizar prompt)
//verificar utilizar uma página inicial com overlay escondido 

//- o usuário deverá escolher de 4 a 14, números pares. Para qualquer número qu
//fuja da regra, o prompt deverá fiar sendo repetido, até que o usuário coloque 
// um número válido

let quantidadeCartas; 

function pergunta() {
    quantidadeCartas = prompt(`Caro jador(a), seja bem-vindo(a) ao PARROT CARD GAME!!\n 
Ao aceitar o desafio deste jogo, você deve seguir somente duas regras: \n
1ª - Escolher um nº PAR de cartas;\n
2ª - Nº de cartas deve estar entre 4 e 14, com a inclusão de ambos no intervalo.\n
Por exemplo, não é possível jogar escolhendo 2 cartas, pois apesar de 2 ser um nº par, não está entre 4 e 14!!! E aí aceita o desafio?`); 

    quantidadeCartas = Number(quantidadeCartas); 

}
 

//função para verificar se o número digitado está entre 4 e 14 e é par
function verificaValor() {
    pergunta(); 

    const cartaPar = (quantidadeCartas % 2 === 0); 
    const cartaInterval = ((quantidadeCartas >= 4) && (quantidadeCartas <= 14)); 

    //primeiro posso ver se é par
    if((cartaPar) && (cartaInterval)) {

        const mostraTela = document.querySelector(".container");
        mostraTela.classList.remove("escondido");
        

    } else if (cartaPar === false || cartaInterval === false) {
        alert(`Caro jogador(a), seu nº de cartas (${quantidadeCartas}) não está seguindo 
        as regras. Escolha novamente, Boa sorte!`);
        pergunta(); 

        setTimeout(function() {
            verificaValor();
        }, 200); 
 
    } 


}
verificaValor(); 

let cartasGif = [
    "bobrossparrot", 
    "explodyparrot", 
    "fiestaparrot", 
    "metalparrot", 
    "revertitparrot", 
    "tripletsparrot", 
    "unicornparrot"
]



function comparador() { 
	return Math.random() - 0.5; 
}

const cartasNum = [0,1, 2, 3, 4, 5, 6]; 

const cartasNumSort = cartasNum.sort(comparador);


let sGame; 

function starGame() {

    sGame = []; 
    //aqui vamos pegar quantidade de cartas e dividir por dois 
    //para ter um array de 2 itens e depois aplicamos comparador nesse 
    //novo array
    for (let i = 0; i < (quantidadeCartas/2); i++) {
        sGame[i] = cartasNumSort[i]; 
   
   }
}

starGame(); 

arr3 = sGame.concat(sGame);

//esse array arr3 vai ter as posições dos nome dos gif do jogo: 
//preciso fazer a relação com o array cartasGif
arr3.sort(comparador); 

//obtendo array com o nome dos gifs

let nameGif

function Gif() { 

    nameGif = []; 

    for (let j = 0; j < arr3.length; j++) {
        nameGif[j] = cartasGif[arr3[j]]; 
   
   }

}

Gif(); 

function mostrarCarta () {
    let novo = document.querySelector(".card .back-face.face"); 
    novo.classList.remove("escondido")
}


function adicionarCartas () {
    const carta = document.querySelector(".cards-game"); 

    carta.innerHTML = "";
    for (let i = 0; i < nameGif.length; i++) {

        carta.innerHTML += `
          <div class="card" onclick="mostrarCarta()">
          <div class="front-face face">
             <img src="images/front.png" >
          </div>

          <div class="back-face face">
             <img src="images/${nameGif[i]}.gif" >
          </div>
  </div>
      `;
    } 
}

adicionarCartas()

//const cartas = [
    //{carta4: ["bobrossparrot.gif", "explodyparrot.gif", ]}
//]

//console.log(quantidadeCartas); 

//- após inserir o número de cartas válido, o jogo deverá inserir as cartas
//viradas para baixo na página de forma que a distribuição seja aleatória

//Criando um array exemplo

//const minhaArray = [3, 5, 2, 6, 4, 9]; 



// Esta função pode ficar separada do código acima, onde você preferir
//function comparador() { 
	//return Math.random() - 0.8; 
//}

//minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

//console.log(minhaArray);

// - Clique na arta 
// 


//setTimeout(function() {
    //console.log("Aqui executamos algo!")
//}, 3000)