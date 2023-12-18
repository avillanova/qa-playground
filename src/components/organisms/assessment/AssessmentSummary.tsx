'use client';
import { Box } from '@/components/atoms/Box';
import { Button } from '@/components/atoms/actions/Button';
import { useAssessmentContext } from '@/context/AssessmentContext';
import Markdown from 'react-markdown';

export function AssessmentSummary() {
  const { assessment, setIsStarted } = useAssessmentContext();

  return (
    <Box className="flex items-center justify-items">
      <article
        className={`p-4 m-6 flex-1 overflow-y-auto self-start prose prose-img:mx-auto`}
      >
        <h2 className="card-title">{assessment?.title}</h2>
        <Markdown>{assessment?.description}</Markdown>
      </article>
      <div className="p-4 bottom-0 flex-3">
        <Button
          className="flex-none p-4"
          onClick={() => setIsStarted && setIsStarted(true)}
        >
          Start
        </Button>
      </div>
    </Box>
  );
}
