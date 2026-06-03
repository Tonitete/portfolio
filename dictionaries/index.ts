export type Locale = 'es' | 'en' | 'ca'

export const locales: Locale[] = ['es', 'en', 'ca']
export const defaultLocale: Locale = 'es'

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

const dictionaries = {
  es: () => import('./es.json').then((m) => m.default),
  en: () => import('./en.json').then((m) => m.default),
  ca: () => import('./ca.json').then((m) => m.default),
}

export type Dictionary = typeof import('./es.json')

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}
