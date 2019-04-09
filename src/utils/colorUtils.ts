const color = require('tinycolor2');

export const lighten = (baseColor: string, amt: number) =>
  color(baseColor)
    .lighten(amt)
    .toString();

export const darken = (baseColor: string, amt: number) =>
  color(baseColor)
    .darken(amt)
    .toString();
