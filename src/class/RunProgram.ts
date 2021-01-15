import { Solution } from './Solution';
import { isNumber } from 'util';
import { TwoSum } from '../solutions/leet-code/two-sum';

/**
 * The program will start from here
 */
export class RunProgram {
  inputString = '';

  constructor() {
    this.inputString = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (c) => (this.inputString += c));
    process.stdin.on('end', () => {

      const processedData = this.processInputString(true) as number[];
      const sol = new TwoSum(processedData);
    });
  }

  /**
   * Optimized to reduce TLE while taking input
   */
  private processInputString(isAllNumber: boolean): (number | string)[] {
    const result: (number | string)[] = [];

    let madeUp = '';
    for (let i = 0; i < this.inputString.length; i++) {
      const currentChar = this.inputString.charAt(i);

      // if empty or other character is found
      if (currentChar === ' ' || currentChar.length !== currentChar.trim().length) {
        if (madeUp !== '') {
          if (isAllNumber) {
            result.push(+(madeUp));
          } else {
            result.push(madeUp);
          }
          madeUp = '';
        }
      } else {
        madeUp += currentChar.trim();
      }
    }

    if (madeUp !== '') {
      if (isAllNumber) {
        result.push(+(madeUp));
      } else {
        result.push(madeUp);
      }
    }

    return result;
  }
}
