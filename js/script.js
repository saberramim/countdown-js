let count = 120;
let countTimer = null;

// mm:ss
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return mm + ":" + ss;
}

function onLoadCounter() {
  const savedCount = sessionStorage.getItem("count");
  const savedState = sessionStorage.getItem("state");

  if (savedCount !== null) {
    const parsed = Number(savedCount);
    if (!Number.isNaN(parsed) && parsed >= 0) {
      count = parsed;
    }
  } else {
    count = 120;
  }

  const counterEl = document.getElementById("counter");
  if (counterEl) counterEl.textContent = formatTime(count);

  const startBtn = document.querySelector(".start");
  const pauseBtn = document.querySelector(".pause");
  const resetBtn = document.querySelector(".reset");

  if (savedState === "started") {
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (resetBtn) resetBtn.disabled = false;
    startCountdown();
  } else {
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) pauseBtn.disabled = true;
    if (resetBtn) resetBtn.disabled = false;
  }
}

function startCountdown() {
  if (countTimer) return;

  const startBtn = document.querySelector(".start");
  const pauseBtn = document.querySelector(".pause");
  const resetBtn = document.querySelector(".reset");

  if (startBtn) startBtn.disabled = true;
  if (pauseBtn) pauseBtn.disabled = false;
  if (resetBtn) resetBtn.disabled = false;

  sessionStorage.setItem("state", "started");
  sessionStorage.setItem("count", String(count));

  countTimer = setInterval(function () {
    count -= 1;

    if (count <= 0) {
      count = 0;
      clearInterval(countTimer);
      countTimer = null;

      if (startBtn) startBtn.disabled = false;
      if (pauseBtn) pauseBtn.disabled = true;

      sessionStorage.setItem("state", "stopped");
    }

    const counterEl = document.getElementById("counter");
    if (counterEl) counterEl.textContent = formatTime(count);
    sessionStorage.setItem("count", String(count));
  }, 1000);
}

function pauseCountdown() {
  if (countTimer) {
    clearInterval(countTimer);
    countTimer = null;
  }
  const startBtn = document.querySelector(".start");
  const pauseBtn = document.querySelector(".pause");
  if (startBtn) startBtn.disabled = false;
  if (pauseBtn) pauseBtn.disabled = true;

  sessionStorage.setItem("state", "paused");
}

function resetCountdown() {
  if (countTimer) {
    clearInterval(countTimer);
    countTimer = null;
  }
  count = 120;
  const counterEl = document.getElementById("counter");
  if (counterEl) counterEl.textContent = formatTime(count);

  const startBtn = document.querySelector(".start");
  const pauseBtn = document.querySelector(".pause");
  const resetBtn = document.querySelector(".reset");

  if (startBtn) startBtn.disabled = false;
  if (pauseBtn) pauseBtn.disabled = true;
  if (resetBtn) resetBtn.disabled = false;

  sessionStorage.setItem("state", "stopped");
  sessionStorage.setItem("count", String(count));
}

document.addEventListener("DOMContentLoaded", () => {
  onLoadCounter();
});
