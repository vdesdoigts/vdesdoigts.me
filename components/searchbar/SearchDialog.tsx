import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { allWritings } from "contentlayer/generated";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import useAutocomplete from "./useAutocomplete";

interface SearchDialogProps {
  className?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SearchDialog({
  className,
  open,
  setOpen,
}: SearchDialogProps) {
  const pathname = usePathname();
  const formRef = useRef<any>();
  const panelRef = useRef<any>();
  const inputRef = useRef<any>();
  let { query, setQuery } = useAutocomplete();
  console.log("query: ", query);

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
                    onChange={(event: any) => setQuery(event.target.value)}
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
