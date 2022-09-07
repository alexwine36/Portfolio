import { usePDF } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import CoverLetterPDF, {
  CoverLetterPDFProps,
} from '../../cover-letter/cover-letter-pdf';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseCoverLetter extends CoverLetterPDFProps {}

function shallowEqual<T extends Record<string, unknown>>(
  object1: T,
  object2: Record<string, unknown>
) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

export function useCoverLetter(props: UseCoverLetter) {
  const { data } = props;
  const [document, setDocument] = useState(<CoverLetterPDF data={data} />);
  const [prevData, setPrevData] = useState(data);

  // const document = <CoverLetterPDF data={data} />;
  const [instance, update] = usePDF({
    document,
  });

  useEffect(() => {
    if (!shallowEqual(data, prevData)) {
      setPrevData(data);
      setDocument(<CoverLetterPDF data={data} />);
      update();
    }
  }, [data, prevData, update]);

  return {
    instance,
    document,
    update,
  };
}

export default useCoverLetter;
