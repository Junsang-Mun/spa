export function renderLoginPage(app, navigate) {
    app.innerHTML = `
        <h1>PONG</h1>
        <button class="login-button" id="loginButton">Login with 42</button>
    `;
    document.getElementById('loginButton').addEventListener('click', () => {
        navigate('main');
    });
}