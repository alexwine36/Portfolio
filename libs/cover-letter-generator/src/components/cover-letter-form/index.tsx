import styled from '@emotion/styled';
import { withTheme } from '@rjsf/core';
import { Theme } from '@rjsf/mui';
import validator from '@rjsf/validator-ajv6';
import { CoverLetterForm as CoverLetterData } from './form-data';
import { schema } from './schema';
/* eslint-disable-next-line */
export interface CoverLetterFormProps {
  formData?: CoverLetterData;
  onSubmit: (data: CoverLetterData) => void;
}

const Form = withTheme(Theme);

const StyledCoverLetterForm = styled(Form)`
  /* color: pink; */
`;

export function CoverLetterForm(props: CoverLetterFormProps) {
  const { formData, onSubmit } = props;
  const inlineType = {
    'ui:widget': 'checkboxes',
    'ui:options': {
      inline: true,
    },
  };
  return (
    <StyledCoverLetterForm
      validator={validator}
      formData={formData}
      uiSchema={{
        Strengths: {
          softSkills: {
            adjectives: {
              ...inlineType,
            },
            nouns: {
              ...inlineType,
            },
            verbs: {
              ...inlineType,
            },
          },
          hardSkills: {
            // 'ui:options': {
            //   addable: true,
            // },
            ...inlineType,
          },
        },
        Personal: {
          phone: {
            // inputType: 'email',
            // 'ui:widget': 'hidden',
            'ui:options': {
              inputType: 'tel',
            },
          },

          // inputType: 'tel',
        },
      }}
      schema={schema}
      onSubmit={(data) => {
        console.log(data.formData);
        onSubmit(data.formData);
      }}
    >
      {/* <h1>Welcome to CoverLetterForm!</h1> */}
    </StyledCoverLetterForm>
  );
}

export default CoverLetterForm;
