import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

// Import your translations (create translation files for different languages)
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";  // Assuming you have Arabic as your RTL language

i18n
  .use(languageDetector) // Automatically detect language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // English translations
      },
      ar: {
        translation: arTranslation, // Arabic translations
      },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Set to false to avoid suspense issues
    },
  });

export default i18n;
