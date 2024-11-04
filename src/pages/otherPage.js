export function renderOtherPage(app, pageName, navigate) {
    app.innerHTML = `
        <div class="page-container">
            <h1>${pageName}</h1>
            <p>Welcome to the ${pageName} page.</p>
            <button id="backButton">Go Back</button>
        </div>
    `;
    document.getElementById('backButton').addEventListener('click', () => navigate('main'));
}