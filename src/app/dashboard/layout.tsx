import SideNav from '@/app/ui/dashboard/sidenav';
import { DarkMode } from '@/app/ui/darkmode';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className= {` flex h-screen flex-col md:flex-row md:overflow-hidden dark:border-2  ${DarkMode}`}>
        <div className="w-full flex-none md:w-64 ">
          <SideNav/>
        </div>
        <div className={`flex-grow pl-0 ml-0 md:overflow-y-auto md:p-4  ${DarkMode} dark:border-x-2 dark:border-x-gray-700`}>
          <div className='flex items-center justify-end mb-2 dark:border-b-2 dark:border-b-gray-700'>menu</div>
          <div >{children}</div>
        </div>
      </div>
  );
}