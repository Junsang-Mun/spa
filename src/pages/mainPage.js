export function renderMainPage(app, navigate) {
    app.innerHTML = `
        <div class="main-container">
            <h1>PONG</h1>
            <div class="options">
                <button class="option" id="single-player">Single Player</button>
                <button class="option" id="online-match">Online Match</button>
                <button class="option" id="tournament">Tournament</button>
                <button class="option" id="not-a-game">Totally Not A Game</button>
            </div>
        </div>
    `;

    document.getElementById('single-player').addEventListener('click', () => navigate('single-player'));
    document.getElementById('online-match').addEventListener('click', () => navigate('online-match'));
    document.getElementById('tournament').addEventListener('click', () => navigate('tournament'));
    document.getElementById('not-a-game').addEventListener('click', () => navigate('not-a-game'));
}