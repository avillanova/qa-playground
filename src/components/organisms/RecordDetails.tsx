import { Box } from '../atoms/Box';

interface RecordDetailsProps {
  title: string;
  details: { key: string; value: string }[];
  image?: string;
  className?: string;
}

export function RecordDetails(props: RecordDetailsProps) {
  return (
    <>
      <article className={`${props.className} prose`}>
        <h2>{props.title}</h2>
        {props.details.map((detail) => (
          <div key={detail.key}>
            <strong> {detail.key}:</strong> {detail.value}
            <br />
          </div>
        ))}
      </article>
      <p />
    </>
  );
}
