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
    marginLeft: baseFontSize / 4,
  },
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    // width: '25%',
    marginLeft: baseFontSize / 4,
    marginBottom: baseFontSize / 4,
  },
  subContainer: {
    flexDirection: 'column',
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
      <View style={{ ...styles.subContainer, flexDirection: 'row' }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.base}>{`| ${subtitle}`}</Text>}
      </View>
      <View style={{ ...styles.subContainer, flexGrow: 1 }}>
        <Text style={{ ...styles.base, textAlign: 'right' }}>{pretitle}</Text>
      </View>
    </View>
  );
}

export default SectionInfo;
