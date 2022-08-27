import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { GlobalStyles } from '../../../constants/styles';

/* eslint-disable-next-line */
export interface SectionInfoProps {
  title: string;
  pretitle: string;
  subtitle: string;
}

const styles = StyleSheet.create({
  title: {
    ...GlobalStyles['headerText'],
  },
  base: {
    ...GlobalStyles['baseText'],
  },
  container: {
    flexDirection: 'column',
    // flexGrow: 1,
    width: '30%',
  },
});

export function SectionInfo(props: SectionInfoProps) {
  const { title, pretitle, subtitle } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.base}>{subtitle}</Text>
      <Text style={styles.base}>{pretitle}</Text>
    </View>
  );
}

export default SectionInfo;
