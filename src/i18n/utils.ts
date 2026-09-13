import { defaultLang, ui, type Lang, type TranslationKey } from './ui';

export function getText(lang: Lang) {
  return (key: TranslationKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function localePath(lang: Lang, page: '' | 'guide/' | 'privacy/' | 'support/' = '') {
  return `${import.meta.env.BASE_URL}${lang}/${page}`;
}

export function alternateLocalePath(pathname: string, language: Lang) {
  const localeSegment = /\/(en|zh)(\/|$)/;
  return localeSegment.test(pathname)
    ? pathname.replace(localeSegment, `/${language}$2`)
    : `${import.meta.env.BASE_URL}${language}/`;
}
