

var x,maxim,medio,reproducir,bar,progreso;
function reproducir(){
    maxim = 400;
    x= document.getElementById('musica') ;
    medio = document.getElementById('musica');
    reproducir= document.getElementById("play");
    bar = document.getElementById("barra");

   progreso = document.getElementById('progreso')
  x.play();
  barra.addEventListener("click", move);

//  estado();
}
function pausa(){
  var x= document.getElementById("musica");
  x.pause();
}
function parar(){
  var x= document.getElementById("musica");
  x.load();
}
function subir(){
  var sonido= document.getElementById("musica");
  if(sonido.volume===1.0){
    alert("Ya es lo maximo :3")
  }else {
    sonido.volume+=.1;
    console.log(sonido.volume)
  }

}
function bajar (){
  var sonido= document.getElementById("musica");
  if(sonido.value === 0){
    alert("Ya es lo minimo x.x")
  }else {
    sonido.volume -=.1;
    console.log(sonido.volume);
  }


}
function avanzar() {
  var sonido = document.getElementById("musica");
  var avanzar= musica.currentTime;
  console.log(avanzar);

}
function estado() {


  if (!x.ended) {
    var size = parseInt(x.currentTime * maxim / x.duration);
    progreso.style.width = size + "px";
  } else {
    progreso.style.width = "0px";
  //  play.value = "Play";
    clearInterval(loop);
  }
}
function move(event) {
  if (!x.paused && !x.ended) {
    var mouseX = event.offsetX - 2;
    if (mouseX < 0) {
      mouseX = 0;
    } else if (mouseX > maxim) {
      mouseX = maxim;
    }
    var newtime = mouseX * x.duration / maxim;
    x.currentTime = newtime;
    progreso.style.width = mouseX + "px";
  }
}
