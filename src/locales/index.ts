import en from "./en";
import es from "./es";

export const locales = {
  en,
  es,
} as const;

export type Locale = keyof typeof locales;
export type LocaleData = typeof locales['en'];

export const defaultLocale: Locale = 'es';

export function getLocaleData(locale: Locale): LocaleData {
  return locales[locale] || locales[defaultLocale];
}
