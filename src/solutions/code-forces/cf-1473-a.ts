import { SolutionBase } from "../../class/SolutionBase";

export class Cf1473A extends SolutionBase<number[]> {
  constructor(protected inp: number[]) {
    super(inp);
    this.startSolution();
  }

  startSolution() {
    let testCases = this.inp[0];
    let i = 1;
    while (testCases > 0) {
      const n = this.inp[i++];
      const d = this.inp[i++];
      const numbers: number[] = [];
      for (let j = 0; j < n; j++) {
        numbers.push(this.inp[i++]);
      }
      this.solveSingleTestCase(numbers, d);
      testCases--;
    }
  }

  solveSingleTestCase(inputNumbers: number[], d: number) {
    const sorted = [...inputNumbers.sort((a, b) => a - b)];
    const isPossible = (sorted[sorted.length - 1] <= d) || (sorted[0] + sorted[1]) <= d;
    console.log(isPossible ? 'YES' : 'NO');
  }
}