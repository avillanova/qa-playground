'use client';

import { uploadImage } from '@/services/ImageService';

interface MarkdownEditorProps {
  markdown: string;
  name: string;
  setMarkdown: (markdown: string) => void;
  className?: string;
  onChange: (e: any) => void;
}

export function MarkdownEditor({
  markdown,
  name,
  setMarkdown,
  className,
  onChange
}: MarkdownEditorProps) {
  async function handlePaste(e: any) {
    e.preventDefault();
    const item = e.clipboardData.items[0];

    if (item.type.includes('image')) {
      console.log(item.getAsFile());
      const file = item.getAsFile();
      const blob = await uploadImage(file);
      document.execCommand('insertText', false, `![Image](${blob.url})`);
    }
    if (item.type.includes('text')) {
      const text = e.clipboardData.getData('text/plain');
      console.log(text);
      document.execCommand('insertText', false, text);
    }
  }
  function handleChange(e: any) {
    setMarkdown(e.target.value);
    onChange(e);
  }

  return (
    <div className={className}>
      <textarea
        onPaste={handlePaste}
        name={name}
        className="w-full h-52 resize-none textarea textarea-bordered"
        onChange={(e) => handleChange(e)}
        value={markdown}
      ></textarea>
    </div>
  );
}
