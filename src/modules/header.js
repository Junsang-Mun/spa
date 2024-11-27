export function renderHeader(header) {
    header.innerHTML = `
        <header class="header">
            <h1>PONG</h1>
            <button class="dropbtn" id="dropbtn">Language</button>
            <div class="dropdown-content" id="dropdowncontent">
                <button id="en-US">English</button>
                <button id="ja-JP">日本語</button>
                <button id="ko-KR">한국어</button>
            </div> <!-- .dropdown-content -->
        </header>
    `;

    document.getElementById('dropbtn').addEventListener('click', () => {
        if (document.getElementById('dropdowncontent').style.display === 'block') {
            document.getElementById('dropdowncontent').style.display = 'none';
            return;
        } else {
            document.getElementById('dropdowncontent').style.display = 'block';
        }
    });
}
