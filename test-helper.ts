import { execSync } from "child_process";
import { readFileSync, readdirSync } from "fs";
import { describe, test, expect } from "@jest/globals";

export const testTaskWithAllExamples = (taskDir: string) => {
  readdirSync(`${taskDir}/examples`, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .forEach((exampleName: string) => {
      describe(`example ${exampleName}`, () => {
        const exampleDir = `${taskDir}/examples/${exampleName}`;

        const input = readFileSync(`${exampleDir}/input.txt`);

        const actual = execSync(`ts-node ${taskDir}/index.ts`, {
          input,
        }).toString();

        const expected = readFileSync(`${exampleDir}/output.txt`).toString();

        test("check", () => {
          expect(actual).toBe(expected);
        });
      });
    });
};
