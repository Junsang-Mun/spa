export function render(app, navigate) {
	/* 이 문구는 내 취향이 아니야 */
	//TODO: 문구 직관적으로 바꾸기
	app.innerHTML = `
		  <div class="grid">
			<div class="grid-item-left" id="online-2p">온라인에서 2명이서 싸우기</div>
			<div class="grid-item-right" id="online-4p">온라인에서 4명이서 싸우기</div>
			<div class="grid-item-left" id="offline-2p">오프라인으로 맞짱까기</div>
			<div class="grid-item-right" id="offline-ai">AI를 부수기</div>
			<div class="grid-item-left" id="offline-2p">스코어보드</div>
			<div class="grid-item-right" id="offline-ai">토탈리낫어게임</div>
		  </div>
	  `;
  
	document.getElementById('online-2p').addEventListener('click', () => navigate('game/online/2p'));
	document.getElementById('online-4p').addEventListener('click', () => navigate('game/online/4p'));
	document.getElementById('offline-2p').addEventListener('click', () => navigate('game/offline/2p'));
	document.getElementById('offline-ai').addEventListener('click', () => navigate('game/offline/ai'));
}
