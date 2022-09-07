import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useState } from 'react';
import CoverLetterForm from '../components/cover-letter-form';
import { CoverLetterForm as CoverLetterFormData } from '../components/cover-letter-form/form-data';
import EditForm from '../components/edit-form';
import { CoverLetterEdit } from '../components/edit-form/form-data';
import CoverLetterDisplay from './cover-letter-display';

// export interface BaseData {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   phone?: string;
// }

/* eslint-disable-next-line */
export interface CoverLetterGeneratorProps {
  formData: CoverLetterFormData;
}

const StyledCoverLetterGenerator = styled.div`
  /* color: pink; */
`;

export function CoverLetterGenerator(props: CoverLetterGeneratorProps) {
  const { formData } = props;
  const [baseForm, setBaseForm] = useState<CoverLetterFormData>(formData);
  const [editForm, setEditForm] = useState<CoverLetterEdit>();
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleInitialSubmit = (data: CoverLetterFormData) => {
    setBaseForm((d) => ({
      ...d,
      ...data,
    }));
    setExpanded('panel2');
  };

  const handleEditSubmit = (data: CoverLetterEdit) => {
    setEditForm(data);
    setExpanded('panel3');
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledCoverLetterGenerator>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          Base Data
        </AccordionSummary>
        <AccordionDetails>
          <CoverLetterForm formData={baseForm} onSubmit={handleInitialSubmit} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
          Resume Edit
        </AccordionSummary>
        <AccordionDetails>
          {/* <CoverLetterForm formData={baseForm} onSubmit={handleInitialSubmit} /> */}
          <EditForm onSubmit={handleEditSubmit} formData={baseForm} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
          Resume Display
        </AccordionSummary>
        <AccordionDetails>
          {/* <CoverLetterForm formData={baseForm} onSubmit={handleInitialSubmit} /> */}
          {/* <EditForm formData={baseForm} /> */}
          {JSON.stringify(editForm)}
          {editForm && <CoverLetterDisplay editForm={editForm} />}
        </AccordionDetails>
      </Accordion>
      {/* <h1>Welcome to CoverLetterGenerator!</h1> */}
    </StyledCoverLetterGenerator>
  );
}

export default CoverLetterGenerator;
