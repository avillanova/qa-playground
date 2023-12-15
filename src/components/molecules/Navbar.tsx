import Link from 'next/link';
import { ThemeController } from './ThemeController';
import { THEMES } from '@/constants/themesConst';
import { Button } from '../atoms/actions/Button';

function ButtonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block w-5 h-5 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}
export function Navbar({ handleSidebarMenu }: { handleSidebarMenu: any }) {
  return (
    <div className="navbar bg-base-300 ">
      <div className="navbar-start ">
        <div className="flex-none">
          <Button className="btn-square btn-ghost" onClick={handleSidebarMenu}>
            <ButtonIcon />
          </Button>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" href={'/'}>
          QA Playground
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeController themes={THEMES} />
        <div></div>
      </div>
    </div>
  );
}
