'use client';
import { usePathname } from 'next/navigation';
import { Link } from '../atoms/actions/Link';

interface BreadcrumbItemProps {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function BreadcrumbItem({ href, icon, children }: BreadcrumbItemProps) {
  return (
    <li>
      <Link href={href}>
        {icon}
        {children}
      </Link>
    </li>
  );
}

export function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className="text-sm breadcrumbs p-6">
      <ul>
        {pathNames.map((link, index) => {
          if (index === pathNames.length - 1) {
            return <li key={index}>{link}</li>;
          } else {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`;
            return (
              <li key={index}>
                <Link href={href}>{link}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
