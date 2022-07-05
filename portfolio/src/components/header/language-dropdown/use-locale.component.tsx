import { useState } from "react";

export const useLocale = (): [string, (locale: string) => void] => {
  const getCurrentLang = window.localStorage.getItem("language") || "en-US";

  const [locale, setLocale] = useState(getCurrentLang);

  const setLocaleStorage = (language: string) => {
    window.localStorage.setItem("language", language);
    setLocale(language);
  };

  return [getCurrentLang, setLocaleStorage];
};
