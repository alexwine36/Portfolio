import { StyleSheet, Text } from '@react-pdf/renderer';
import { baseFontSize, GlobalStyles } from '../../../constants/styles';
import { Line } from '../../cover-letter-pdf';

/* eslint-disable-next-line */
export interface LineRenderProps extends Line {}

const fontSize = baseFontSize * 1.25;

const styles = StyleSheet.create({
  emphasis: {
    ...GlobalStyles['headerText'],
    lineHeight: 1.25,
    fontSize,
    marginBottom: baseFontSize / 2,
  },
  header: {
    ...GlobalStyles['headerText'],
    lineHeight: 1.25,
    // marginBottom: baseFontSize,
    fontSize: fontSize * 1.5,
    marginBottom: baseFontSize / 2,
  },
  normal: {
    marginBottom: fontSize,
    ...GlobalStyles['baseText'],
    fontSize,
    lineHeight: 1.25,
    // marginBottom: baseFontSize,
  },
});

export function LineRender(props: LineRenderProps) {
  const { text, style } = props;
  let currentStyle = styles.normal;
  if (style === 'Header') {
    currentStyle = styles.header;
  }
  if (style === 'Emphasis') {
    currentStyle = styles.emphasis;
  }
  return <Text style={currentStyle}>{text}</Text>;
}

export default LineRender;
