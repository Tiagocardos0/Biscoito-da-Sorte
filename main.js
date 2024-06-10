
    // captura das duas divs por classe
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
    // captura de ID da imagem biscoito e do button
const btnClic = document.querySelector("#btnClic")
const btnReset = document.querySelector("#btnReset")

const phrases = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

    //Altera as telas, tira uma e mostra outra
function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
    // muda as frases do array randomicamente
function choosephrase () {
    let allphrases = phrases.length
    let randomNumber = Math.floor(Math.random() * allphrases)  
    screen2.querySelector("p").innerText = `${phrases[randomNumber]}`
}
    //quando clicar no biscoito ou der enter, alterna a tela mostra a frase, e troca a frase
function toClick () {
    toggleScreen()
    choosephrase()
}
    // volta a tela inicial, alternando a tela
function ResetClick() {
    toggleScreen()
}
 // eventos ao tocar no biscoito e ao clicar no botao de abrir biscoito e usar o enter em vez do click
btnClic.addEventListener("click", toClick)
btnReset.addEventListener("click", ResetClick)
document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter'){
        toClick()
    }
})

