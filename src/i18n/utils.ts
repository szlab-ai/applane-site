import { defaultLang, ui, type Lang, type TranslationKey } from './ui';

export function getText(lang: Lang) {
  return (key: TranslationKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function localePath(lang: Lang, page: '' | 'privacy/' | 'support/' = '') {
  return `${import.meta.env.BASE_URL}${lang}/${page}`;
}

export function alternateLocalePath(pathname: string, language: Lang) {
  const localized = pathname.replace(/\/(en|zh)(\/|$)/, `/${language}$2`);
  return localized === pathname ? `${import.meta.env.BASE_URL}${language}/` : localized;
}
