import { useQuery, useQueryClient } from 'react-query';
import { useEffect } from 'react';
import { localization } from '@/localization/local';

type Language = keyof typeof localization;

const LOCAL_STORAGE_KEY = 'lang';

export default function useLanguage() {
  const queryClient = useQueryClient();

  // useQuery to get language from localStorage or default to 'en'
  const { data: language = 'en' } = useQuery<Language>(
    'language',
    () => {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return (stored && (stored in localization) ? (stored as Language) : 'en');
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const setLanguage = (newLang: Language) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, newLang);
    queryClient.setQueryData('language', newLang);
  };

  // Update document direction based on language's dir from localization object
  useEffect(() => {
    document.body.dir = localization[language].dir;
  }, [language]);

  return [language, setLanguage] as const;
}
