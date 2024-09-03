const cakes = [
  'angel cake',
  'apple cake',
  'bakewell tart',
  'battenberg cake',
  'black bun',
  'carrot cake',
  'cherry cake',
  'christmas cake',
  'dundee cake',
  'eccles cake',
  'fruitcake',
  'gingerbread',
  'jelly cake',
  'lemon drizzle cake',
  'lardy cake',
  'parkin',
  'rock cake',
  'simnel cake',
  'sticky toffee pudding',
  'sponge cake',
  'tea loaf',
  'treacle tart',
  'victoria sponge',
  'welsh cake',
];

export const add = (a: number, b: number) => a + b;
export const isItCake = (val: string) =>
  cakes.includes(val.toLowerCase()) ||
  cakes.includes(val.replace(/cake/i, '').toLowerCase());
