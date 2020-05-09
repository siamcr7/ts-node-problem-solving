/**
 * We will pass the input lines here.
 * And start to write our solution from here.
 */
export class Solution {
  constructor(private inputs: number[]) {
    this.startSoln();
  }

  private startSoln() {
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
    const sorted = numbers.sort((a: number, b: number) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    this.soln2(n, sorted);
    return;

    let iIdx = -1;
    let jIdx = -1;
    let minDiff: number = Math.abs(-10000000000 - 10000000000);

    for (let i = 0; i < n - 1; i++) {
      const diff = Math.abs(sorted[i] - sorted[i + 1]);
      if (diff < minDiff) {
        minDiff = diff;
        iIdx = i;
        jIdx = i + 1;
      }
    }

    const resultedNumbers: number[] = [];
    resultedNumbers.push(sorted[iIdx]);
    resultedNumbers.push(sorted[jIdx]);

    while (true) {
      if (resultedNumbers.length === n) {
        break;
      }

      let iValue = Math.abs(-10000000000 - 10000000000);
      let jValue = Math.abs(-10000000000 - 10000000000);
      if (iIdx - 1 >= 0) {
        iValue = Math.abs(sorted[iIdx] - sorted[iIdx - 1]);
      }
      if (jIdx + 1 < n) {
        jValue = Math.abs(sorted[jIdx] - sorted[jIdx + 1]);
      }

      // TODO: = eita ki matter kore?
      if (iValue < jValue) {
        iIdx--;
        resultedNumbers.push(sorted[iIdx]);
      } else {
        jIdx++;
        resultedNumbers.push(sorted[jIdx]);
      }
    }

    const result = resultedNumbers.join(' ').trim();
    console.log(result);
  }

  private soln2(n: number, sorted: number[]) {
    let iIdx = Math.floor(n / 2);
    let jIdx = iIdx;
    // console.log('Starting Round: ', iIdx);
    const resultedNumbers: number[] = [];
    resultedNumbers.push(sorted[iIdx]);

    let moveCount = 0;
    if (n % 2 === 0) {
      moveCount++;
    }
    while (true) {
      if (resultedNumbers.length === n) {
        break;
      }

      const goRight = (moveCount % 2) === 0;
      if (goRight === true) {
        if (jIdx + 1 < n) {
          jIdx++;
          resultedNumbers.push(sorted[jIdx]);
        } else {
          iIdx--;
          resultedNumbers.push(sorted[iIdx]);
        }
      } else if (goRight === false) {
        if (iIdx - 1 >= 0) {
          iIdx--;
          resultedNumbers.push(sorted[iIdx]);
        } else {
          jIdx++;
          resultedNumbers.push(sorted[jIdx]);
        }
      }

      moveCount++;
    }

    const result = resultedNumbers.join(' ').trim();
    console.log(result);
  }
}
