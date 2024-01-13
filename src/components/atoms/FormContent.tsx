interface FormContentProps {
  title: string;
  children?: React.ReactNode;
}
export function FormContent({ title, children }: FormContentProps) {
  return (
    <>
      <div className="m-4">
        <article className="prose">
          <h3>{title}</h3>
        </article>
        <div className="flex flex-wrap justify-between">{children}</div>
      </div>
    </>
  );
}
