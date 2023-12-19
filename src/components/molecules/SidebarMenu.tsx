interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  collapsed?: boolean;
  children?: React.ReactNode;
}
export function MenuItem({
  label,
  icon,
  href,
  collapsed,
  children
}: MenuItemProps) {
  return (
    <>
      {!collapsed ? (
        <li>
          {!children ? (
            <a href={href}>
              {icon} {label}
            </a>
          ) : (
            <details open>
              <summary>
                {icon} {label}
              </summary>
              <ul>{children}</ul>
            </details>
          )}
        </li>
      ) : (
        <li>
          {!children ? (
            <a href={href} className="tooltip tooltip-right" data-tip={label}>
              {icon}
            </a>
          ) : (
            <details>
              <summary className="tooltip tooltip-right" data-tip={label}>
                {icon}
              </summary>
              <ul>{children}</ul>
            </details>
          )}
        </li>
      )}
    </>
  );
}

interface SidebarMenuProps {
  children: React.ReactNode;
}
export function SidebarMenu({ children }: SidebarMenuProps) {
  return <ul className="menu bg-base-100  min-h-full shadow-lg">{children}</ul>;
}
