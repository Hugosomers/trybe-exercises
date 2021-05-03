// Funções de damage e declaração de objetos dos personagens
const mageDmg = (mageObj) => {
  let manaSpent = 15;
  const mageManaPool = mageObj.mana;
  
  const mageDmgInfo = {
    damage: undefined,
    manaCost: undefined,
  };
  
  if (mageManaPool < 15) {
    return 'Não possui mana suficiente';
    
  } else {
    mageObj.mana -= manaSpent;
    const minDmg = mageObj.intelligence;
    const maxDmg = mageObj.intelligence * 2;
    let damage = Math.floor(Math.random() * (maxDmg- (minDmg) + 1)) + minDmg;
    mageDmgInfo.damage = damage;
    mageDmgInfo.manaCost = manaSpent;
    return mageDmgInfo;
  }
  
};

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 150,
  damage: undefined,
};

const warriorDmg = (warriorObj) => {
  const min = warriorObj.strength;
  const max = warriorObj.strength * warriorObj.weaponDmg;
  let damage = Math.floor(Math.random() * (max- (min) + 1)) + min;
  return damage;
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragonDmg = (dragonObj) => {
  let damage = Math.floor(Math.random() * (dragonObj.strength - 15 + 1)) + 15;
  return damage;
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Roda os turnos

const gameActions = {
  warriorTurn: (warriorDmg) => {
    const wDmg = warriorDmg(warrior);
    warrior.damage = wDmg;
    dragon.healthPoints -= wDmg;
  },
  mageTurn: (mageDmgTurn) => {
    const mDmg = mageDmgTurn(mage);
    mage.damage = mDmg;
    const damageDealt = mDmg.damage;
    dragon.healthPoints -= damageDealt;
  },
  dragonTurn: (dragonDmgTurn) => {
    const dDmg = dragonDmgTurn(dragon);
    dragon.damage = dDmg;
    mage.healthPoints -= dDmg;
    warrior.healthPoints -= dDmg;
  },
  endOfTurn: () => {
    gameActions.warriorTurn(warriorDmg);
    gameActions.mageTurn(mageDmg);
    gameActions.dragonTurn(dragonDmg);
    return battleMembers;
  }
};

console.log(gameActions.endOfTurn());
