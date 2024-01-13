'use client';
import { useState } from 'react';
import { MarkdownEditor } from '../atoms/MarkdownEditor';
import { MarkdownPreview } from '../atoms/MarkdownPreview';

export function MarkdownContainer({
  content,
  name,
  className,
  label,
  onChange,
  error
}: {
  content: string;
  name: string;
  className?: string;
  label: string;
  onChange: (e: any) => void;
  error: string | string[] | undefined;
}) {
  const [markdown, setMarkdown] = useState(content);

  return (
    <label className={`form-control w-full ${className}`}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div className="grid grid-cols-2">
        <MarkdownEditor
          markdown={markdown}
          setMarkdown={setMarkdown}
          name={name}
          className={`w-full h-52 input-bordered ${
            error && 'border border-error'
          }`}
          onChange={onChange}
        />
        <MarkdownPreview markdown={markdown} className="w-full" />
      </div>
      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      )}
    </label>
  );
}
