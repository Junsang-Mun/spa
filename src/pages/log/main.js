import { t } from '/src/modules/locale/localeManager.js';

export function render(app, navigate) {
	app.innerHTML = `
		<div class="grid">
			<div class="grid-item-left" id="online-2p">${t('result-t', 'tournament match log')}</div>
			<div class="grid-item-right" id="online-4p">${t('result-d', 'dual match log')}</div>
			<div class="grid-item-left" id="offline-2p">${t('result-rps', 'RSP match log')}</div>
		</div>
	`;
}
