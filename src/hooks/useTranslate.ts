import { useRouter } from 'next/router';

import en from '@/public/lang/en';
import jp from '@/public/lang/jp';
import vi from '@/public/lang/vi';

const parseLocale = {
  vi,
  en,
  jp,
};

export type LocaleType = keyof typeof parseLocale;

const useTranslate = () => {
  const { locale, push, asPath } = useRouter();

  const translate = locale ? parseLocale[locale as LocaleType] : parseLocale.en;

  const changeLanguage = (type: LocaleType) => {
    push(asPath, asPath, { locale: type, shallow: true });
  };

  return {
    translate,
    changeLanguage,
  };
};

export default useTranslate;
