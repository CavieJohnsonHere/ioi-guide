import useLanguage from "@/hooks/useLanguage";
import { localization } from "./local";

export default function L({ children }: { children: string }) {
  const language = useLanguage()[0];

  return <>{localization[language].local.get(children)}</>;
}
