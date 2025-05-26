const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const nowPlaying = document.getElementById("nowPlaying");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const currentTimeSpan = document.getElementById("currentTime");
const durationSpan = document.getElementById("duration");
const volumeUpBtn = document.getElementById("volumeUpBtn");
const volumeDownBtn = document.getElementById("volumeDownBtn");

let playlist = [];
let currentIndex = -1;
let isShuffle = false;
let isRepeat = false;

document.querySelectorAll(".song-card").forEach((card, i) => {
  playlist.push({
    title: card.dataset.title,
    src: card.dataset.src
  });

  card.addEventListener("click", () => {
    currentIndex = i;
    playSong();
  });
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}

function playSong() {
  if (currentIndex < 0 || currentIndex >= playlist.length) return;
  audio.src = playlist[currentIndex].src;
  nowPlaying.textContent = `🎶 Playing: ${playlist[currentIndex].title}`;
  audio.play();
  playBtn.textContent = "⏸️";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

audio.addEventListener("ended", () => {
  if (isRepeat) {
    playSong();
  } else if (isShuffle) {
    currentIndex = Math.floor(Math.random() * playlist.length);
    playSong();
  } else {
    currentIndex = (currentIndex + 1) % playlist.length;
    playSong();
  }
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  currentTimeSpan.textContent = formatTime(audio.currentTime);
  durationSpan.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value / 100;
});

volumeUpBtn.addEventListener("click", () => {
  volume.value = Math.min(100, parseInt(volume.value) + 10);
  audio.volume = volume.value / 100;
});

volumeDownBtn.addEventListener("click", () => {
  volume.value = Math.max(0, parseInt(volume.value) - 10);
  audio.volume = volume.value / 100;
});

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("btn-success", isShuffle);
});

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("btn-success", isRepeat);
});


function updateGreeting() {
      const now = new Date();
      const hour = now.getHours();
      const greetingEl = document.getElementById('greeting');

      let greeting = '';
      if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
      } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon';
      } else if (hour >= 17 && hour < 21) {
        greeting = 'Good Evening';
      } else {
        greeting = 'Good Night';
      }

      greetingEl.textContent = greeting;
    }

    updateGreeting();