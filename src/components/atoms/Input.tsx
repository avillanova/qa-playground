interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  min?: string;
  max?: string;
  fieldSize?: string;
  label?: string;
  errorMessage?: string;
  hasError?: boolean;
  required?: boolean;
  ref?: any;
  error?: string[] | string | undefined;
}
export function Input({
  type,
  name,
  placeholder,
  className,
  onChange,
  value,
  min,
  max,
  fieldSize,
  label,
  error
}: InputProps) {
  return (
    <label className={`form-control ${className}`}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-bordered ${fieldSize} ${
          error && 'input-error'
        }`}
        onChange={onChange}
        value={value}
        min={min}
        max={max}
      />
      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      )}
    </label>
  );
}
