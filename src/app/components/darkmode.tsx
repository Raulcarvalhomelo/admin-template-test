interface darkmodeProps {
  darkMode?: string
  darkButton?: boolean
  darkonlypage?: boolean
}
export function DarkMode({ darkMode }: darkmodeProps) {
  return darkMode ? "dark dark:bg-slate-900 dark:text-white  dark:border-black": '' 
}

export function DarkButton({ darkButton }: darkmodeProps) {
  return darkButton ? "dark dark:bg-sky-950 dark:text-white dark:border-black dark:hover:bg-sky-800 ": ''
}
export function DarkOnlyPage({ darkonlypage }: darkmodeProps) {
  return darkonlypage ? "dark dark:bg-sky-950 dark:text-white dark:border-black": ''
}