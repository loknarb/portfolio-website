import { useRouter } from 'next/router';

export const useLocaleString = () => {
  const { locale } = useRouter();
  const changeToCountryString = locale === 'en' ? 'de' : 'en';
  return { changeToCountryString, locale };
};
