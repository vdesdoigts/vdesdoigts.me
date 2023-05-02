"use client";

import { useEffect, useState } from "react";
import SearchDialog from "./SearchDialog";
import SearchIcon from "./SearchIcon";
import useSearchProps from "./useSearchProps";

export function Search() {
  let [modifierKey, setModifierKey] = useState();
  let { buttonProps, dialogProps } = useSearchProps();

  useEffect(() => {
    setModifierKey(
      // @ts-ignore
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl "
    );
  }, []);

  return (
    <>
      <button
        type="button"
        className="text-md hidden h-12 w-full items-center gap-2 rounded-full bg-primary-100/10 pl-3 pr-6 font-light text-primary-500 lg:flex focus:[&:not(:focus-visible)]:outline-none"
        {...buttonProps}
      >
        <SearchIcon className="h-6 w-6 stroke-current" />
        Search in wrtiting
        <kbd className="text-2xs ml-auto text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">{modifierKey}</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      <SearchDialog className="hidden lg:block" {...dialogProps} />
    </>
  );
}

export function MobileSearch() {
  let { buttonProps, dialogProps } = useSearchProps();

  return (
    <div className="contents lg:hidden">
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&:not(:focus-visible)]:outline-none"
        aria-label="Search in wrtiting"
        {...buttonProps}
      >
        <SearchIcon className="h-5 w-5 stroke-zinc-900 dark:stroke-white" />
      </button>
      <SearchDialog className="lg:hidden" {...dialogProps} />
    </div>
  );
}
