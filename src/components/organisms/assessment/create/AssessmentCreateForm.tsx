'use client';

import { FormContent } from '@/components/atoms/FormContent';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/actions/Button';
import { MarkdownContainer } from '@/components/molecules/MarkdownContainer';
import { useState } from 'react';
import { z } from 'zod';

const assessmentSchema = z.object({
  source: z.string().min(1, 'Select one source'),
  title: z.string().min(3, 'Title must have at least 3 characters'),
  description: z.string().min(3, 'Description must have at least 3 characters'),
  time: z.number().positive().min(0),
  approvalScore: z.number().positive().min(0),
  questions: z.array(z.string())
});

export function AssessmentCreateForm() {
  const [formData, setFormData] = useState({
    source: '',
    title: '',
    description:
      '**Pré-requisitos:** nenhum  \n' +
      '**Idioma:** Língua Portuguesa (Brasil)  \n' +
      '**Número de questões:** 40  \n' +
      '**Tipo de questões:** múltipla escolha  \n' +
      '**Tempo de Exame:** 60 minutos (75 min. para estrangeiros)  \n' +
      '**Pontuação:** 40 pontos (1 ponto por questão)  \n' +
      '**Aprovação:** mínimo de 65% de acertos ou 26 pontos',
    time: '',
    approvalScore: '',
    message: '',
    questions: []
  });
  const [errors, setErrors] =
    useState<z.inferFlattenedErrors<typeof assessmentSchema>>();
  const [formSuccess, setFormSuccess] = useState(false);

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue =
      e.target.type == 'number' ? e.target.valueAsNumber : e.target.value;
    console.log(e.target.type);
    console.log(fieldValue);
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  };

  const submitForm = (e: any) => {
    // We don't want the page to refresh
    e.preventDefault();
    const data = assessmentSchema.safeParse(formData);

    console.log('data');
    console.log(formData);
    console.log(data);
    if (!data.success) {
      setErrors(data.error.flatten());
    } else {
      console.log('success');
    }

    // Turn our formData state into data we can use with a form submission
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value);
    // });
    // console.log(formData);
    // POST the data to the URL of the form
    //call service
    setFormSuccess(true);
  };

  return (
    <div className="m-6">
      {formSuccess ? (
        <div>Assessement included with success. navigate to assessment</div>
      ) : (
        <form onSubmit={submitForm}>
          <div className="rounded-box bg-base-300 overflow-auto">
            <FormContent title="Assessment Infos">
              <Input
                label="Title*"
                type="text"
                name="title"
                onChange={handleInput}
                className="w-full"
                value={formData.title}
                error={errors?.fieldErrors?.title}
              />
              <label className="form-control max-w-xs w-full">
                <div className="label">
                  <span className="label-text">Source*</span>
                </div>
                <select
                  className={`select select-bordered ${
                    errors?.fieldErrors?.source && 'select-error'
                  }`}
                  defaultValue={'Select'}
                  onChange={handleInput}
                  name="source"
                >
                  <option disabled>Select</option>
                  <option>CTFL</option>
                  <option>AWS</option>
                </select>
                {errors?.fieldErrors?.source && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {errors?.fieldErrors?.source}
                    </span>
                  </div>
                )}
              </label>
              <Input
                label="Duration (minutes)*"
                type="number"
                name="time"
                onChange={handleInput}
                fieldSize="w-24"
                value={String(formData.time)}
                min="0"
                error={errors?.fieldErrors?.time}
              />
              <Input
                label="Approval Score (%)*"
                type="number"
                fieldSize="w-24"
                name="approvalScore"
                onChange={handleInput}
                value={String(formData.approvalScore)}
                min="0"
                error={errors?.fieldErrors?.approvalScore}
              />
              <MarkdownContainer
                content={formData.description}
                label="Description*"
                name="description"
                onChange={handleInput}
                error={errors?.fieldErrors?.description}
              />
            </FormContent>
            <FormContent title="Assessment Questions">
              <Button className="btn btn-circle icon icon-plus">+</Button>
            </FormContent>

            <div className="divider" />
            <Button type="submit" className="m-4">
              Send message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
