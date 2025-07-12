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

  let variavel = hour == 18 && mint == 0 && sec == 30 ? window.location.reload() : ""; 
}

function changeRootVariables(backgroundColor, textColor, iconColor) {
  const root = document.documentElement;


  root.style.setProperty('--background', backgroundColor);
  root.style.setProperty('--text-color', textColor);
  root.style.setProperty('--icon-color', iconColor)
}

function trocaIcone() {

  const hour = new Date().getHours();
  if( hour < 18 && hour > 3 ){
    changeRootVariables('#ffffff', 'rgb(50, 50, 50)', 'rgb(58, 57, 57)');
    icon.className = "bi bi-brightness-high-fill";
  }
  else{
    changeRootVariables('rgb(50, 50, 50)', '#ffffff', 'rgb(231, 230, 230)');
    icon.className = "bi bi-moon-fill";
  }
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
