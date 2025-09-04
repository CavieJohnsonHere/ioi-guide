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
          <div className="flex justify-center">
            <svg width={200} height={200} viewBox="0 0 200 200">
              <rect
                className="loading-spinner"
                x={50}
                y={50}
                width={100}
                height={100}
                fill="transparent"
              />
            </svg>
          </div>
        )}

        {(error as boolean) && (
          // <div
          //   className="bg-red-200/20 text-red-50 p-5 rounded-2xl w-fit mx-auto shadow-red-500/5"
          //   style={{ boxShadow: `0 0 2rem 0 var(--tw-shadow-color)` }}
          // >
          //   {String(error)}
          // </div>

          <div className="flex justify-center">
            <svg width={100} height={200} viewBox="0 0 100 200">
              <path
                d="
              M 50 50
              L 50 125
              "
                className="error-glyph-line transition"
              />

              <circle
                cx={50}
                cy={150}
                className="error-glyph-dot transition"
                fill="var(--color-red-400)"
              />
            </svg>
            <div className="text-red-300 text-2xl flex items-center">
              {String(error)}
            </div>
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
