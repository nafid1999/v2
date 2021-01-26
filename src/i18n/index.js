import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import us from "./en";
import fr from "./fr";
import es from "./es";
import ar from "./ar";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  us: {
    translation: us,
  },
  fr: {
    translation: fr,
  },
  es: {
    translation: es,
  },
  ar: {
    translation: ar,
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: "us",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;