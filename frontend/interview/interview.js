const interviewTimer = {
  timerId: null,
  remainingSeconds: 30 * 60
};

const updateCountDisplay = () => {
  const minutes = String(Math.floor(interviewTimer.remainingSeconds / 60)).padStart(2, '0');
  const seconds = String(interviewTimer.remainingSeconds % 60).padStart(2, '0');
  const timerDisplay = document.getElementById('countdown');
  if (timerDisplay) {
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }
};

const startInterviewTimer = () => {
  if (interviewTimer.timerId) clearInterval(interviewTimer.timerId);

  interviewTimer.remainingSeconds = 30 * 60;
  updateCountDisplay();

  interviewTimer.timerId = setInterval(() => {
    if (interviewTimer.remainingSeconds <= 0) {
      clearInterval(interviewTimer.timerId);
      const message = document.getElementById('auto-submit-message');
      if (message) {
        message.textContent = 'Time is up. Your code was auto-submitted.';
      }
      return;
    }

    interviewTimer.remainingSeconds -= 1;
    updateCountDisplay();
  }, 1000);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startInterviewTimer);
} else {
  startInterviewTimer();
}

