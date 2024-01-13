import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  buttonType?:
    | 'NEUTRAL'
    | 'PRIMARY'
    | 'SECONDARY'
    | 'ACCENT'
    | 'GHOST'
    | 'LINK';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

function Button(props: Readonly<ButtonProps>) {
  enum ButtonColor {
    NEUTRAL = 'btn-neutral',
    PRIMARY = 'btn-primary',
    SECONDARY = 'btn-secondary',
    ACCENT = 'btn-accent',
    GHOST = 'btn-ghost',
    LINK = 'btn-link'
  }
  const buttonType = props.buttonType ?? ButtonColor.PRIMARY;

  return (
    <button
      className={`btn ${buttonType} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
export { Button };
