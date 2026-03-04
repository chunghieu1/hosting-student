function formatCountdownValue(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function initPromoCountdown() {
  const countdown = document.querySelector("[data-countdown-target]");
  const message = document.querySelector("[data-countdown-message]");

  if (!countdown) {
    return;
  }

  const targetRaw = countdown.getAttribute("data-countdown-target");
  const targetTime = new Date(targetRaw).getTime();

  if (Number.isNaN(targetTime)) {
    if (message) {
      message.textContent =
        "Mốc thời gian đếm ngược chưa hợp lệ. Vui lòng cập nhật data-countdown-target.";
    }
    return;
  }

  const dayEl = countdown.querySelector('[data-unit="days"]');
  const hourEl = countdown.querySelector('[data-unit="hours"]');
  const minuteEl = countdown.querySelector('[data-unit="minutes"]');
  const secondEl = countdown.querySelector('[data-unit="seconds"]');

  if (!dayEl || !hourEl || !minuteEl || !secondEl) {
    return;
  }

  const tick = () => {
    const now = Date.now();
    const distance = targetTime - now;

    if (distance <= 0) {
      dayEl.textContent = "00";
      hourEl.textContent = "00";
      minuteEl.textContent = "00";
      secondEl.textContent = "00";

      if (message) {
        message.textContent = "Ưu đãi đã kết thúc. Liên hệ Zhost để nhận hỗ trợ tốt nhất.";
      }
      return false;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    dayEl.textContent = formatCountdownValue(days);
    hourEl.textContent = formatCountdownValue(hours);
    minuteEl.textContent = formatCountdownValue(minutes);
    secondEl.textContent = formatCountdownValue(seconds);

    if (message) {
      message.textContent = `Kết thúc vào: ${new Date(targetTime).toLocaleString("vi-VN")}`;
    }

    return true;
  };

  if (!tick()) {
    return;
  }

  const intervalId = setInterval(() => {
    const isRunning = tick();
    if (!isRunning) {
      clearInterval(intervalId);
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", initPromoCountdown);
