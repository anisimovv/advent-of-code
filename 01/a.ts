const input = Deno.readTextFileSync("./input.txt");

const findGroups = (array: string[]): string[][] => {
  const result = [];
  let group = [];

  for (const item of array) {
    if (item.length === 0) {
      result.push(group);
      group = [];
    } else {
      group.push(item);
    }
  }

  return result;
};

const calories = input.split("\n");

const groupedCallories = findGroups(calories);

const summedGroups = groupedCallories.map((group) => {
  return group.reduce((acc, item) => {
    return acc + +item;
  }, 0);
});

const sortedGroups = summedGroups.sort((a, b) => b - a);

const result = sortedGroups[0];

console.log(result);
