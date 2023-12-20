
import Link from 'next/link';
import Navlinks from '@/app/ui/dashboard/nav-links';
import { DarkMode } from '@/app/ui/darkmode';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';


export default function SideNav() {
  return (
     <div className={` flex h-full flex-col px-3 py-4 md:px-2 ${DarkMode}`}>
      <Link
        className={`mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40 ${DarkMode}`}
        href="/"
      >
        <div className={`w-32 text-white md:w-40 ${DarkMode}`}>
        </div>
      </Link>
      <div className={`flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 ${DarkMode}`}>
        {/* <Navlinks /> */}
        <Navlinks name="Usuários" href="/dashboard/users" icon='UserIcon' >users</Navlinks>
        <Navlinks name="Grupos" href="/dashboard/groups" icon='UserGroupIcon'>Groups</Navlinks>
        <Navlinks name="Configurações" href="/dashboard/settings" icon='WrenchIcon' >Setting</Navlinks>
        <div className={`hidden h-auto w-full grow rounded-md bg-gray-50 md:block ${DarkMode}`}></div>
        <form>
          <button className={`flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md dark:bg-gray-800 dark:hover:text-gray-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}>
            <ArrowRightEndOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Sair</div>
          </button>
        </form>
      </div>
    </div>
  );
}
