import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { baseFontSize } from '../../constants/styles';
/* eslint-disable-next-line */
export interface ListItemProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface ListProps {
  children: any;
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: baseFontSize,
  },
  itemContent: {
    flex: 1,
    fontSize: baseFontSize,
    fontFamily: 'Lato',
  },
});

export const List = ({ children }: ListProps) => children;

export const ListItem = ({ children }: ListItemProps) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

// export default List;
