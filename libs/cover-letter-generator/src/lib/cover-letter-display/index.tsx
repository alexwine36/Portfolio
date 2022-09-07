import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { useCoverLetter } from '../../../../pdf-generator/src';
import { CoverLetterEdit } from '../../components/edit-form/form-data';

/* eslint-disable-next-line */
export interface CoverLetterDisplayProps {
  editForm: CoverLetterEdit;
}

const StyledCoverLetterDisplay = styled(PDFViewer)`
  height: 50vh;
  width: 100%;
`;

export function CoverLetterDisplay(props: CoverLetterDisplayProps) {
  const { editForm } = props;
  const { document, update } = useCoverLetter({
    data: {
      // Header: [],
      To: [],
      Body: [],
      ...editForm,
    },
  });
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          update();
        }}
      >
        Update
      </Button>
      <StyledCoverLetterDisplay>{document}</StyledCoverLetterDisplay>
    </React.Fragment>
  );
}

export default CoverLetterDisplay;
