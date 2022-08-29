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
    marginBottom: baseFontSize / 4,
  },
  bulletPoint: {
    width: baseFontSize - 2,
    fontSize: baseFontSize,
  },
  itemContent: {
    flex: 1,
    fontSize: baseFontSize,
    fontFamily: 'Lato',
  },
});

export const List = ({ children }: ListProps) => children;

export const ListItemContent = ({
  children,
  simple,
}: ListItemProps & { simple?: boolean }) => {
  if (simple) {
    return (
      <View style={{ ...styles.item }}>
        <Text style={{ ...styles.itemContent, lineHeight: 1.5 }}>
          {children}
        </Text>
      </View>
    );
  }
  return <Text style={styles.itemContent}>{children}</Text>;
};

export const ListItem = ({ children }: ListItemProps) => (
  <View style={styles.item} wrap={false}>
    {/* <Text style={styles.bulletPoint}>•</Text> */}
    <Text style={styles.bulletPoint}>-</Text>
    <ListItemContent>{children}</ListItemContent>
  </View>
);

// export default List;
