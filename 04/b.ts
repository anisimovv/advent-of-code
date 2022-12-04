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

let overlaps = 0;

const checkOccurance = (number: number, gap: number[]) => {
  return gap[0] <= number && number <= gap[1];
};

for (const tuple of tuples) {
  const [firstSection, secondSection] = tuple;

  if (
    checkOccurance(firstSection[0], secondSection) ||
    checkOccurance(firstSection[1], secondSection) ||
    checkOccurance(secondSection[0], firstSection) ||
    checkOccurance(secondSection[1], firstSection)
  ) {
    overlaps++;
  }
}

console.log(overlaps);
