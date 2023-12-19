export function OptionResult({
  option,
  correctAnswers,
  answers
}: {
  option: string;
  correctAnswers: string[];
  answers: string[];
}) {
  return (
    <>
      <div
        className={`m-1 flex items-center ${
          correctAnswers.includes(option)
            ? 'bg-success/50'
            : answers?.includes(option)
              ? 'bg-error/50'
              : 'bg-base-300'
        }`}
      >
        <input
          type="checkbox"
          value={option}
          checked={answers?.includes(option)}
          className="checkbox"
          disabled
        />
        <label className="p-1">{option}</label>
      </div>
    </>
  );
}
