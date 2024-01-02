'use client';

interface DropdownItemProps {
  label: string;
  onClick?: () => void;
  [key: string]: any;
}
export function DropdownItem(dropdownItemProps: Readonly<DropdownItemProps>) {
  return (
    <li>
      <button
        onClick={dropdownItemProps.onClick}
        onKeyDown={dropdownItemProps.onClick}
        {...dropdownItemProps.props}
      >
        {dropdownItemProps.label}
      </button>
    </li>
  );
}

interface DropdownProps {
  open: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode[];
  childrenPosition?: string;
}

export function Dropdown({
  open,
  trigger,
  children,
  childrenPosition
}: Readonly<DropdownProps>) {
  return (
    <div className={`dropdown dropdown-${childrenPosition}`}>
      {trigger}
      {open && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
        >
          {children}
        </ul>
      )}
    </div>
  );
}
