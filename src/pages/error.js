export function render(app, navigate) {
    app.innerHTML = `
    <div id="errorPage">
        <h1>:(</h1>
        <p>Your game ran into a problem and needs to restart as soon as we're finished collecting some error info.</p>
        <button class="back-button" id="backButton">Go Back</button>
    </div>
    `;
    document.getElementById('backButton').addEventListener('click', () => {
        navigate('login');
    });
    document.getElementById('errorPage').style.backgroundColor = '#0078D7';
}