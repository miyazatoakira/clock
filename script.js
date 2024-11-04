const timeElements = document.querySelectorAll('.numbers p');
const icon = document.querySelector("#icone");

setInterval(handler, 1000);
trocaIcone();

function handler() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const mint = date.getMinutes().toString().padStart(2, '0');
  const sec = date.getSeconds().toString().padStart(2, '0');

  timeElements[0].innerHTML = hour;
  timeElements[1].innerHTML = ":";
  timeElements[2].innerHTML = mint;
  timeElements[3].innerHTML = ":";
  timeElements[4].innerHTML = sec;

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
}

function trocaIcone() {
  const hour = new Date().getHours();
  icon.className = hour < 18 ? "bi bi-brightness-high-fill" : "bi bi-moon-fill";
}

let wakeLock = null;

async function requestWakeLock() {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('Wake Lock is active');
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
}

async function releaseWakeLock() {
    if (wakeLock !== null) {
        await wakeLock.release();
        wakeLock = null;
        console.log('Wake Lock has been released');
    }
}

document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible') {
        await requestWakeLock();
    } else {
        await releaseWakeLock();
    }
});

requestWakeLock();
