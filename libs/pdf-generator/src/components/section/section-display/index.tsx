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
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    ...GlobalStyles['borderBottom'],
    marginTop: baseFontSize / 2,
  },
  mainSection: {
    // marginBottom: baseFontSize / 2,
  },
});

export function SectionDisplay(props: SectionDisplayProps) {
  const { name, data, pageBreak } = props;
  return (
    <View style={styles.mainSection} break={pageBreak}>
      <SectionHeader title={name} />
      {data.map((d) => {
        const { title, pretitle, subtitle, content } = d;

        return (
          <View style={styles.section}>
            <SectionInfo
              title={title}
              pretitle={pretitle}
              subtitle={subtitle}
            />
            <SectionDetail items={content}></SectionDetail>
          </View>
        );
      })}
    </View>
  );
}

export default SectionDisplay;
