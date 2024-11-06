import { renderLoginPage } from './pages/loginPage.js';
import { renderMainPage } from './pages/mainPage.js';
import { renderOtherPage } from './pages/otherPage.js';
import { renderErrorPage } from './pages/errorPage.js';

import { renderHeader } from './modules/header.js';

const app = document.getElementById('app');

function navigate(page) {
    history.pushState({ page }, "", `/${page}`);
    renderPage(page);
}

function renderPage(page) {
    renderHeader(document.getElementById('header'));
    switch (page) {
        case 'main':
            renderMainPage(app, navigate);
            break;
        case 'login':
            renderLoginPage(app, navigate);
            break;
        case 'single-player':
        case 'online-match':
        case 'tournament':
        case 'not-a-game':
            renderOtherPage(app, page.replace('-', ' '), navigate);
            break;
        default:
            renderErrorPage(app, navigate);
            break;
    }
}

// popstate 이벤트로 뒤로가기/앞으로가기를 지원합니다.
window.addEventListener('popstate', (event) => {
    renderPage(event.state ? event.state.page : 'login');
});

// 초기 페이지 로드
const initialPage = window.location.pathname.replace('/', '') || 'login';
renderPage(initialPage);