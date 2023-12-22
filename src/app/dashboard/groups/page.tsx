"use client";
import { DarkOnlyPage } from "@/app/components/darkmode";
import { useDarkContext } from "@/app/contexts/darktheme";

export default function Groups() {
  return (
    <main className={`flex min-h-screen ${DarkOnlyPage}`}>
      <h1>Groups</h1>
    </main>
  )
}
