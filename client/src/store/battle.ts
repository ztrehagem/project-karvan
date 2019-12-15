import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import {
  Character,
  CharacterCommand,
  CharacterCommandType,
  Enemy,
} from '@/models/character'

Vue.use(Vuex)

export interface BattleStore {
  character: Character | null
  commandType: CharacterCommandType | null
  commands: CharacterCommand[]
}

export const store: Module<BattleStore, {}> = {
  namespaced: true,
  state: {
    character: null,
    commandType: null,
    commands: [],
  },
  mutations: {
    clear(state) {
      state.character = null
      state.commandType = null
      state.commands.splice(0, Infinity)
    },
    selectCharacter(state, character: Character) {
      state.character = character
      state.commandType = null
    },
    clearCharacter(state) {
      state.character = null
    },
    selectCommandType(state, type: CharacterCommandType) {
      state.commandType = type
    },
    clearCommandType(state) {
      state.commandType = null
    },
    selectEnemy(state, enemy: Enemy) {
      if (!state.commandType || !state.character) throw new Error()
      const index = state.commands.findIndex(
        ({ actor }) => actor === state.character,
      )
      if (index >= 0) state.commands.splice(index, 1)
      state.commands.push({
        actor: state.character,
        type: state.commandType,
        target: enemy,
      })
      state.character = null
      state.commandType = null
      console.log(state.commands)
    },
  },
  actions: {},
}

export default store
