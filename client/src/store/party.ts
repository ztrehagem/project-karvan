import { Character } from '@/models/character'
import * as vsm from 'vuex-smart-module'

class State {
  characters: Character[] = [
    {
      name: 'character1',
      hp: 10,
      hpMax: 10,
      gp: 10,
      gpMax: 10,
      mp: 10,
      mpMax: 10,
    },
    {
      name: 'character2',
      hp: 18,
      hpMax: 20,
      gp: 9,
      gpMax: 20,
      mp: 3,
      mpMax: 20,
    },
    {
      name: 'character3',
      hp: 21,
      hpMax: 30,
      gp: 30,
      gpMax: 30,
      mp: 12,
      mpMax: 30,
    },
    {
      name: 'character4',
      hp: 16,
      hpMax: 40,
      gp: 2,
      gpMax: 40,
      mp: 39,
      mpMax: 40,
    },
  ]
}

export default new vsm.Module({
  state: State,
})
