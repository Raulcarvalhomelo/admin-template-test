"use client";
import SideNav from '@/app/ui/dashboard/sidenav';
import Navbar from '../ui/dashboard/navbar';
import { useDarkContext } from '../contexts/darktheme';
import { DarkOnlyPage } from '../components/darkmode';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useDarkContext();
  return (
    <div>
      <div className= {` ${theme} flex h-screen flex-col md:flex-row md:overflow-hidden dark:border-2 `}>
          <div className="w-full flex-none md:w-64 ">
            <SideNav/>
          </div>
          <div className={` ${theme} flex-grow pl-0 ml-0 md:overflow-y-auto md:p-4 ${DarkOnlyPage} dark:border-x-2 dark:border-x-gray-700`}>
            <Navbar />
            <div >{children}</div>
          </div>
      </div>
    </div>
  );
}