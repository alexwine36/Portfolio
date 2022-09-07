import { Document, Font, Page, StyleSheet, View } from '@react-pdf/renderer';
import { baseFontSize, GlobalStyles } from '../../constants/styles';
import LineRender from '../components/line-render';

export interface Line {
  style?: 'Header' | 'Emphasis' | 'Normal';
  text?: string;
}

/* eslint-disable-next-line */
export interface CoverLetterPDFProps {
  data: {
    Header: Line[];
    To?: Line[];
    Body?: string[];
  };
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 180,
    // paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
  section: {
    marginBottom: baseFontSize,
    marginHorizontal: baseFontSize * 2,
  },
});

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

Font.registerHyphenationCallback((words) => {
  // console.log(words);
  return [words];
});

export function CoverLetterPDF(props: CoverLetterPDFProps) {
  const { data } = props;
  console.log(data);

  return (
    <Document author="Alex Wine" title="Resume">
      <Page size="LETTER" style={styles.page}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.section,
              ...GlobalStyles['borderBottom'],
              textAlign: 'center',
              padding: baseFontSize,
            }}
          >
            {data.Header.map((l, idx) => {
              return <LineRender key={idx} {...l} />;
            })}
          </View>
          <View
            style={{
              ...styles.section,

              textAlign: 'right',
            }}
          >
            <LineRender
              {...{
                style: 'Emphasis',
                text: new Date().toLocaleDateString(),
              }}
            ></LineRender>
          </View>
          <View style={{ ...styles.section }}>
            {data.To?.map((l, idx) => {
              return <LineRender key={idx} {...l} />;
            })}
          </View>
          <View
            style={{
              ...styles.section,
            }}
          >
            {data.Body?.map((l, idx) => {
              return <LineRender key={idx} text={l} />;
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CoverLetterPDF;
