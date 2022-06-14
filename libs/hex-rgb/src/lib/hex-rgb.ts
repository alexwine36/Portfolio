/* eslint-disable @typescript-eslint/ban-ts-comment */
// export function hexRgb(): string {
//   return 'hex-rgb';
// }

const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

export type FormatTypes = 'object' | 'array' | 'css';

export interface Options {
  /**
	The RGB output options?.format.
	Note that when using the `css` options?.format, the value of the alpha channel is rounded to two decimal places.
	@default 'object'
	*/
  readonly format?: FormatTypes;

  /**
	Set the alpha of the color.
	This overrides any existing alpha component in the Hex color string. For example, the `99` in `#22222299`.
	The number must be in the range 0 to 1.
	*/
  readonly alpha?: number;
}

export interface RgbaObject {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export type RgbaTuple = [
  red: number,
  green: number,
  blue: number,
  alpha: number
];

/**
Convert HEX color to RGBA.
@param hex - The color in HEX format. Leading `#` is optional.
@example
```
import hexRgb from 'hex-rgb';
hexRgb('4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 1}
hexRgb('#4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 1}
hexRgb('#fff');
//=> {red: 255, green: 255, blue: 255, alpha: 1}
hexRgb('#22222299');
//=> {red: 34, green: 34, blue: 34, alpha: 0.6}
hexRgb('#0006');
//=> {red: 0, green: 0, blue: 0, alpha: 0.4}
hexRgb('#cd2222cc');
//=> {red: 205, green: 34, blue: 34, alpha: 0.8}
hexRgb('#cd2222cc', {format: 'array'});
//=> [205, 34, 34, 0.8]
hexRgb('#cd2222cc', {format: 'css'});
//=> 'rgb(205 34 34 / 80%)'
hexRgb('#000', {format: 'css'});
//=> 'rgb(0 0 0)'
hexRgb('#22222299', {alpha: 1});
//=> {red: 34, green: 34, blue: 34, alpha: 1}
hexRgb('#fff', {alpha: 0.5});
//=> {red: 255, green: 255, blue: 255, alpha: 0.5}
```
*/

export function hexRgb<T extends Options, K extends T['format']>(
  hex: string,
  options: T
): ReturnData<K> {
  const { format = 'object' } = options;
  // const opts = options || {};
  if (
    typeof hex !== 'string' ||
    nonHexChars.test(hex) ||
    !validHexSize.test(hex)
  ) {
    throw new TypeError('Expected a valid hex string');
  }

  hex = hex.replace(/^#/, '');
  let alphaFromHex = 1;

  if (hex.length === 8) {
    alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }

  if (hex.length === 4) {
    alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const number = Number.parseInt(hex, 16);
  const red = number >> 16;
  const green = (number >> 8) & 255;
  const blue = number & 255;
  const alpha =
    typeof options?.alpha === 'number' ? options.alpha : alphaFromHex;

  if (format === 'array') {
    // @ts-ignore
    return [red, green, blue, alpha];
  }

  if (format === 'css') {
    const alphaString =
      alpha === 1 ? '' : `${Number((alpha * 100).toFixed(2))}%`;
    // @ts-ignore
    // return `rgb(${red} ${green} ${blue}${alphaString})`;
    return `rgba(${[red, green, blue, alpha].join(',')})`;
  }
  // @ts-ignore
  return { red, green, blue, alpha };
}

// type FormatOptions = Options["format"]

type ReturnData<T> = T extends 'array'
  ? RgbaTuple
  : T extends 'object'
  ? RgbaObject
  : T extends 'css'
  ? string
  : T extends undefined
  ? RgbaObject
  : never;

// const res = hexRgb("#4183c4", {
//   format: "array"
// })
