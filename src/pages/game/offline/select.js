export function render(app, navigate) {
  app.innerHTML = `
        <div class="grid">
          <div class="grid-item-left" id="1p">1 player</div>
          <div></div>
          <div class="grid-item-left" id="4p">4 players</div>
        </div>
    `;

  document.getElementById('1p').addEventListener('click', () => navigate('game/offline/single'));
  document.getElementById('4p').addEventListener('click', () => navigate('4p'));
}