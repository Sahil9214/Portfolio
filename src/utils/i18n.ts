import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en } from "./json/en";
import { hindi } from "./json/hindi";
import { de } from "./json/de";
import { fr } from "./json/fr";
import { zh } from "./json/zh";
import { ko } from "./json/ko";
import { ja } from "./json/ja";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hindi,
      },
      de: {
        translation: de,
      },
      fr: {
        translation: fr,
      },
      zh: {
        translation: zh,
      },
      ko: {
        translation: ko,
      },
      ja: {
        translation: ja,
      },
    },
    fallbackLng: "en",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
