'use client';

import { Dropdown, DropdownItem } from '../atoms/actions/Dropdown';
import { useState } from 'react';
import { Button } from '../atoms/actions/Button';
import { useTheme } from '@/providers/ThemeProvider';

function Icon() {
  return (
    <svg
      width="12px"
      height="12px"
      className="h-2 w-2 fill-current opacity-60 inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
    >
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  );
}

export function ThemeController({ themes }: Readonly<{ themes: string[] }>) {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Dropdown
      open={open}
      trigger={
        <Button onClick={handleOpen}>
          <Icon />
          THEME
        </Button>
      }
      childrenPosition="end"
    >
      {themes.map((item, index) => (
        <DropdownItem
          key={index}
          label={item}
          onClick={() => {
            setTheme(item);
            setOpen(false);
          }}
        />
      ))}
    </Dropdown>
  );
}
