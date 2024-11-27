import { t } from '/src/locale/localeManager.js';

export function render(app, navigate, locale = 'ja-JP') {
	app.innerHTML = `
		<div class="grid">
			<div class="grid-item-left" id="online-2p">${t('t-match', 'tournament match log', locale)}</div>
			<div class="grid-item-right" id="online-4p">${t('d-match', 'dual match log', locale)}</div>
			<div class="grid-item-left" id="offline-2p">${t('rcp-match', 'RCP match log', locale)}</div>
		</div>
	`;

}
