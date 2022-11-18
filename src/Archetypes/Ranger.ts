import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  _energyType: EnergyType;
  static _counter = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';

    Ranger._counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._counter;
  }
}
