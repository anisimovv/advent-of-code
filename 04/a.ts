const input = Deno.readTextFileSync("./input.txt");
// const input = Deno.readTextFileSync("./test.txt");

const parsed = input.split("\n");

const tuples = parsed.map((item) => {
  const parsedItem = item.split(",");
  const tuple = parsedItem.map((el) => {
    return el.split("-").map((el) => +el);
  });

  return tuple;
});

let fullyContainedPairs = 0;

for (const tuple of tuples) {
  const [firstSection, secondSection] = tuple;

  if (
    (firstSection[0] <= secondSection[0] &&
      firstSection[1] >= secondSection[1]) ||
    (secondSection[0] <= firstSection[0] && secondSection[1] >= firstSection[1])
  ) {
    fullyContainedPairs++;
  }
}

console.log(fullyContainedPairs);
