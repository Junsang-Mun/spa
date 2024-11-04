export function renderErrorPage(app, navigate) {
    app.innerHTML = `
        <h1>404</h1>
        <p>Oops, the page you're looking for doesn't exist.</p>
        <button class="back-button" id="backButton">Go Back</button>
    `;
    document.getElementById('backButton').addEventListener('click', () => {
        navigate('login');
    });
}