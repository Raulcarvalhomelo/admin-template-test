"use client";

import { DarkOnlyPage } from "@/app/components/darkmode";
import { useDarkContext } from "@/app/contexts/darktheme";
export default function Navbar () {
  const { setTheme } = useDarkContext();
  return (
    <div className={'flex items-center justify-end mb-2 dark:border-b-2 dark:border-b-gray-700 '}>
      <button onClick={setTheme}>Tema</button>
    </div>
  );
};