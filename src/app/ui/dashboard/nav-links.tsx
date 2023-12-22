"use client";
import Link from "next/link";
import { MdDashboard,MdGroup,MdOutlineSettings  } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import clsx  from 'clsx'  
import { DarkButton } from "@/app/components/darkmode";

interface NavlinksProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

  


export default function Navlinks({ name, href, icon }: NavlinksProps) {
  const pathname = usePathname();
    const Icons=()=>{
    if (icon==='DashboardIcon') {
      return <MdDashboard className="w-6"/>      
    }
    if(icon==='UserGroupIcon'){
      return <MdGroup  className="w-6"/>
    }
    if(icon==='UserIcon'){
      return <FaUserAlt className="w-6"/>
    }
    if(icon==='WrenchIcon'){
      return <MdOutlineSettings className="w-6"/>
    }
  }
  return (
    <Link
    href={href}
    className={clsx(`${DarkButton}`,'flex h-[48px] grow items-center justify-center gap-2 rdark:bg-slate-900 dark:text-cyan-100 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ',
      {
        'bg-sky-100 text-blue-600 dark:bg-sky-600 ': pathname === href
      },
    )}
    >
      {icon ?  Icons(): null }
      <p >{name}</p>
    </Link>
  );
}