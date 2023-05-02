"use client";

import { Writing as IWriting } from "contentlayer/generated";
import { useState } from "react";

export default function useAutocomplete() {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<IWriting[]>([]);

  return { query, setQuery, results, setResults, open, setOpen };
}
