import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  _lifePoints: number;
  _strength: number;
  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;

    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}