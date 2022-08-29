import { StyleSheet, View } from '@react-pdf/renderer';
import { baseFontSize } from '../../../constants/styles';
import { List, ListItem, ListItemContent } from '../../list';

/* eslint-disable-next-line */
export interface SectionDetailProps {
  items: string[] | string;
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
        {Array.isArray(items) ? (
          items.map((item, idx) => <ListItem key={idx}>{item}</ListItem>)
        ) : (
          <ListItemContent simple>{items}</ListItemContent>
        )}
      </List>
    </View>
  );
}

export default SectionDetail;
