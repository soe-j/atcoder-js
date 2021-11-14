import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => {
    return line.split(" ");
  });

const a = Number(input[0][0]);
const b = Number(input[1][0]);
const c = Number(input[1][1]);
const s = input[2][0];

console.log(a + b + c, s);
