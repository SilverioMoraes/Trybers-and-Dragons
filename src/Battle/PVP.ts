import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(p1: Fighter, private _p2: Fighter) {
    super(p1);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._p2.lifePoints > 0) {
      this.player.attack(this._p2);      
      this._p2.attack(this.player);
    }

    return super.fight();
  }
}