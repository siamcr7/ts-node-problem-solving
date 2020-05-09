/**
 * We will pass the input lines here.
 * And start to write our solution from here.
 */
export class Solution {
  constructor(private inputs: number[]) {
    this.startSolnWithTestCases();
  }

  private startSolnWithTestCases() {
    let lineMark = 0;
    let testCases = (this.inputs[lineMark++]);
    while (testCases--) {
      const n = this.inputs[lineMark++];
      const numbers: number[] = [];
      for (let i = 0; i < n; i++) {
        numbers.push(this.inputs[lineMark++]);
      }
      this.findSoln(n, numbers);
    }
  }

  private findSoln(n: number, numbers: number[]) {
    // write the solution

    // output the result in console
    this.consoleLogResult([]);
  }

  private consoleLogResult(resultToShow: string[]) {
    const result = resultToShow.join(' ').trim();
    console.log(result);
  }
}
