import { t } from '/src/locale/localeManager.js';

export function render(app, navigate, locale = 'ja-JP') {
    app.innerHTML = `
        <div class="grid">
            <div class="grid-item-left" id="online-2p">${t('online1v1', '1v1 Online', locale)}</div>
            <div class="grid-item-right" id="online-4p">${t('online2v2', '4P Online', locale)}</div>
            <div class="grid-item-left" id="offline-2p">${t('local1v1', 'Local Duel', locale)}</div>
            <div class="grid-item-right" id="offline-ai">${t('localAI', 'AI Battle', locale)}</div>
            <div class="grid-item-left" id="scoreboard">${t('scoreboard', 'Scoreboard', locale)}</div>
            <div class="grid-item-right" id="totallynotagame">${t('not_a_game', 'Totally Not a Game', locale)}</div>
        </div>
    `;

    document.getElementById('online-2p').addEventListener('click', () => navigate('game/online/2p'));
    document.getElementById('online-4p').addEventListener('click', () => navigate('game/online/4p'));
    document.getElementById('offline-2p').addEventListener('click', () => navigate('game/offline/2p'));
    document.getElementById('offline-ai').addEventListener('click', () => navigate('game/offline/ai'));
    document.getElementById('scoreboard').addEventListener('click', () => navigate('scoreboard'));
    document.getElementById('totallynotagame').addEventListener('click', () => navigate('totallynotagame'));
}
