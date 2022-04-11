//Variáveis globais


let quantidadeCartas; 
let yfirstCard = true; 
let firstCard; 
let secondCard; 
let endGame = 0; 
let clickCounter = 0; 

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
        showCards();
        

    } else if (cartaPar === false || cartaInterval === false) {
        alert(`Caro jogador(a), seu nº de cartas (${quantidadeCartas}) não está seguindo 
        as regras. Escolha novamente, Boa sorte!`);
        pergunta(); 
        //quantidadeCartas = 0;  

        setTimeout(function() {
            verificaValor();
        }, 200); 
 
    } 


}
verificaValor(); 

//cartas gif com link com class
let cartasGif = [
    "card-front-bobrossparrot", 
    "card-front-explodyparrot", 
    "card-front-fiestaparrot", 
    "card-front-metalparrot", 
    "card-front-revertitparrot", 
    "card-front-tripletsparrot", 
    "card-front-unicornparrot"
]

function comparador() { 
	return Math.random() - 0.5; 
}

const cartasNum = [0, 1, 2, 3, 4, 5, 6]; 

const cartasNumSort = cartasNum.sort(comparador);


let sGame; 

function starGame() {

    sGame = []; 
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

function showCards () {
    const cardsGame = document.querySelector(".cards-game"); 
    for (let i = 1; i<= quantidadeCartas; i++) {
        cardsGame.innerHTML += `
        <div onclick="validateClick(this)" id="cardNumber${i}" class="card card-verse">
        </div>`
    }
    takePictures(); 
}


let nameGif

function takePictures() { 

    nameGif = []; 

    for (let j = 0; j < arr3.length; j++) {
        nameGif[j] = cartasGif[arr3[j]]; 
   
   }

}
 
function validateClick(card) {
    if (card.classList.length !== 3) {
        selectCard(card); 
    }

}

//criando a função selectCard

function selectCard (card) {
    let nameId = (card.id);
    nameId = nameId.replace('cardNumber', ' '); 
    card.classList.add(nameGif[nameId-1]);
    upturnedYNCard(card); 
}


function upturnedYNCard (card) {
    setTimeout(function () {

        if (yfirstCard) {
            clickCounter++
            firstCard = card
            yfirstCard = false; 
        } else {
            secondCard = card 
            if (firstCard.classList[2] !== secondCard.classList[2]) {
                secondCard.classList = "card card-verse";
                firstCard.classList = "card card-verse"; 
            } else {
                endGame++
                if(quantidadeCartas/2 === endGame) {
                    alert(`Parabéns! Você ganhou em ${clickCounter} jogadas!`); 

                    const backButton = document.querySelector(".hide"); 
                    backButton.classList.remove("hide"); 
                    const refreshPage = document.querySelector("#refresh"); 
                    refreshPage.addEventListener("click", function () {
                        location.reload(); 
                    });

                }
            }
            yfirstCard = true
        }

    }, 1000)
}



