import { add, isItCake } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('isItCake', () => {
  expect(isItCake('sponge cake')).toBe(true);
  expect(isItCake('sponge')).toBe(true);
  expect(isItCake('christmas')).toBe(true);
  expect(isItCake('chicken')).toBe(false);
});
