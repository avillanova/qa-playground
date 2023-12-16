import Markdown from 'react-markdown';
import { Box } from '../atoms/Box';

interface RecordDetailsProps {
  title: string;
  details: string;
  image?: string;
  className?: string;
}

export function RecordDetails(props: RecordDetailsProps) {
  return (
    <>
      <article className={`${props.className} prose prose-img:mx-auto`}>
        <h2 className="card-title">{props.title}</h2>
        <Markdown>{props.details}</Markdown>
      </article>
    </>
  );
}
