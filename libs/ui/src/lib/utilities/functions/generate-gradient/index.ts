import { analogue } from 'simpler-color';

export const generateGradient = (color: string) => {
  return {
    start: analogue(color, 1),
    end: color,
  };
};
