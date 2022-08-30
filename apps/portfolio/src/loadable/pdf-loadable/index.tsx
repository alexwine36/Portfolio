import React from 'react';

const PDFDisplay = React.lazy(() => import('../../components/pdf-display'));

/* eslint-disable-next-line */
export interface PDFLoadableProps {}

export function PDFLoadable(props: PDFLoadableProps) {
  return (
    <React.Suspense fallback={<div></div>}>
      <PDFDisplay />
    </React.Suspense>
  );
}

export default PDFLoadable;
