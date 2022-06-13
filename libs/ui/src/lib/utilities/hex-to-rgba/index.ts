import { rgbToHex } from '@mui/material';
import { hexRgb } from '@portfolio/hex-rgb';

export const hexToRgba = (color: string, alpha: number) => {
  console.log(color);
  const res = rgbToHex(color);
  const values = hexRgb(res, { alpha, format: 'array' });
  return `rgba(${values.map((v) => `${v}`).join(', ')})`;
};
