/* Função inicial para Conseguir Fazer a intro */

function Start(){
    var Video = document.getElementById("Video")
    var VideoStarter = document.getElementById("Video-Starter")

    VideoStarter.play();


    setTimeout(PlayMusic, 6000)

    setTimeout(ColorChange, 0)   

    function ColorChange(){
        var ColorH1 = document.getElementById("tela_inicial")
        
        ColorH1.style.color = "#00000000"
    }

    
    VideoStarter.addEventListener("ended", 
    function(){
        Video.style.display = "none"; 
    })


}

/* Função para fazer Refresh */

function Refresh(){
    location.reload();
}

/* Chamando e Criando a função de pausar e iniciar a musica */

var BingoMusic = document.getElementById("music");
var PausePlay =  document.getElementById("PlayPause")

function PlayMusic() {
    BingoMusic.play();
}

function PauseMusic() {
    if (BingoMusic.paused) {
        BingoMusic.play();
        PausePlay.src = "https://img.uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/pause-button-red-icon.png";
    } else {
        BingoMusic.pause();
        PausePlay.src = "https://cdn.pixabay.com/photo/2016/02/01/12/33/play-1173551_1280.png";
    }
}

var verificacao = false;

function Dialogo() {
    var DialogoDiv = document.getElementById("Perguntas");
    var DialogoP = document.getElementById("falas");

    if (DialogoDiv.style.display === "none") {
        setTimeout(function() {
            DialogoDiv.style.display = "flex";

            if (!verificacao) {
                DialogoP.innerHTML = "Bem-vindo, marujo! Sente-se e deixe-me contar uma história dos mares que você ainda não conhece. Sou Jack Marés Profundas McGregor, o orgulhoso capitão deste estabelecimento conhecido como O Barril do Tesouro. Aqui, além de um bom gole, você encontrará diversão de sobra.";

                setInterval(function() {
                    DialogoP.innerHTML = "Vejo que você é novo por estas águas, um rosto fresco navegando pelo desconhecido. Permita-me apresentar-lhe o tesouro escondido nas brincadeiras que temos a bordo. Hoje, lhe convido para embarcar em uma aventura diferente, um jogo que nos faz sentir a emoção de ganhar como se estivéssemos encontrando uma ilha cheia de ouro: o bingo pirata!";
                }, 10000);

                setInterval(function() {
                    DialogoP.innerHTML = "Ouça bem, jovem aventureiro, pois neste bingo você descobrirá um universo repleto de números misteriosos e prêmios que farão seu coração bater mais forte. Junte-se a nós nesta noite e teste sua sorte. Será como atirar um dado contra as ondas revoltas do mar. Quem sabe se, com um pouco de astúcia, você não irá se tornar o mais temido vencedor do bingo dos sete mares?";
                }, 20000);

                setInterval(function() {
                    DialogoP.innerHTML = "";
                }, 30000);

                verificacao = true;
            } else{
                bottons(DialogoP,DialogoDiv)
            }
            
        }, 0);
    } else {
        DialogoDiv.style.display = "none";
    }
}


function bottons(DialogoP) {
    var butoes = document.getElementById("butoes")

    DialogoP.remove();
    butoes.style.height = "60%"
    butoes.display = "flex"

}