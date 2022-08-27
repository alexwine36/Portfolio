import { StyleSheet, View } from '@react-pdf/renderer';
import { baseFontSize } from '../../../constants/styles';
import { List, ListItem } from '../../list';

/* eslint-disable-next-line */
export interface SectionDetailProps {
  items: string[];
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    marginLeft: baseFontSize,
  },
});

export function SectionDetail(props: SectionDetailProps) {
  const { items } = props;
  return (
    <View style={styles.container}>
      <List>
        {items.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </List>
    </View>
  );
}

export default SectionDetail;
