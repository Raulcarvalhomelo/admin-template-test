"use client";

import { useDarkContext } from "../contexts/darktheme";

export default function  Dashboard() {
  const { theme } = useDarkContext()

  return (
      <main className={`${theme} flex min-h-screen dark:border-b-2 dark:border-t-gray-700 `}>
        <h1>dashboard</h1>
      </main>
  )
}
