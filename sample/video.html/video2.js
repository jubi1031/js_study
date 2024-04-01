const videoCon = document.querySelectorAll('.contents> article');

videoCon.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    let video = e.target.querySelector('video');
    video.muted = true;
    video.play().catch((err) => console.log(err));
    video.loop = true;
  });

  item.addEventListener('mouseleave', (e) => {
    let video = e.target.querySelector('video');
    video.pause();
    // video.muted = true;
    video.currentTime = 0;
  });
});
