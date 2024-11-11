export function render(app, navigate) {
    app.innerHTML = `
    <h1>:(</h1>
    <p>Your game ran into a problem and needs to restart as soon as we're finished collecting some error info.</p>
    <button class="back-button" id="backButton">Go Back</button>
    `;
    console.log(`⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣦⠀
⠀⠀⠀⠀⣰⣿⡟⢻⣿⡟⢻⣧
⠀⠀⠀⣰⣿⣿⣇⣸⣿⣇⣸⣿
⠀⠀⣴⣿⣿⣿⣿⠟⢻⣿⣿⣿
⣠⣾⣿⣿⣿⣿⣿⣤⣼⣿⣿⠇
⢿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠀
⠀⠀⠈⠿⠿⠋⠙⢿⣿⡿⠁⠀`);
    document.getElementById('backButton').addEventListener('click', () => {
        navigate('login');
    });
}