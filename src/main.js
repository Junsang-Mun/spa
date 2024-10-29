import * as bootstrap from 'bootstrap';

const content = document.getElementById('content');

function loadPage(page) {
    switch (page) {
        case 'home':
            content.innerHTML = `
                <h1>환영합니다!</h1>
                <p>여기는 홈 페이지입니다.</p>
                <button type="button" class="btn btn-primary">Base class</button>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>소개</h1>
                <p>이 웹사이트는 Vite와 Bootstrap을 사용하여 만들어진 SPA입니다.</p>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h1>연락처</h1>
                <p>이메일: example@example.com</p>
            `;
            break;
        default:
            content.innerHTML = `<h1>404 Not Found</h1>`;
            break;
    }
}
function handleNavigation(event) {
    const route = event.target.getAttribute('data-route');
    if (route) {
        history.pushState({ route }, "", `#${route}`);  // Change URL without reloading
        loadPage(route);
    }
}

loadPage('home');

// 네비게이션 클릭 이벤트 설정
document.getElementById('home').addEventListener('click', () => loadPage('home'));
document.getElementById('about').addEventListener('click', () => loadPage('about'));
document.getElementById('contact').addEventListener('click', () => loadPage('contact'));
