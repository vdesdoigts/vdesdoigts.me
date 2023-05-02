"use client";

import clsx from "clsx";
import { forwardRef } from "react";
import SearchIcon from "./SearchIcon";

const SearchInput = forwardRef(function SearchInput(
  { isOpen, query, onClose, onChange }: any,
  inputRef: any
) {
  return (
    <div className="group relative flex h-12">
      <SearchIcon className="pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500" />
      <input
        ref={inputRef}
        className={clsx(
          "flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none dark:text-white sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden",
          "pr-4"
        )}
        onKeyDown={(event) => {
          if (event.key === "Escape" && !isOpen && query === "") {
            // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
            // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
            // @ts-ignore
            document.activeElement?.blur();

            onClose();
          }
        }}
        onChange={onChange}
      />
    </div>
  );
});

export default SearchInput;
