import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: "Welcome to Danama" } },
    fr: { translation: { welcome: "Bienvenue à Danama" } },
    es: { translation: { welcome: "Bienvenido a Danama" } },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: { escapeValue: false },
});

export default i18n;