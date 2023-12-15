import Markdown from 'react-markdown';
interface QuestionProps {
  id: string;
  question: {
    title: string;
    description: string;
    options: string[];
    answer: string;
  };
  visible: boolean;
  className?: string;
  onSelect: (question: string, answer: string) => void;
}

export function Question(props: QuestionProps) {
  const handleOptionChange = (event: any) => {
    props.onSelect(props.id, event.target.value);
  };

  return (
    <div className={`${props.className} ${props.visible ? '' : 'hidden'}`}>
      <div className="m-4">
        <article className="prose prose-img:mx-auto">
          <h2 className="card-title">{props.question.title}</h2>
          <Markdown>{props.question.description}</Markdown>
        </article>
        {props.question.options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={index.toString()}
              name={props.question.title}
              value={option}
              onChange={handleOptionChange}
              className="radio"
            />
            <label className="p-2">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
