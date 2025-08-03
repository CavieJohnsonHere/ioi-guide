import useContent from "@/hooks/useContent";
import Markdown from "react-markdown";
import { useLocation } from "react-router";
import Game from "./Game";
import rehypeRaw from "rehype-raw";

export default function Content() {
  const location = useLocation().pathname.split("/").pop();
  const { content, isLoading, error } = useContent(location!);

  const components = {
    game: Game,
  };

  return (
    <article className="w-175 mx-auto">
      <div className="py-10">
        {isLoading && (
          <div
            className="bg-emerald-200/20 text-emerald-50 p-5 rounded-2xl w-fit mx-auto shadow-emerald-500/5 animate-fade-in"
            style={{ boxShadow: `0 0 2rem 0 var(--tw-shadow-color)` }}
          >
            Loading...
          </div>
        )}

        {(error as boolean) && (
          <div
            className="bg-red-200/20 text-red-50 p-5 rounded-2xl w-fit mx-auto shadow-red-500/5"
            style={{ boxShadow: `0 0 2rem 0 var(--tw-shadow-color)` }}
          >
            {String(error)}
          </div>
        )}
        {content && (
          //@ts-ignore
          <Markdown components={components} rehypePlugins={[rehypeRaw]}>
            {content}
          </Markdown>
        )}
      </div>
    </article>
  );
}
