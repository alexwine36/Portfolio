import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { baseFontSize } from '../../../constants/styles';

/* eslint-disable-next-line */
export interface SectionHeaderProps {
  title: string;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: baseFontSize + 2,
    margin: baseFontSize / 2,
    textTransform: 'uppercase',
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    borderTopWidth: 2,
    borderTopColor: '#112131',
    borderTopStyle: 'solid',
    alignItems: 'stretch',

    // marginBottom: baseFontSize / 2,
    // paddingBottom: 12,
  },
});

export function SectionHeader(props: SectionHeaderProps) {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default SectionHeader;
