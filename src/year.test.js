// year.test.js
import { isLeapYear } from './year';

test('Año divisible por 400 es bisiesto', () => {
    expect(isLeapYear(2000)).toBe(true);
});
