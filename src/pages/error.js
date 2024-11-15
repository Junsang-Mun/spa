export function render(app, navigate) {
    app.innerHTML = `
    <div style="background-color: #0078D7; padding: 2rem">
        <h1 style="text-align: left">:(</h1>
        <p style="text-align: left">Your game ran into a problem and needs to restart as soon as we're finished collecting some error info.</p>
        <button class="back-button" id="backButton">Got it, take me to home</button>
    </div>
    `;
    console.log('⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣦⠀\n⠀⠀⠀⠀⣰⣿⡟⢻⣿⡟⢻⣧\n⠀⠀⠀⣰⣿⣿⣇⣸⣿⣇⣸⣿\n⠀⠀⣴⣿⣿⣿⣿⠟⢻⣿⣿⣿\n⣠⣾⣿⣿⣿⣿⣿⣤⣼⣿⣿⠇\n⢿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠀\n⠀⠀⠈⠿⠿⠋⠙⢿⣿⡿⠁⠀');
    document.getElementById('backButton').addEventListener('click', () => {
        navigate('login');
    });
}