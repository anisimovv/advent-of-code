const input = Deno.readTextFileSync("./input.txt");

const parsed = input.split("\n");

const backPack = parsed.map((item) => {
  const middle = item.length / 2;

  return [item.substring(0, middle), item.substring(middle, item.length)];
});

const findDublicates = (a: string, b: string) => {
  for (const item of a) {
    if (b.includes(item)) {
      return item;
    }
  }
};

const findItemPriority = (letter: string) => {
  const charCode = letter.charCodeAt(0);

  // check if upper or lower and add offset
  if (charCode >= 65 && charCode <= 90) {
    return charCode - 65 + 27;
  } else if (charCode >= 97 && charCode <= 122) {
    return charCode - 96;
  }

  throw new Error("no item found");
};

const calculatePriority = (backPack: string[][]) => {
  const result = [];

  for (const item of backPack) {
    const [c1, c2] = item;
    const dublicate = findDublicates(c1, c2);
    result.push(dublicate);
  }

  return result.reduce((acc, item) => {
    return acc + findItemPriority(item as string);
  }, 0);
};


console.log(calculatePriority(backPack));
