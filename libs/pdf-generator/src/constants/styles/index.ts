import { Style } from '@react-pdf/types';

type StylesType = {
  [key: string]: Style;
};

export const borderColor = '#112131';
export const baseFontSize = 12;
export const BaseStyles: StylesType = {
  bold: {
    fontFamily: 'Lato Bold',
  },
  normal: {
    fontFamily: 'Lato',
  },
};

export const GlobalStyles: StylesType = {
  baseText: {
    ...BaseStyles['normal'],
    fontSize: baseFontSize,
  },
  headerText: {
    ...BaseStyles['bold'],
    fontSize: baseFontSize,
  },

  borderBottom: {
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
};
