const { isWorkday, isHoliday } = require('../src/holiday/holiday').default
import { describe, expect, test } from '@jest/globals';

describe('holiday function module', () => {
    test('verify 2023-01-01 is workday', () => {
        expect(isWorkday('2023-01-01')).toBe(false);
    });

    test('verify 2023-01-01 is holiday', () => {
        expect(isHoliday('2023-01-01')).toBe(true);
    });
});


