export function Box({
  children,
  className
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={`card m-auto bg-base-200 shadow-xl w-3/4 h-3/4 ${className} `}
    >
      {children}
    </div>
  );
}
