const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

video.addEventListener('click',toggleVideo);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);
play.addEventListener('click',toggleVideo);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);


function toggleVideo(){
  if(video.paused){
    video.play();
  }
  else{
    video.pause();
  }
}


function updatePlayIcon(){
  if(video.paused){
    play.innerHTML='<li class="fas fa-play"></li>'
  }
  else{
    play.innerHTML='<li class="fas fa-pause"></li>'
  }
}


function updateProgress(){
  progress.value=(video.currentTime/video.duration)*100;

  let mins=Math.floor(video.currentTime/60);
  if(mins<10){
    mins='0'+mins;
  }

  let secs=Math.floor(video.currentTime%60);
  if(secs<10){
    secs='0'+secs;
  }

  timestamp.innerHTML=`${mins}:${secs}`;
}

function setVideoProgress(){
  video.currentTime=(+progress.value*video.duration)/100;
}

function stopVideo(){
  video.currentTime=0;
  video.pause();
}
