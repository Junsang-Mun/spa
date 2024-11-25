const locales = {};

/**
 * Load a locale JSON file dynamically and cache it.
 * @param {string} locale - The locale code (e.g., 'en-US', 'ko-KR').
 */
export async function loadLocale(locale) {
    if (locales[locale]) return locales[locale]; // Return cached locale if already loaded

    try {
        const translations = await fetch(`/locale/${locale}.json`).then(res => res.json());
        locales[locale] = translations; // Cache the translations
        return translations;
    } catch (error) {
        console.error(`Failed to load locale: ${locale}`, error);
        return {}; // Return empty object on failure
    }
}

/**
 * Retrieve a translation by key with a fallback.
 * @param {string} key - The key to look up in the locale file.
 * @param {string} fallback - The fallback text if the key doesn't exist.
 * @param {string} locale - The current locale.
 * @returns {string} - The localized string or fallback.
 */
export function t(key, fallback, locale) {
    return locales[locale]?.[key] || fallback;
}
