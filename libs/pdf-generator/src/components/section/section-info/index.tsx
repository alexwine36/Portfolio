import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { baseFontSize, GlobalStyles } from '../../../constants/styles';
import { SectionInfoType } from '../../resume';

/* eslint-disable-next-line */
export interface SectionInfoProps extends SectionInfoType {
  // title: string;
  // pretitle: string;
  // subtitle: string;
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
    width: '25%',
    marginLeft: baseFontSize / 4,
  },
});

export function SectionInfo(props: SectionInfoProps) {
  const { title, pretitle = '', subtitle = '' } = props;
  return (
    <View style={styles.container}>
      {/* {_.chunk(title.split(' '), 2).map((v) => {
        return <Text style={styles.title}>{v.join(' ')}</Text>;
      })}
      {_.chunk(subtitle.split(' '), 2).map((v) => {
        return <Text style={styles.base}>{v.join(' ')}</Text>;
      })} */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.base}>{subtitle}</Text>
      <Text style={styles.base}>{pretitle}</Text>
    </View>
  );
}

export default SectionInfo;
