interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  collapsed?: boolean;
  children?: React.ReactNode;
}
export function MenuItem(props: MenuItemProps) {
  return (
    <>
      {!props.collapsed ? (
        <li>
          {!props.children ? (
            <a href={props.href}>
              {props.icon} {props.label}
            </a>
          ) : (
            <details open>
              <summary>
                {props.icon} {props.label}
              </summary>
              <ul>{props.children}</ul>
            </details>
          )}
        </li>
      ) : (
        <li>
          {!props.children ? (
            <a
              href={props.href}
              className="tooltip tooltip-right"
              data-tip={props.label}
            >
              {props.icon}
            </a>
          ) : (
            <details>
              <summary className="tooltip tooltip-right" data-tip={props.label}>
                {props.icon}
              </summary>
              <ul>{props.children}</ul>
            </details>
          )}
        </li>
      )}
    </>
  );
}

interface SidebarMenuProps {
  collapsed?: boolean;
  children: React.ReactNode;
}
export function SidebarMenu(props: SidebarMenuProps) {
  return (
    <ul className="menu bg-base-100 h-screen shadow-lg">{props.children}</ul>
  );
}
