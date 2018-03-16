export class Super_galactic_age_calculator {

  // constructor(stats) {
  //   this.name = stats[0];
  // }

  yearsToSeconds(ageInYears) {
    let yearsToSeconds = ageInYears * 31536000;
    return yearsToSeconds;
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

  //assuming they are still alive
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
    if (planet == "mercury") {planetYear = 87.6}

    today = mm+'/'+dd+'/'+yyyy;

    let day_start = new Date(today);
    let day_end = new Date(birthday);
    let total_days = Math.floor((day_start - day_end) / (1000 * 60 * 60 * 24));

    let mercuryYears = Math.floor(total_days/planetYear);
    return mercuryYears;
  }

  //
  // addExperience(amount) {
  //   this.experience += amount;
  //   while (this.experience >= this.nextLevel) {
  //     this.levelUp();
  //   }
  // }
  //
  // levelUp() {
  //   this.experience -= this.nextLevel;
  //   this.nextLevel += Math.floor(this.nextLevel / 2);
  //   this.level += 1;
  // }
  //
  // damageIndicator() {
  //   // check if hp is greater than 70%
  //   if (this.condition > (this.vitality*.7)) {
  //
  //   }
  //   // swap character image based on their current condition (hp)
  // }

  // changeTurn() {
  //   if (this.turn == 0) {
  //     this.turn = 1;
  //   } else {
  //     this.turn = 0;
  //   }
  //   return this.turn;
  // }
  // switch (devClass) {
  // case 'basement hacker':
  //   this.stats = [10, 8, 1, 2];
  //   break;
  // case 'bro coder':
  //   this.stats = [3, 3, 10, 5];
  //   break;
  // case 'gandalf':
  //   this.stats = [5, 5, 5, 6];
  //   break;
  // case 'code cowboy':
  //   this.stats = [7, 7, 5, 2];
  //   break;
  // }
  // this.inventory = [];
  // this.experience = 0;
  // this.nextLevel = 10;
  // this.level = 1;
  // this.money = 0;
  //
  // checkForLevelUp() {
  //   return this.experience >= this.nextLevel;
  // }
  //
  //
  // addStats(statChanges) {
  //   this.stats = this.stats.map(function (stat, idx) {
  //     return stat + statChanges[idx];
  //   });
  // }
  //
  // removeStats(statChanges) {
  //   this.stats = this.stats.map(function (stat, idx) {
  //     return stat - statChanges[idx];
  //   });
  // }
  //
  // buyInv(item) {
  //   if (this.money >= item.price && this.inventory.length < 2){
  //     this.money -= item.price;
  //     this.inventory.push(item);
  //     this.addStats(item.stats);
  //   }
  // }
  //
  // sellInv(item) {
  //   var choice = this.inventory.indexOf(item);
  //   if (choice > -1) {
  //     this.inventory.splice(choice, 1);
  //     this.removeStats(item.stats);
  //   }
  // }
  //
  // addMoney(amount) {
  //   this.money += amount;
  // }
}
