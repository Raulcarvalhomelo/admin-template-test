interface darkmodeProps {
  darkMode?: boolean
  darkButton?: boolean
  darkonlypage?: boolean
}
export function DarkMode({ darkMode }: darkmodeProps) {
  return darkMode ? "dark dark:bg-gray-800 dark:text-white  dark:border-black": '' 
}

export function DarkButton({ darkButton }: darkmodeProps) {
  return darkButton ? "dark dark:bg-gray-500 dark:text-white dark:border-black ": ''
}
export function DarkOnlyPage({ darkonlypage }: darkmodeProps) {
  return darkonlypage ? "dark dark:bg-gray-700 dark:text-white dark:border-black": ''
}

