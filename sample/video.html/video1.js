const btnVideo = document.querySelector('.btnVideo');
const btnStop = document.querySelector('.btnStop');
const btnReStart = document.querySelector('.btnReStart');

const videoCurrentTime = document.querySelector('.videoCurrentTime');
const videoDuration = document.querySelector('.videoDuration');

const video = document.querySelector('.sec1 > video');

btnVideo.addEventListener('click', () => {
  videoCurrentTime.textContent = `${video.currentTime}`;
  videoDuration.textContent = `${video.duration}`;
  // video 에서 사용할 수 있는 모든 속성들을 주석으로 작성
  // video.play(); // 비디오 재생 ex) video.play()와 같이 사용
  // video.pause(); // 비디오 일시정지 ex) video.play()와 같이 사용
  // video.paused; // 비디오 일시정지 여부 ex) true, false
  // video.currentTime; // 비디오 현재 재생 시간 ex) 10초 => 10
  // video.duration; // 비디오 총 재생 시간 ex) 60초 => 60
  // video.muted; // 비디오 음소거 여부 ex) true, false
  // video.volume; // 비디오 볼륨 ex) 0.1 ~ 1
  // video.playbackRate; // 비디오 재생 속도 ex) 0.5, 1, 1.5, 2
  // video.loop; // 비디오 반복 재생 여부 ex) true, false
  // video.autoplay; // 비디오 자동 재생 여부 ex) true, false
  // video.controls; // 비디오 컨트롤러 표시 여부 ex) true, false
  // video.poster; // 비디오 썸네일 이미지 경로 ex) 'images/video1.jpg'
  // video.src; // 비디오 경로 ex) 'video/video1.mp4'
  // video.load(); // 비디오 다시 로드 ex) video.load()와 같이 사용
  // video.currentSrc; // 비디오 현재 경로 ex) 'video/video1.mp4'
  // video.buffered; // 비디오 버퍼링된 시간 ex) video.buffered.start(0), video.buffered.end(0)
  // video.seekable; // 비디오 재생 가능한 시간 ex) video.seekable.start(0), video.seekable.end(0)
  // video.played; // 비디오 재생된 시간 ex) video.played.start(0), video.played.end(0)
  // video.autoplay; // 비디오 자동 재생 여부 ex) true, false
  // video.preload; // 비디오 로드 방식 ex) 'none', 'metadata', 'auto'
  // video.error; // 비디오 에러 ex) null, MediaError
  // video.textTracks; // 비디오 텍스트 트랙 ex) video.textTracks[0].mode = 'showing'
  // video.videoTracks; // 비디오 비디오 트랙 ex) video.videoTracks[0].selected = true
  // video.audioTracks; // 비디오 오디오 트랙 ex) video.audioTracks[0].enabled = true
  // video.width; // 비디오 너비 ex) 640
  // video.height; // 비디오 높이 ex) 360
  // video.style; // 비디오 스타일 ex) video.style.width = '100%'
  // video.className; // 비디오 클래스 ex) video.className = 'video'
  // video.classList; // 비디오 클래스 리스트 ex) video.classList.add('video')
  // video.attributes; // 비디오 속성 ex) video.attributes[0].name, video.attributes[0].value
  // video.dataset; // 비디오 데이터 속성 ex) video.dataset.id
  // video.accessKey; // 비디오 접근 키 ex) video.accessKey = 'v'

  if (video.paused) {
    video.play();
    video.loop = true;
    btnVideo.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    video.pause();
    btnVideo.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

btnStop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});
btnReStart.addEventListener('click', () => {
  video.play();
});
