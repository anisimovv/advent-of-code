const input = Deno.readTextFileSync("./input.txt");

type shapeTypes = "Rock" | "Scissors" | "Paper";
type oponentTypes = "A" | "B" | "C";

type desiredOutcome = "X" | "Y" | "Z";

enum oponentShapeMap {
  A = "Rock",
  B = "Paper",
  C = "Scissors",
}

enum desiredOutcomeMap {
  X = "loose",
  Y = "draw",
  Z = "win",
}

enum gamePoints {
  win = 6,
  draw = 3,
  loose = 0,
}

enum shapePoints {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

const findSuitableShape = (
  oponent: oponentTypes,
  desiredOutcome: desiredOutcome
): shapeTypes => {
  const oponentShape = oponentShapeMap[oponent];
  const outcome = desiredOutcomeMap[desiredOutcome];

  if (outcome === "draw") {
    return oponentShape;
  }

  if (outcome === "win") {
    switch (oponentShape) {
      case "Rock":
        return "Paper";
      case "Paper":
        return "Scissors";
      case "Scissors":
        return "Rock";
    }
  }

  if (outcome === "loose") {
    switch (oponentShape) {
      case "Rock":
        return "Scissors";
      case "Paper":
        return "Rock";
      case "Scissors":
        return "Paper";
    }
  }

  throw new Error("No shapes found, check input");
};

const rounds = input.split("\n").map((round) => round.split(" "));

const caclulateTotal = () => {
  let totalPoints = 0;

  for (const round of rounds) {
    const desiredOutcome = desiredOutcomeMap[round[1] as desiredOutcome];
    const pointsForGame = gamePoints[desiredOutcome];

    const shapeForDesiredOutcome = findSuitableShape(
      round[0] as oponentTypes,
      round[1] as desiredOutcome
    );
    const pointsForShape = shapePoints[shapeForDesiredOutcome];

    totalPoints += pointsForGame;
    totalPoints += pointsForShape;
  }

  return totalPoints;
};

console.log(caclulateTotal());
