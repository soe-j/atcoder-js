const input = require("fs").readFileSync("/dev/stdin", "utf8");

const rows = input
  .split("\n")
  .filter((row: string) => row)
  .map((row: string) => row.split(" ").map((n) => Number(n)));

const num = rows[0][0];
const weight = rows[0][1];

const items = rows.slice(1).map((row: [number, number]) => {
  return { weight: row[0], value: row[1] };
});

// [
//   i0までで [w0 maxV, w1 maxV, ...],
//   i1までで [w0 maxV, w1 maxV, ...],
//   ...
// ];
const dp = new Array(num + 1).fill(0).map((_) => new Array(weight + 1).fill(0));

for (let i = 0; i < num; i++) {
  for (let w = 0; w <= weight; w++) {
    if (w >= items[i].weight) {
      dp[i + 1][w] = Math.max(
        dp[i][w - items[i].weight] + items[i].value,
        dp[i][w]
      );
    } else {
      dp[i + 1][w] = dp[i][w];
    }
  }
}

console.log(dp[num][weight]);
