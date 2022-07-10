if (!process.argv[2]) throw new Error("argv[2] is empty");

const paths = process.argv[2].split("/");

const contestName = paths[4];
const taskName = paths[6];

console.log({ contestName, taskName });
