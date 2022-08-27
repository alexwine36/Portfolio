import { StyleSheet, Text, View } from '@react-pdf/renderer';

/* eslint-disable-next-line */
export interface SectionHeaderProps {
  title: string;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    margin: 5,
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
