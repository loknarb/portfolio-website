import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nextI18nextConfig from '../next-i18next.config';

import enCommon from '../public/locales/en/common.json';
import deCommon from '../public/locales/de/common.json';

// Initialize i18next once. This ensures react-i18next's useTranslation finds an instance.
if (!i18n?.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { common: enCommon },
      de: { common: deCommon },
    },
    fallbackLng: nextI18nextConfig.i18n.defaultLocale || 'en',
    supportedLngs: nextI18nextConfig.i18n.locales || ['en'],
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
