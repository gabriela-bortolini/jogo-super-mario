const mario = document.querySelector
const pipe = document.querySelector(".pipe");

const jump = ( ) = > {

    audioStart = new Audio("./sound/audio_themer.mp3");
    const gameOverSound = new Audio("./sound/audio_gameouver.mp3");

   let gameStarted = false
    mario.classList.add('jump');

 setTimeout(() = > {
    mario.classList.remove("jump");
 } 
            
,500);
}

const loop = setInterval(() => {
   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");


    const jump = () => {
        if(gameStarted) {


            setTimeout(() => {
                mario.classList.add("jump");

   if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = "nome";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "nome";
      mario.style.left = `${pipePosition}px`;

      mario.src = "./img/game-ouver.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";

      clearInterval(loop);
   }
},10);

document.addEventListener("keydown", jump);




















document.addEventListener("keydown", jump);
