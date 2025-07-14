'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, LocaleData, getLocaleData, defaultLocale } from '@/locales';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: LocaleData;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [t, setT] = useState<LocaleData>(getLocaleData(defaultLocale));

  useEffect(() => {
    // Detectar idioma del navegador
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'es';
    const savedLocale = (localStorage.getItem('locale') as Locale) || browserLang;
    setLocaleState(savedLocale);
    setT(getLocaleData(savedLocale));
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setT(getLocaleData(newLocale));
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
  
}
