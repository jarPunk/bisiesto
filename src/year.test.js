// year.test.js
import { isLeapYear } from './year';

test('Año divisible por 400 es bisiesto', () => {
    expect(isLeapYear(2000)).toBe(true);
});
test('Año divisible por 100 pero no por 400 NO es bisiesto', () => {
    expect(isLeapYear(1900)).toBe(false);
});
test('Año divisible por 4 pero no por 100 es bisiesto', () => {
    expect(isLeapYear(2008)).toBe(true);
});