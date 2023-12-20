"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {UserIcon,UserGroupIcon,WrenchIcon} from '@heroicons/react/24/solid'
import clsx  from 'clsx'  
import { DarkButton } from "@/app/ui/darkmode";

interface NavlinksProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

  



export default function Navlinks({ name, href, icon, children }: NavlinksProps) {
  const pathname = usePathname();
    const Icons=()=>{
    if(icon==='UserGroupIcon'){
      return <UserGroupIcon className="w-6"/>
    }
    if(icon==='UserIcon'){
      return <UserIcon className="w-6"/>
    }
    if(icon==='WrenchIcon'){
      return <WrenchIcon className="w-6"/>
    }
  }
  return (
    <Link
    href={href}
    className={clsx(`${DarkButton}`,'flex h-[48px] grow items-center justify-center gap-2 rdark:bg-slate-900 dark:text-cyan-100 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ',
      {
        'bg-sky-100 text-blue-600 dark:bg-gray-900 dark:text-cyan-100': pathname === href
      },
    )}
    >
      {icon ?  Icons(): null }
      <p >{name}</p>
    </Link>
  );
}


// Method 2 - Javascript Code with Array and Map

// const links = [
//   { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
//   {
//     name: 'Groups',
//     href: '/dashboard/groups',icon:UserGroupIcon,
//   },
//   { name: 'Users', href: '/dashboard/users',icon: UserIcon},
//   { name: 'Settings', href: '/dashboard/settings', icon: WrenchIcon  },
// ];


// export default function Navlinks() {
//   return (
//     <>
//    {links.map((link) => {
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
//           >
//             <p >{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }