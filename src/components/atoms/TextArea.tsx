interface TextAreaProps {
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  label?: string;
}
export function TextArea({
  name,
  placeholder,
  className,
  onChange,
  value,
  label
}: TextAreaProps) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        name={name}
        className={`textarea textarea-bordered m-2 ${className}}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
