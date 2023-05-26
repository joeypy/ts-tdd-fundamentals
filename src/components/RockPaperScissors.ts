export enum Move {
  Paper,
  Rock,
  Scissors
}

export enum Outcome {
  PlayerWins,
  PlayerLoses,
  Tie
}

interface IRockPaperScissors {
  play(playerMove: Move, opponentMove: Move): Outcome;
}

export class createRockPaperScissors implements IRockPaperScissors{
  scenarios: Outcome[][] = [
    [Outcome.Tie, Outcome.PlayerWins, Outcome.PlayerLoses],
    [Outcome.PlayerLoses, Outcome.Tie, Outcome.PlayerWins],
    [Outcome.PlayerWins, Outcome.PlayerLoses, Outcome.Tie],
  ]

  play (playerMove: Move, opponentMove: Move): Outcome {
    return this.scenarios[playerMove][opponentMove];
  }

};