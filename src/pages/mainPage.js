export function renderMainPage(app, navigate) {
    app.innerHTML = `
        <div class="grid">
          <div class="grid-item-left" id="online-match">Online Match</div>
          <div class="grid-item-right"id="not-a-game">Totally Not A Game</div>
          <div class="grid-item-left" id="offline-match">Offline Match</div>
          <div class="grid-item-right" id="your-score">Your Score</div>
        </div>
    `;

    document.getElementById('online-match').addEventListener('click', () => navigate('online-match'));
    document.getElementById('not-a-game').addEventListener('click', () => navigate('not-a-game'));
    document.getElementById('offline-match').addEventListener('click', () => navigate('offline-match'));
    document.getElementById('your-score').addEventListener('click', () => navigate('your-score'));
}