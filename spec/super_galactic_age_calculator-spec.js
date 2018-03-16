import { Super_galactic_age_calculator } from './../src/super_galactic_age_calculator.js';

describe('', function() {
  let char;

  beforeEach(function() {
    char = new Super_galactic_age_calculator();
  });

  it('Takes a person’s age in years and converts it into seconds.', function() {
    expect(char.yearsToSeconds(7)).toEqual(220752000);
  });

  it('Takes two dates and determines the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)', function() {
    expect(char.secondsBetweenDates("2/19/1993", "03/15/2018")).toEqual(790988400);
  });

  it('Returns the days between two dates', function() {
    expect(char.daysBetweenDates("2/19/1993", "3/16/2018")).toEqual(9155);
  });

  it('Returns someone who is still alive\'s age in Mercury years', function() {
    expect(char.otherPlanetAge("2/19/1993", "mercury")).toEqual(104);
  });

  it('Returns someone who is still alive\'s age in Venus years', function() {
    expect(char.otherPlanetAge("2/19/1993", "venus")).toEqual(40);
  });

});
