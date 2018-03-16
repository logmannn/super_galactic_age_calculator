export class Super_galactic_age_calculator {

  // constructor(stats) {
  //   this.name = stats[0];
  // }

  yearsToSeconds(ageInYears) {
    let yearsToSeconds = ageInYears * 31536000;
    return yearsToSeconds;
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
