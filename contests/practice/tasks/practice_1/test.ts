import { execSync } from "child_process";
import { readFileSync, readdirSync } from "fs";
import { describe, test, expect } from "@jest/globals";

const check = (id: string) => {
  describe(`example ${id}`, () => {
    const input = readFileSync(`${__dirname}/examples/${id}/input.txt`);

    const actual = execSync(`ts-node ${__dirname}/index.ts`, {
      input,
    }).toString();

    const expected = readFileSync(
      `${__dirname}/examples/${id}/output.txt`
    ).toString();

    test("check", () => {
      expect(actual).toBe(expected);
    });
  });
};

const exampleIDs = readdirSync(`${__dirname}/examples`, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

exampleIDs.forEach((id) => {
  check(id);
});
