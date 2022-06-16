import { analogue } from 'simpler-color';

export const generateGradient = (color: string) => {
  return {
    start: analogue(color, 1),
    end: color,
  };
};

export const generateGradientStep = (color: string, i: number) => {
  return {
    start: analogue(color, i),
    end: color,
  };
};
