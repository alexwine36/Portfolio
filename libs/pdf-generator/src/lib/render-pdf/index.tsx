import ReactPDF from '@react-pdf/renderer';
import Resume, { ResumeProps } from '../../components/resume';
/* eslint-disable-next-line */

export interface RenderPDFProps extends ResumeProps {
  output: string;
}

export function RenderPDF(props: RenderPDFProps) {
  const { data, output } = props;
  ReactPDF.render(<Resume data={data} />, output);
  // return (
  //   <div>
  //     <h1>Welcome to RenderPDF!</h1>
  //   </div>
  // );
}

export default RenderPDF;
