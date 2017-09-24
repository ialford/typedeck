import { IPlayer } from './player.interface'
import { Player } from './player.model'
import { IHand } from '../cardCollection/hand.interface'
import { Hand } from '../cardCollection/hand.model'
import { Difficulty } from './difficulty.model'

export class ComputerPlayer extends Player implements IPlayer {

  constructor (
    name: string,
    hand: IHand,
    public difficulty: Difficulty = Difficulty.Normal) {
    super(name, hand)
  }

  public static Create (fields?: ComputerPlayer): ComputerPlayer {
    const name = (fields) ? fields.name : ''
    const difficulty = (fields) ? fields.difficulty : Difficulty.Normal
    return new ComputerPlayer(
      name,
      new Hand(),
      difficulty)
  }

  public setDifficulty (difficulty: Difficulty): this {
    this.difficulty = difficulty
    return this
  }

  public toString (): string {
    return `Computer: ${this.name}`
  }
}
