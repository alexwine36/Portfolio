import ReactPDF from '@react-pdf/renderer';
import Resume from '../../components/resume';

/* eslint-disable-next-line */
export interface RenderPDFProps {}

export function RenderPDF(props: RenderPDFProps) {
  ReactPDF.render(<Resume />, `${__dirname}/example.pdf`);
  // return (
  //   <div>
  //     <h1>Welcome to RenderPDF!</h1>
  //   </div>
  // );
}

export default RenderPDF;
