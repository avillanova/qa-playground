export function Box({
  children,
  className
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={`card mx-10 bg-base-200 shadow-xl w-[50vw] h-[35vw] ${className} `}
    >
      {children}
    </div>
  );
}
