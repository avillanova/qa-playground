import Markdown from 'react-markdown';

interface MarkdownPreviewProps {
  markdown: string;
  className?: string;
}

export function MarkdownPreview({ markdown, className }: MarkdownPreviewProps) {
  return (
    <article
      className={`${className} border rounded prose prose-img:mx-auto overflow-hidden overflow-y-scroll h-52`}
    >
      <Markdown className="m-4" urlTransform={(value: string) => value}>
        {markdown}
      </Markdown>
    </article>
  );
}
