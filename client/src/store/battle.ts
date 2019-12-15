import * as vsm from 'vuex-smart-module'
import {
  Character,
  CharacterCommand,
  CharacterCommandType,
  Enemy,
} from '@/models/character'

class State {
  character: Character | null = null
  commandType: CharacterCommandType | null = null
  commands: CharacterCommand[] = []
}

class Mutations extends vsm.Mutations<State> {
  clear() {
    this.state.character = null
    this.state.commandType = null
    this.state.commands.splice(0, Infinity)
  }

  selectCharacter(character: Character) {
    this.state.character = character
    this.state.commandType = null
  }

  clearCharacter() {
    this.state.character = null
  }

  selectCommandType(type: CharacterCommandType) {
    this.state.commandType = type
  }

  clearCommandType() {
    this.state.commandType = null
  }

  selectEnemy(enemy: Enemy) {
    if (!this.state.commandType || !this.state.character) throw new Error()
    const index = this.state.commands.findIndex(
      ({ actor }) => actor === this.state.character,
    )
    if (index >= 0) this.state.commands.splice(index, 1)
    this.state.commands.push({
      actor: this.state.character,
      type: this.state.commandType,
      target: enemy,
    })
    this.state.character = null
    this.state.commandType = null
    console.log(this.state.commands)
  }
}

export default new vsm.Module({
  state: State,
  mutations: Mutations,
})
