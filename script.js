const button = document.getElementById('order-btn');
const sound = document.getElementById('click-sound');
const orderFormUrl = 'https://butter-look-617.notion.site/29b86c3bb6b980c6a41ec40c43c31303';

button.addEventListener('click', () => {
  sound.currentTime = 0;

  const playPromise = sound.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {
      /* Some browsers block autoplay; safely ignore errors */
    });
  }

  window.open(orderFormUrl, '_blank', 'noopener');
});
