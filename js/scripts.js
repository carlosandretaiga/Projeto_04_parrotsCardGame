//Variáveis globais

//numberOfCards
let numberOfCards; 
let yfirstCard = true; 
let firstCard; 
let secondCard; 
let endGame = 0; 
let clickCounter = 0; 



//cartas gif com link com class
const cardGifImages = [
    "card-front-bobrossparrot1", 
    "card-front-bobrossparrot1",
    "card-front-explodyparrot2", 
    "card-front-explodyparrot2",
    "card-front-fiestaparrot3", 
    "card-front-fiestaparrot3",
    "card-front-metalparrot4", 
    "card-front-metalparrot4",
    "card-front-revertitparrot5", 
    "card-front-revertitparrot5",
    "card-front-tripletsparrot6", 
    "card-front-tripletsparrot6",
    "card-front-unicornparrot7",
    "card-front-unicornparrot7"
]

const selectImages = []; 

function pergunta() {
    numberOfCards = prompt(`Caro jador(a), seja bem-vindo(a) ao PARROT CARD GAME!!\n 
Ao aceitar o desafio deste jogo, você deve seguir somente duas regras: \n
1ª - Escolher um nº PAR de cartas;\n
2ª - Nº de cartas deve estar entre 4 e 14, com a inclusão de ambos no intervalo.\n
Por exemplo, não é possível jogar escolhendo 2 cartas, pois apesar de 2 ser um nº par, não está entre 4 e 14!!! E aí aceita o desafio?`); 

    numberOfCards = Number(numberOfCards); 

}
 
//função para verificar se o número digitado está entre 4 e 14 e é par
function verificaValor() {
    pergunta(); 

    const cartaPar = (numberOfCards % 2 === 0); 
    const cartaInterval = ((numberOfCards >= 4) && (numberOfCards <= 14)); 

    //primeiro posso ver se é par
    if((cartaPar) && (cartaInterval)) {
        showCards();
        
    } else if (cartaPar === false || cartaInterval === false) {
        alert(`Caro jogador(a), seu nº de cartas (${numberOfCards}) não está seguindo 
        as regras. Escolha novamente, Boa sorte!`);
        pergunta(); 
        //numberOfCards = 0;  

        setTimeout(function() {
            verificaValor();
        }, 200); 
 
    } 


}
verificaValor(); 


function showCards () {
    const cardsGame = document.querySelector(".cards-game"); 
    for (let i = 1; i<= numberOfCards; i++) {
        cardsGame.innerHTML += `
        <div onclick="validateClick(this)" id="cardNumber${i}" class="card card-verse">
        </div>`
    }
    takePictures(); 
}


function takePictures() { 
    for (let i=0; i<numberOfCards; i++) {
        let takeimg = cardGifImages[i];
        selectImages.push(takeimg); 
    }
   misturarArray();
}

function misturarArray() {
    selectImages.sort(comparador); 
}

function comparador() {
    return Math.random() - 0.5; 
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
    card.classList.add(selectImages[nameId-1]);
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
                if(numberOfCards/2 === endGame) {
                    alert(`Parabéns! Você ganhou em ${clickCounter} jogadas!`); 

                    const backButton = document.querySelector(".hide"); 
                    backButton.classList.remove("hide"); 
                    const refreshPage = document.querySelector("#refresh-page"); 
                    refreshPage.addEventListener("click", function () {
                        location.reload(); 
                    });

                }
            }
            yfirstCard = true
        }

    }, 1000)
}



