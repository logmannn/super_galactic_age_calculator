export class Super_galactic_age_calculator {

  yearsToSeconds(ageInYears) {
    let yearsToSeconds = ageInYears * 31536000;
    return yearsToSeconds;
  }

  getAge(dateString){
    let today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  secondsBetweenDates(date1, date2) {
    let previousDate = Math.floor(Date.parse(date1) / 1000);
    let nextDate = Math.floor(Date.parse(date2) / 1000);
    let seconds = nextDate - previousDate;
    return seconds;
  }

  daysBetweenDates(date1, date2) {
    let day_start = new Date(date1);
    let day_end = new Date(date2);
    let total_days = Math.floor((day_end - day_start) / (1000 * 60 * 60 * 24));
    return total_days;
  }

  otherPlanetAge(birthday, planet){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let planetYear = 87.6;

    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    //
    if (planet == "mercury") {planetYear = 87.6}
    else if (planet == "venus") {planetYear = 226.3}
    else if (planet == "mars") {planetYear = 686.2}
    else if (planet == "jupiter") {planetYear = 4328.9}

    today = mm+'/'+dd+'/'+yyyy;

    let planetaryYears = Math.floor(this.daysBetweenDates(birthday,today)/planetYear);

    return planetaryYears;
  }

  // Determine how many years a user has left to live on each planet
  yearLeft(birthday, expectedAge, planet){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    let age = this.getAge(birthday);
    let yearsLeft = expectedAge - age;
    const birthdate = new Date(birthday);
    let deathYear = ((birthdate.getFullYear())+yearsLeft);

    if (yyyy > deathYear) {
      let yearsLivedOver = (yyyy-deathYear)-age;
      yearsLeft=0-yearsLivedOver;
    }

    if (planet == "mercury") {deathYear = yearsLeft*.24}
    else if (planet == "venus") {deathYear = yearsLeft*.62}
    else if (planet == "mars") {deathYear = yearsLeft*1.88}
    else if (planet == "jupiter") {deathYear = yearsLeft*11.86}

    return deathYear;
  }

}
