"use client";

import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Writing as IWriting, allWritings } from "contentlayer/generated";
import { usePathname } from "next/navigation";
import {
  Fragment,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

function useAutocomplete() {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<IWriting[]>([]);

  return { query, setQuery, results, setResults, open, setOpen };
}

function SearchIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
      />
    </svg>
  );
}

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

function SearchResult({
  result,
  resultIndex,
}: {
  result: IWriting;
  resultIndex: number;
}) {
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

function SearchResults({
  query,
  items,
}: {
  query?: string;
  items?: IWriting[];
}) {
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
            &apos;{query}&apos;
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

const SearchInput = forwardRef(function SearchInput(
  { isOpen, query, onClose, onKeyDown }: any,
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
          } else {
            onKeyDown(event);
          }
        }}
      />
    </div>
  );
});

function SearchDialog({
  open,
  setOpen,
  className,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
}) {
  const pathname = usePathname();
  let formRef = useRef<any>();
  let panelRef = useRef<any>();
  let inputRef = useRef<any>();
  let { setQuery, query } = useAutocomplete();

  useEffect(() => {
    if (!open) {
      return;
    }

    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      return;
    }

    function onKeyDown(event: any) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  console.log("query: ", query);

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery("")}>
      <Dialog
        onClose={setOpen}
        className={clsx("fixed inset-0 z-50", className)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-400/25 backdrop-blur-sm dark:bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="ring-zinc-900/7.5 mx-auto overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 dark:bg-zinc-900 dark:ring-zinc-800 sm:max-w-xl">
              <div>
                <form ref={formRef}>
                  <SearchInput
                    ref={inputRef}
                    isOpen={open}
                    query={query}
                    onClose={() => setOpen(false)}
                    onKeyDown={(event: any) => setQuery(event.target.value)}
                  />
                  <div
                    ref={panelRef}
                    className="dark:bg-white/2.5 border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5"
                  >
                    {open && query?.length > 0 && (
                      <SearchResults query={query} items={allWritings} />
                    )}
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function useSearchProps() {
  let buttonRef = useRef<any>();
  let [open, setOpen] = useState<boolean>(false);

  return {
    buttonProps: {
      ref: buttonRef,
      onClick() {
        setOpen(true);
      },
    },
    dialogProps: {
      open,
      setOpen(open: boolean) {
        let { width, height } = buttonRef?.current?.getBoundingClientRect();
        if (!open || (width !== 0 && height !== 0)) {
          setOpen(open);
        }
      },
    },
  };
}

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
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none"
        {...buttonProps}
      >
        <SearchIcon className="h-5 w-5 stroke-current" />
        Find something...
        <kbd className="text-2xs ml-auto text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">{modifierKey}</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      <SearchDialog className="hidden lg:block" {...dialogProps} />
    </div>
  );
}

export function MobileSearch() {
  let { buttonProps, dialogProps } = useSearchProps();

  return (
    <div className="contents lg:hidden">
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&:not(:focus-visible)]:outline-none"
        aria-label="Find something..."
        {...buttonProps}
      >
        <SearchIcon className="h-5 w-5 stroke-zinc-900 dark:stroke-white" />
      </button>
      <SearchDialog className="lg:hidden" {...dialogProps} />
    </div>
  );
}
