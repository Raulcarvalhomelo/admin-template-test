"use client";

import { useDarkContext } from "@/app/contexts/darktheme";
import { FcIdea, FcNoIdea } from "react-icons/fc";
export default function Navbar () {
  const { theme,setTheme } = useDarkContext();
  return (
    <div className={'flex items-center justify-end'}>
      <button className='gap-1' onClick={setTheme}>{theme?<FcNoIdea/>:<FcIdea/>}</button>
    </div>
  );
};