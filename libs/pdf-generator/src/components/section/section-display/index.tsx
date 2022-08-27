import { StyleSheet, View } from '@react-pdf/renderer';
import { GlobalStyles } from '../../../constants/styles';
import { SectionData } from '../../resume';
import SectionDetail from '../section-detail';
import SectionHeader from '../section-header';
import SectionInfo from '../section-info';

/* eslint-disable-next-line */
export interface SectionDisplayProps {
  name: string;
  data: SectionData[];
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    ...GlobalStyles['borderBottom'],
  },
});

export function SectionDisplay(props: SectionDisplayProps) {
  const { name, data } = props;
  return (
    <View>
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
