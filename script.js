let totalSeconds = 17 * 3600 + 46 * 60 + 2;

function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

  if (totalSeconds > 0) totalSeconds--;
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial call to display the timer immediately



const video = document.getElementById('nocompromiseVideo');
const playBtn = document.getElementById('playNocompromise');
playBtn.addEventListener('click', function () {
  video.play();
  playBtn.style.display = 'none';
});
video.addEventListener('pause', function () {
  playBtn.style.display = '';
});
video.addEventListener('play', function () {
  playBtn.style.display = 'none';
});

const tfVideo = document.getElementById('tripleFiltrationVideo');
const tfPlayBtn = document.getElementById('playTripleFiltration');
if (tfVideo && tfPlayBtn) {
  tfPlayBtn.addEventListener('click', function () {
    tfVideo.play();
    tfPlayBtn.style.display = 'none';
  });
  tfVideo.addEventListener('pause', function () {
    tfPlayBtn.style.display = '';
  });
  tfVideo.addEventListener('play', function () {
    tfPlayBtn.style.display = 'none';
  });
}



const faqItems = document.querySelectorAll('.faq-item');
 
faqItems.forEach(function (el) {
  const btn = el.querySelector('.faq-btn');
 
  btn.addEventListener('click', function () {
    const isOpen = el.classList.contains('open');
 
    faqItems.forEach(function (o) {
      o.classList.remove('open');
      o.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
    });
 
    if (!isOpen) {
      el.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
 