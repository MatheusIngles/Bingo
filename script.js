/* Função inicial para Conseguir Fazer a intro */

function Start(){
    var Video = document.getElementById("Video")
    var VideoStarter = document.getElementById("Video-Starter")

    VideoStarter.play();

    PlayMusic()

    setTimeout(ColorChange, 7900)   

    function ColorChange(){
        var ColorH1 = document.getElementById("tela_inicial")
        
        ColorH1.style.color = "black"
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
