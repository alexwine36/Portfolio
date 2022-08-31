import { Document, Font, Page, StyleSheet, View } from '@react-pdf/renderer';
import Header from '../header';
import SectionDisplay from '../section/section-display';

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
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

export interface SectionInfoType {
  title: string;
  pretitle?: string;
  subtitle?: string;
}

export type SectionData = SectionInfoType & {
  content: string[] | string;
  // rawContent: Root;
};

export interface ResumeProps {
  data: {
    work: SectionData[];
    education: SectionData[];
    skills: { category: string; skills: string[] }[];
  };
}

export function Resume(props: ResumeProps) {
  const { data } = props;
  const { work, education, skills } = data;
  return (
    <Document author="Alex Wine" title="Resume">
      <Page size="LETTER" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <Header></Header>
            <SectionDisplay
              name="Skills"
              data={skills.map((d) => ({
                title: d.category,
                content: d.skills.join(', '),
              }))}
            ></SectionDisplay>
            <SectionDisplay
              name={'Education'}
              data={education}
              truncate
              // pageBreak
            ></SectionDisplay>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <SectionDisplay name={'Experience'} data={work}></SectionDisplay>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Resume;
