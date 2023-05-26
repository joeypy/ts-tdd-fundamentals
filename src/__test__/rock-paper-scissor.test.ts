import {createRockPaperScissors, Move, Outcome} from "../components/RockPaperScissors";

describe("rock-paper-scissors", () => {
  describe("rock interactions...", () => {
    it("given player move rock and opponent move paper should return player loses", () => {
      // Arrange
      const playerMove = Move.Rock;
      const opponentMove = Move.Paper;
      const expected = Outcome.PlayerLoses;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    });

    it("given player move rock and opponent move scissors should return player wins", () => {
      // Arrange
      const playerMove = Move.Rock;
      const opponentMove = Move.Scissors;
      const expected = Outcome.PlayerWins;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    })

    it("given player move rock and opponent move rock should return tie", () => {
      // Arrange
      const playerMove = Move.Rock;
      const opponentMove = Move.Rock;
      const expected = Outcome.Tie;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    });
  })

  describe("paper interactions...", () => {
    it("given player move paper and opponent move rock should return player loses", () => {
      // Arrange
      const playerMove = Move.Paper;
      const opponentMove = Move.Rock;
      const expected = Outcome.PlayerWins;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    });

    it("given player move paper and opponent move scissors should return player wins", () => {
      // Arrange
      const playerMove = Move.Paper;
      const opponentMove = Move.Scissors;
      const expected = Outcome.PlayerLoses;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    })

    it("given player move paper and opponent move paper should return tie", () => {
      // Arrange
      const playerMove = Move.Paper;
      const opponentMove = Move.Paper;
      const expected = Outcome.Tie;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    });
  })

  describe("scissors interactions...", () => {
    it("given player move scissors and opponent move paper should return player loses", () => {
      // Arrange
      const playerMove = Move.Scissors;
      const opponentMove = Move.Paper;
      const expected = Outcome.PlayerWins;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    });

    it("given player move scissors and opponent move rock should return player wins", () => {
      // Arrange
      const playerMove = Move.Scissors;
      const opponentMove = Move.Rock;
      const expected = Outcome.PlayerLoses;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    })

    it("given player move scissors and opponent move scissors should return tie", () => {
      // Arrange
      const playerMove = Move.Scissors;
      const opponentMove = Move.Scissors;
      const expected = Outcome.Tie;
      const sut = new createRockPaperScissors()
      // Act
      const actual = sut.play(playerMove, opponentMove)
      // Assert
      expect(actual).toBe(expected)
    });
  })

});

export {};
