export const tax_brackets = [
  {
    id: 1,
    min: 0.0,
    max: 195850.0,
    fixed_tax: 0.0,
    tax_rate: 18
  },

  {
    id: 2,
    min: 195851.0,
    max: 305850.0,
    fixed_tax: 35253.0,
    tax_rate: 26
  },
  {
    id: 3,
    min: 305851.0,
    max: 423300.0,
    fixed_tax: 63853.0,
    tax_rate: 31
  },
  {
    id: 4,
    min: 423301.0,
    max: 555600.0,
    fixed_tax: 100263.0,
    tax_rate: 36
  },
  {
    id: 5,
    min: 555601.0,
    max: 708310.0,
    fixed_tax: 147891.0,
    tax_rate: 39
  },
  {
    id: 6,
    min: 708311.0,
    max: 1500000.0,
    fixed_tax: 207448.0,
    tax_rate: 41
  },
  {
    id: 7,
    min: 1500001.0,
    max: 10000000000000000,
    fixed_tax: 532041.0,
    tax_rate: 45
  }
];

export const primary_rebate = 14220;
export const retirement_deductable_max = 350000;
export const ANNUAL_TFSA_LIMIT = 33000;
