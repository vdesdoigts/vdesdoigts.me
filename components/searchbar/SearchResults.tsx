"use client";

import clsx from "clsx";
import { Writing as IWriting } from "contentlayer/generated";
import { useId } from "react";

function NoResultsIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
      />
    </svg>
  );
}

interface SearchResultProps {
  result: IWriting;
  resultIndex: number;
}

function SearchResult({ result, resultIndex }: SearchResultProps) {
  let id = useId();

  return (
    <li
      className={clsx(
        "group block cursor-default px-4 py-3 aria-selected:bg-zinc-50 dark:aria-selected:bg-zinc-800/50",
        resultIndex > 0 && "border-t border-zinc-100 dark:border-zinc-800"
      )}
      aria-labelledby={`${id}-title`}
    >
      {result.title}
    </li>
  );
}

interface SearchResultsProps {
  query?: string;
  items?: IWriting[];
}

export default function SearchResults({ query, items }: SearchResultsProps) {
  const results = items?.filter((item) => {
    return item.title.includes(query || "");
  });

  if (results?.length === 0) {
    return (
      <div className="p-6 text-center">
        <NoResultsIcon className="mx-auto h-5 w-5 stroke-zinc-900 dark:stroke-zinc-600" />
        <p className="mt-2 text-xs text-zinc-700 dark:text-zinc-400">
          Nothing found for{" "}
          <strong className="break-words font-semibold text-zinc-900 dark:text-white">
            &lsquo;{query}&rsquo;
          </strong>
          . Please try again.
        </p>
      </div>
    );
  }

  return (
    <ul role="list">
      {results?.map((result, resultIndex) => (
        <SearchResult
          key={result.slug}
          result={result}
          resultIndex={resultIndex}
        />
      ))}
    </ul>
  );
}
