export function renderHeader(header) {
    header.innerHTML = `
        <header class="header">
            <h1>PONG</h1>
            <div class="dropbtn" id="dropbtn">Language</div>
            <div class="dropdown-content" id="dropdowncontent">
                <a href="#" id="en-US">English</a>
                <a href="#" id="ja-JP">日本語</a>
                <a href="#" id="ko-KR">한국어</a>
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
