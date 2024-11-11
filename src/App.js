import { renderHeader } from './modules/header.js';

const app = document.getElementById('app');

// Routing map for multi-depth routes
const routes = {
    'login': () => import('./pages/login.js').then(module => module.render(app, navigate)),
    'main': () => import('./pages/main.js').then(module => module.render(app, navigate)),
    'game': {
        'offline': {
            'single': () => import('./pages/game/offline/single.js').then(module => module.render(app, navigate)),
        },
        'online': {
            // 'signle': () => import('./pages/game/online/single.js').then(module => module.render),
        },
    },
};

// Default error page
const errorPage = () => import('./pages/error.js').then(module => module.render(app, navigate));

function navigate(path) {
    history.pushState({ path }, "", `/${path}`);
    renderPage(path);
}

async function resolveRoute(path) {
    const segments = path.split('/');
    let currentRoute = routes;

    for (const segment of segments) {
        if (typeof currentRoute === 'function') {
            return currentRoute; // Match function.
        }
        currentRoute = currentRoute[segment]; // Drill further.
    }

    console.log(`Route not found for path: ${path}, using errorPage.`);
    return typeof currentRoute === 'function' ? currentRoute : errorPage;
}

async function renderPage(path) {
    renderHeader(document.getElementById('header'));

    try {
        const renderer = await resolveRoute(path);
        console.log(`Rendering path: ${path}`);
        renderer(app, navigate);
    } catch (error) {
        console.error(`Error rendering page for path "${path}":`, error);
    }
}

// Handle popstate for back/forward navigation
window.addEventListener('popstate', (event) => {
    renderPage(event.state ? event.state.path : 'login');
});

// Initial page load
const initialPath = window.location.pathname.replace('/', '') || 'login';
renderPage(initialPath);
