const output = (days: number, jobList: { day: number; price: number }[]) => {
  jobList = jobList.filter((job) => job.day <= days);
  jobList.sort((job1, job2) => job2.price - job1.price);

  let totalPrice = 0;

  // 最終日からやるバイトを決定
  for (let leftDays = 1; leftDays <= days; leftDays++) {
    const jobIndex = jobList.findIndex((job) => job.day <= leftDays);
    if (jobIndex === -1) continue;

    totalPrice += jobList[jobIndex].price;
    jobList.splice(jobIndex, 1);
  }

  return totalPrice;
};

const input: number[][] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line: string) => {
    return line.split(" ").map((n) => Number(n));
  });

const jobNum = input[0][0];
const days = input[0][1];
const jobList = input.slice(1).map((dayPrice) => {
  return { day: dayPrice[0], price: dayPrice[1] };
});

console.log(output(days, jobList));
