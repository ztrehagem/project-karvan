export interface Character {
  name: string
  hp: number
  hpMax: number
  gp: number
  gpMax: number
  mp: number
  mpMax: number
}

export interface Enemy {
  name: string
  hp: number
  hpMax: number
}

export type CharacterCommandType
  = 'attack'
  | 'skill'
  | 'item'

export interface CharacterCommand {
  actor: Character | Enemy
  type: CharacterCommandType
  target: Character | Enemy
}
