const input = Deno.readTextFileSync("./input.txt");

type shapeTypes = "Rock" | "Scissors" | "Paper";
type oponentTypes = "A" | "B" | "C";
type responseTypes = "X" | "Y" | "Z";

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

const convertToShape = (input: oponentTypes | responseTypes): shapeTypes => {
  switch (input) {
    case "A":
    case "X":
      return "Rock";
    case "B":
    case "Y":
      return "Paper";
    case "C":
    case "Z":
      return "Scissors";
  }
};

const playGame = (oponent: oponentTypes, response: responseTypes): number => {
  const oponentShape = convertToShape(oponent);
  const responseShape = convertToShape(response);

  if (oponentShape === responseShape) {
    return gamePoints.draw;
  }

  if (oponentShape === "Rock" && responseShape === "Scissors") {
    return gamePoints.loose;
  }

  if (oponentShape === "Rock" && responseShape === "Paper") {
    return gamePoints.win;
  }

  if (oponentShape === "Scissors" && responseShape === "Rock") {
    return gamePoints.win;
  }

  if (oponentShape === "Scissors" && responseShape === "Paper") {
    return gamePoints.loose;
  }

  if (oponentShape === "Paper" && responseShape === "Rock") {
    return gamePoints.loose;
  }

  if (oponentShape === "Paper" && responseShape === "Scissors") {
    return gamePoints.win;
  }

  throw new Error("No combinations found");
};

const rounds = input.split("\n").map((round) => round.split(" "));

const caclulateTotal = () => {
  let totalPoints = 0;

  for (const round of rounds) {
    const selectedShape = convertToShape(round[1] as responseTypes);

    totalPoints += playGame(
      round[0] as oponentTypes,
      round[1] as responseTypes
    );

    totalPoints += shapePoints[selectedShape];
  }

  return totalPoints;
};

console.log(caclulateTotal());
