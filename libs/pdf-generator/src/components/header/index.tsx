import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import { baseFontSize, boldFont, normalFont } from '../../constants/styles';

/* eslint-disable-next-line */
export interface HeaderProps {}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderBottomWidth: 2,
    // borderBottomColor: '#112131',
    // borderBottomStyle: 'solid',
    alignItems: 'stretch',
    paddingBottom: baseFontSize,
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkContainer: {
    flexDirection: 'row',
    textDecoration: 'none',
    textTransform: 'capitalize',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: baseFontSize * 2,
    fontFamily: boldFont,
  },
  subtitle: {
    fontSize: baseFontSize + 2,
    justifySelf: 'flex-end',
    fontFamily: boldFont,
    textDecoration: 'none',
    marginVertical: 2,
  },
  linkheader: {
    fontFamily: boldFont,
    fontSize: baseFontSize,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    textTransform: 'uppercase',
    marginVertical: 2,
  },
  link: {
    fontFamily: normalFont,
    fontSize: baseFontSize,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    marginVertical: 2,
  },
});

export function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>Alex Wine</Text>
        <Text style={styles.subtitle}>Developer</Text>
        <View style={styles.linkContainer}>
          <Link
            style={{ ...styles.subtitle, fontFamily: normalFont }}
            src={'https://alex-wine-portfolio.netlify.app/'}
          >
            Portfolio
          </Link>
          <Text
            style={{
              ...styles.subtitle,
              paddingHorizontal: 4,
              fontFamily: normalFont,
            }}
          >
            |
          </Text>
          <Link
            style={{ ...styles.subtitle, fontFamily: normalFont }}
            src={'https://www.linkedin.com/in/alexwine/'}
          >
            LinkedIn
          </Link>
        </View>
      </View>
      <View
        style={{
          ...styles.linkColumn,
        }}
      >
        <Text style={styles.linkheader}>phone</Text>
        <Text style={styles.linkheader}>email</Text>
        {/* <Text style={styles.linkheader}>location</Text> */}
      </View>
      <View style={styles.linkColumn}>
        <Link src="tel:5056297298" style={styles.link}>
          505.629.7298
        </Link>
        <Link src="mailto:alexwine36@gmail.com" style={styles.link}>
          alexwine36@gmail.com
        </Link>

        {/* <Text style={styles.link}>Albuquerque, NM</Text> */}
      </View>
    </View>
  );
}

export default Header;
