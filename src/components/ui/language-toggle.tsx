"use client";

import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 text-neutral-300" />
        <span className="text-sm text-neutral-300">{currentLanguage.flag}</span>
        <span className="text-sm text-neutral-300 hidden sm:inline">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50 overflow-hidden max-h-80 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-2 text-left hover:bg-neutral-800 transition-colors flex items-center gap-2 ${
                  i18n.language === lang.code
                    ? "bg-neutral-800 text-green-400"
                    : "text-neutral-300"
                }`}
              >
                <span>{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
                {i18n.language === lang.code && (
                  <span className="ml-auto text-green-400">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
