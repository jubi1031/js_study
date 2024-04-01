const btnVideo = document.querySelector('.btnVideo');
const video = document.querySelector('.sec1 > video');
const btnStop = document.querySelector('.btnStop');
const btnReStart = document.querySelector('.btnReStart');

btnVideo.addEventListener('click', () => {
  console.log(video.paused);
  if (video.paused) {
    video.play();
    btnVideo.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    btnVideo.innerHTML = `<i class="fa-solid fa-paly"></i>`;
  }
});

btnStop.addEventListener('click', () => {
  video.pause();
});

btnReStart.addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
});
