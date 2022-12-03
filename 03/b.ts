const input = Deno.readTextFileSync("./input.txt");

const parsed = input.split("\n");

const findGroups = (elphes: string[]) => {
  const result = [];
  for (let i = 0; i < elphes.length; i += 3) {
    result.push(elphes.slice(i, i + 3));
  }
  return result;
};

const grouped = findGroups(parsed);

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

const findOccurrences = (data: string[]): number => {
  const searchDictionary = data[0].split("");
  let score = 0;

  for (const letter of searchDictionary) {
    const letterPresented = data.every((item) => {
      return item.includes(letter);
    });

    if (letterPresented) {
      score = findItemPriority(letter);
    }
  }

  return score;
};

const calculateTotal = grouped.reduce((acc, group) => {
  return acc + +findOccurrences(group);
}, 0);

console.log(calculateTotal);
