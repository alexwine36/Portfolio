import { StyleSheet, View } from '@react-pdf/renderer';
import { baseFontSize, GlobalStyles } from '../../../constants/styles';
import { SectionData } from '../../resume';
import SectionDetail from '../section-detail';
import SectionHeader from '../section-header';
import { SectionInfo } from '../section-info';

/* eslint-disable-next-line */
export interface SectionDisplayProps {
  name: string;
  data: SectionData[];
  wrap?: boolean;
  pageBreak?: boolean;
  truncate?: boolean;
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    ...GlobalStyles['borderBottom'],
    marginTop: baseFontSize / 2,
  },
  lastSection: {
    flexDirection: 'column',
    // ...GlobalStyles['borderBottom'],
    marginTop: baseFontSize / 2,
  },
  mainSection: {
    // marginBottom: baseFontSize / 2,
  },
});

export function SectionDisplay(props: SectionDisplayProps) {
  const { name, data, pageBreak, truncate } = props;
  return (
    <View style={styles.mainSection} break={pageBreak}>
      <SectionHeader title={name} />
      {data.map((d, idx) => {
        const { title, pretitle, subtitle, content } = d;
        const last = idx === data.length - 1;

        if (truncate) {
          return (
            <View key={idx} style={last ? styles.lastSection : styles.section}>
              <SectionInfo
                title={title}
                pretitle={pretitle}
                // subtitle={subtitle}
              />
              <SectionDetail items={`${subtitle}`}></SectionDetail>
            </View>
          );
        }

        return (
          <View key={idx} style={last ? styles.lastSection : styles.section}>
            <SectionInfo
              title={title}
              pretitle={pretitle}
              subtitle={subtitle}
            />
            {!truncate && <SectionDetail items={content}></SectionDetail>}
          </View>
        );
      })}
    </View>
  );
}

export default SectionDisplay;
