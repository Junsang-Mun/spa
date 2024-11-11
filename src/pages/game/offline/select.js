export function render(app, navigate) {
  app.innerHTML = `
        <div class="grid">
          <div class="grid-item-left" id="online-match">1 player</div>
          <div></div>
          <div class="grid-item-left" id="offline-match">4 players</div>
        </div>
    `;

  document.getElementById('online-match').addEventListener('click', () => navigate('game/offline/single'));
  document.getElementById('not-a-game').addEventListener('click', () => navigate('not-a-game'));
  document.getElementById('offline-match').addEventListener('click', () => navigate('offline-match'));
  document.getElementById('your-score').addEventListener('click', () => navigate('your-score'));
}