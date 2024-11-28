import { t } from '/src/modules/locale/localeManager.js';

export function render(app, navigate, locale = 'ja-JP') {
    app.innerHTML = `
    <div style="background-color: #0078D7; padding: 2rem">
        <h1 style="text-align: left">:(</h1>
        <p style="text-align: left">${t('error', 'sorry', locale)}</p>
        <button class="back-button" id="backButton">${t('errorButton', 'back', locale)}</button>
    </div>
    `;
    console.log('⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣦⠀\n⠀⠀⠀⠀⣰⣿⡟⢻⣿⡟⢻⣧\n⠀⠀⠀⣰⣿⣿⣇⣸⣿⣇⣸⣿\n⠀⠀⣴⣿⣿⣿⣿⠟⢻⣿⣿⣿\n⣠⣾⣿⣿⣿⣿⣿⣤⣼⣿⣿⠇\n⢿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠀\n⠀⠀⠈⠿⠿⠋⠙⢿⣿⡿⠁⠀');
    document.getElementById('backButton').addEventListener('click', () => {
        navigate('login');
    });
}