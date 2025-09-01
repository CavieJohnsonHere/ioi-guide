import useContent from "@/hooks/useContent";
import Markdown from "react-markdown";
import { useLocation } from "react-router";
import Game from "./Game";
import rehypeRaw from "rehype-raw";
import L from "@/localization/L";
import Problem from "./Problem";
import Note from "./Note";

export default function Content() {
  const location = useLocation().pathname.split("/").pop();
  const { content, isLoading, error } = useContent(location!);

  // The components that you can use in the markdown directly
  const components = {
    game: Game,
    problem: Problem,
    blockquote: Note,
  };

  return (
    <article className="w-175 mx-auto">
      <div className="py-10 pb-25">
        {isLoading && (
          <div className="mx-auto bg-pink-900/20 py-10 rounded-3xl animate-fade-in relative">
            <div className="bg-pink-800 text-emerald-50 p-5 rounded-2xl animate-move w-fit absolute top-1/2 -translate-1/2">
              <L>info-loading</L>
            </div>
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
          // This library's types defs are kinda ass...
          // @ts-ignore
          <Markdown components={components} rehypePlugins={[rehypeRaw]}>
            {content}
          </Markdown>
        )}
      </div>
    </article>
  );
}
