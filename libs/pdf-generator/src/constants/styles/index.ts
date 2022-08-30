import { Style } from '@react-pdf/types';

type StylesType = {
  [key: string]: Style;
};

export const borderColor = '#112131';
export const baseFontSize = 10;
export const boldFont = 'Lato Bold';
export const normalFont = 'Lato';

export const BaseStyles: StylesType = {
  bold: {
    fontFamily: boldFont,
  },
  normal: {
    fontFamily: normalFont,
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
