"use client";

import { useRef, useState } from "react";

export default function useSearchProps() {
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
