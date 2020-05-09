import { Solution } from './Solution';
import { isNumber } from 'util';

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

      const newSolution = new Solution(this.processInputString());
    });
  }

  /**
   * Optimized to reduce TLE while taking input
   */
  private processInputString<T>(): T[] {
    const result: T[] = [];

    let madeUp = '';
    for (let i = 0; i < this.inputString.length; i++) {
      const currentChar = this.inputString.charAt(i);

      // if empty or other character is found
      if (currentChar === ' ' || currentChar.length !== currentChar.trim().length) {
        if (madeUp !== '') {
          result.push(madeUp as unknown as T);
          madeUp = '';
        }
      } else {
        madeUp += currentChar.trim();
      }
    }

    if (madeUp !== '') {
      result.push(madeUp as unknown as T);
    }

    return result;
  }
}
