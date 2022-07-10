import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => {
    return line.split(" ");
  });

const a = Number(input[0][0]);
const b = Number(input[0][1]);
console.log((a * b) % 2 ? "Odd" : "Even");
