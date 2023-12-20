import Link from "next/link";

interface NavlinksProps {
  name: string;
  href: string;
  children: React.ReactNode
}
export default function Navlinks({ name, href, children }: NavlinksProps) {
  return (
    <>
      <Link
        href={href}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="flex-1 ml-3 whitespace-nowrap">{children}</span>
      </Link>
    </>
  );
}