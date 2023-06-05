class Player {
    set name(n) {
      this._name = n;
    }
    set level(l) {
      this._level = l;
    }
    set type(t) {
      this._type = t;
    }
    set weapon(w) {
      this._weapon = w;
    }
    set health(h) {
      this._health = h;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get type() {
      return this._type;
    }
    get weapon() {
      return this._weapon;
    }
    get health() {
      return this._health;
    }
    constructor(n) {
      return (this._name = n);
    }
  
    reset() {
      // Start/Restart the Game
      this._level = "5";
      this._type = "Peasant";
      this._weapon = "Saber";
      this._health = 5;
    }
    getAllInfo() {
      // Returns the Status
      if (parseInt(this._health) === 0) {
        this._health = this.name + " Died!";
        return this.health;
      } else {
        return `
        Name: ${this.name} 
        Weapon: ${this.weapon}
        Health: ${this.health}
          `;
      }
    }
  
    doBattle(hero, enemy) {
      let attacksByGood = this.getRan();
      let attacksByEnemy = this.getRan();
      let action = document.getElementById("action");
  
      if (attacksByGood > attacksByEnemy) {
        action.value = hero.name + " attacks " + enemy.name;
        hero.health++;
        enemy.health--;
        enemy.level--;
        hero.level++;
      } else if (attacksByGood < attacksByEnemy) {
        action.value = enemy.name + " attacks " + hero.name;
        hero.health--;
        enemy.health++;
        enemy.level++;
        hero.level--;
      }
    }
  
    getRan() {
      return Math.floor(Math.random() * 10) + 1;
    }
  }
  
  let player1 = new Player("Hercules");
  let player2 = new Player("Atreyu");
  
  function initGame() {
    player1.reset();
    player2.reset();
  
    status();
  }
  
  function startGame() {
    player1.doBattle(player1, player2);
    status();
  }
  
  function status() {
    document.getElementById("p1");
    p1.value = player1.getAllInfo();
  
    document.getElementById("p2");
    p2.value = player2.getAllInfo();
  }