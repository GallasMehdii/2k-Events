import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: {
      // Existing translations
      "About": "About",
      "Services": "Services",
      "Portfolio": "Portfolio",
      "Contact Us": "Contact Us",
      "Creating Your Perfect": "Creating Your Perfect",
      "Event Day": "Event Day",
      "Transform your dream wedding into reality with our expert planning services. We handle every detail with precision and care, ensuring your special day is exactly as you've always imagined.": "Transform your dream wedding into reality with our expert planning services. We handle every detail with precision and care, ensuring your special day is exactly as you've always imagined.",
      "Schedule Consultation": "Schedule Consultation",
      "Venue Selection": "Venue Selection",
      "Happy Couples": "Happy Couples",
      "Expert Planners": "Expert Planners",
      "Years Experience": "Years Experience",
      
      // Add these missing translations
      "Elegant Ceremonies": "Elegant Ceremonies",
      "Perfect Venues": "Perfect Venues",
      "Beautiful Decorations": "Beautiful Decorations",
      "Memorable Moments": "Memorable Moments",
      "Previous image": "Previous image",
      "Next image": "Next image",
      "Go to image {{number}}": "Go to image {{number}}"
    }
  },
  fr: {
    translation: {
      // Existing translations
      "About": "À propos",
      "Services": "Services",
      "Portfolio": "Portfolio",
      "Contact Us": "Contactez-nous",
      "Creating Your Perfect": "Créer votre parfait",
      "Event Day": "Jour de l'événement",
      "Transform your dream wedding into reality with our expert planning services. We handle every detail with precision and care, ensuring your special day is exactly as you've always imagined.": "Transformez votre mariage de rêve en réalité avec nos services de planification experts. Nous gérons chaque détail avec précision et soin, garantissant que votre journée spéciale soit exactement comme vous l'avez imaginée.",
      "Schedule Consultation": "Planifier une consultation",
      "Venue Selection": "Sélection du lieu",
      "Happy Couples": "Couples heureux",
      "Expert Planners": "Planificateurs experts",
      "Years Experience": "Années d'expérience",
      
      // Add these missing translations
      "Elegant Ceremonies": "Cérémonies Élégantes",
      "Perfect Venues": "Lieux Parfaits",
      "Beautiful Decorations": "Belles Décorations",
      "Memorable Moments": "Moments Mémorables",
      "Previous image": "Image précédente",
      "Next image": "Image suivante",
      "Go to image {{number}}": "Image {{number}}"
    }
  }
};

i18n
  .use(LanguageDetector)  // Add this line
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {  // Add these detection options
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    debug: true // Add this to see detailed logs

  });

export default i18n;