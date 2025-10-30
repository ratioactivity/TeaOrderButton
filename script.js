const button = document.getElementById('order-btn');
const sound = document.getElementById('click-sound');

button.addEventListener('click', () => {
  // play shimmer
  sound.currentTime = 0;
  sound.play();

  // open Notion order form
  window.open('https://butter-look-617.notion.site/29b86c3bb6b980c6a41ec40c43c31303', '_blank');
});
