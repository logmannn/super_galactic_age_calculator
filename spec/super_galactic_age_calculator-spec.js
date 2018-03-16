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

  it('Returns someone who is still alive\'s age in other planetary years', function() {
    expect(char.otherPlanetAge("2/19/1993", "mercury")).toEqual(104);
    expect(char.otherPlanetAge("2/19/1993", "venus")).toEqual(40);
    expect(char.otherPlanetAge("2/19/1993", "mars")).toEqual(13);
    expect(char.otherPlanetAge("2/19/1993", "jupiter")).toEqual(2);
  });

  it('Tells you how old you are based on your birthdate', function() {
    expect(char.getAge("2/19/1993")).toEqual(25);
  });

  it('Determine how many years a user has left to live on each planet', function() {
    expect(char.yearLeft("2/19/1993", 100, "mercury")).toEqual(18);
    expect(char.yearLeft("2/19/1993", 100, "venus")).toEqual(46.5);
    expect(char.yearLeft("2/19/1993", 100, "mars")).toEqual(141);
    expect(char.yearLeft("2/19/1993", 100, "jupiter")).toEqual(889.5);
  });


});
