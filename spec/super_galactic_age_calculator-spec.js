import { Super_galactic_age_calculator } from './../src/super_galactic_age_calculator.js';

describe('', function() {
  let char;

  beforeEach(function() {
    char = new Super_galactic_age_calculator();
  });

  it('Does', function() {
    expect(char.yearsToSeconds(7)).toEqual(31536000);
  });
});
