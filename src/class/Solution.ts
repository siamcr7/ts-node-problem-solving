/**
 * We will pass the input lines here.
 * And start to write our solution from here.
 */
export class Solution {
  constructor(private inputs: number[]) {
    this.oneTimeGeneration();
    this.startSolnWithTestCases();
  }

  private cumSumTwoPow: number[] = [];

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

  private oneTimeGeneration() {
    this.generateCumulativeSumOfPowerOfTwo();
  }

  private findSoln(n: number, numbers: number[]) {
    // write the solution

    let maxValue = numbers[0];
    let result = 0;
    for (let i = 1; i < n; i++) {
      if (numbers[i] < maxValue) {
        const resultObj = this.findTheIndex(numbers[i], maxValue);
        result = Math.max(result, resultObj.result);
      }

      maxValue = Math.max(maxValue, numbers[i]);
    }

    console.log(result);
  }

  private findTheIndex(currentValue: number, numberToBeat: number) {
    const resultObj: {result: number, newValue: number} = {
      newValue: currentValue,
      result: 0
    };

    for (let i = 0; i < this.cumSumTwoPow.length; i++) {
      const pow2ToAdd = this.cumSumTwoPow[i];
      if (currentValue + pow2ToAdd >= numberToBeat) {
        resultObj.newValue = currentValue + pow2ToAdd;
        resultObj.result = i + 1;
        break;
      }
    }

    return resultObj;
  }

  private generateCumulativeSumOfPowerOfTwo() {
    let currentCumSum = 1;
    let pow2Value = 1;

    this.cumSumTwoPow.push(currentCumSum);

    const maxLimit = 1000000000 + 1000000000 + 10;
    while (pow2Value <= maxLimit) {
      pow2Value *= 2;
      currentCumSum += pow2Value;

      this.cumSumTwoPow.push(currentCumSum);
    }
  }

  private consoleLogResult(resultToShow: string[]) {
    const result = resultToShow.join(' ').trim();
    console.log(result);
  }
}
