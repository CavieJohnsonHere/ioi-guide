import { useEffect, useState } from "react";
import useContent from "@/hooks/useContent";
import Markdown from "react-markdown";
import { useLocation } from "react-router";

export default function Content() {
  const location = useLocation().pathname.split("/").pop();
  const { content, isLoading, error } = useContent(location!);

  return (
    <div className="py-10">
      {isLoading && (
        <div
          className="bg-emerald-200 text-emerald-800 p-10 rounded-2xl w-fit mx-auto shadow-emerald-500/50 animate-fade-in"
          style={{ boxShadow: `0 0 2rem 0 var(--tw-shadow-color)` }}
        >
          Loading...
        </div>
      )}

      {error as boolean && (
        <div className="bg-red-200 text-red-800 p-10 rounded-2xl w-fit mx-auto shadow-red-500/50" style={{ boxShadow: `0 0 2rem 0 var(--tw-shadow-color)` }}>
          {String(error)}
        </div>
      )}

      {content && <Markdown>{content}</Markdown>}
    </div>
  );
}
