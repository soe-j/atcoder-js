import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => {
    return line.split(" ");
  });

const N = Number(input[0][0]);
const S = input[1][0];

const numbers = S.split("").map((_, index) => {
  const x = S.slice(index);
  const y = S.slice(0, index);

  const commonHash = x
    .split("")
    .filter((c) => {
      return y.includes(c);
    })
    .reduce<{ [index: string]: boolean }>((hash, c) => {
      hash[c] = true;
      return hash;
    }, {});
  const common = Object.keys(commonHash);
  return common.length;
});

console.log(Math.max(...numbers));
