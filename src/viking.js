// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength);
    this.name = name; 
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry () {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  // I'm doubting if I shouldn't make a constructor...?
  vikingArmy = [];
  saxonArmy = [];

  // Even though I'm passing the tests, this is wrong..
  // My vikings/Saxons are not pushed into the array this way.
  // I feel a bit embarrassed to even show this code, heh!
  // I know it doesn't make any sense (at all) but I am too tired atm to solve it.
  addViking ({name, strength, health}) {
    let V1 = new Viking('Harald', 150, 300)
    let V2 = new Viking('Frode', 200, 300)
    let V3 = new Viking('Birger', 200, 300)
    this.vikingArmy.push({name, strength, health})
  }
  /*
  addViking (viking) {
    let V1 = new Viking('Harald', 150, 300)
    let V2 = new Viking('Frode', 200, 300)
    let V3 = new Viking('Birger', 200, 300)
    this.vikingArmy.push(viking.V1, viking.V2, viking.V3)
  }
  */
  /*
  addViking (newViking) {
    const newViking = new Viking(this.name, this.strength, this.health)
    this.vikingArmy.push({newViking})
  }
  */
 
  addSaxon ({health, strength}) {
    let S1 = new Saxon(60, 25)
    let S2 = new Saxon(70, 50)
    let S3 = new Saxon(70, 80)
    this.saxonArmy.push({health, strength})
  }

  vikingAttack () {
    // get random saxon and random viking
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; 
    // the damage is equal to the vikings strength/attack
    // the new health = the old health - the damage (so I need to make a copy)
    let oldHealth =  {...Saxon.health}  // how to refer to this?!
    
    randomSaxon.receiveDamage === randomViking.strength; // or attack?
    let newHealth = oldHealth - randomSaxon.receiveDamage;
    if (newHealth > 0) {
      return Saxon.receiveDamage()
    }
    if (newHealth < 0) {
      this.saxonArmy.shift() 
      // it's an object in an array Len, so should't use shift. 
      // Use delete on the random Saxon?
    }
  }
  // Pfff, I am super stuck! I've been looking at it too long and can't see things anymore.
  // I find it hard, but I am going to let it go for now and prepare for the next lesson.
  // I will look closely at the solution :)
  
  saxonAttack() {

  }

  showStatus() {

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
