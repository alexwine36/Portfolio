import styled from '@emotion/styled';
import { withTheme } from '@rjsf/core';
import { Theme } from '@rjsf/mui';
import validator from '@rjsf/validator-ajv6';
import { useEffect, useState } from 'react';
import { formatEditData } from '../../utils/functions/format-edit-data';
import { CoverLetterForm as CoverLetterData } from '../cover-letter-form/form-data';
import { CoverLetterEdit } from './form-data';
import { schema } from './schema';
/* eslint-disable-next-line */
export interface EditFormProps {
  formData: CoverLetterData;
}

const Form = withTheme(Theme);

const StyledEditForm = styled(Form)`
  /* color: pink; */
`;

export function EditForm(props: EditFormProps) {
  const { formData } = props;
  const [baseData, setBaseData] = useState<CoverLetterEdit>();

  useEffect(() => {
    const res = formatEditData(formData);
    console.log(res);

    setBaseData(res);
    // return () => {
    //   second
    // }
  }, [formData]);

  return (
    <StyledEditForm
      validator={validator}
      formData={baseData}
      schema={schema}
      uiSchema={{
        Body: {
          items: {
            'ui:widget': 'textarea',
          },
        },
      }}
    ></StyledEditForm>
  );
}

export default EditForm;
