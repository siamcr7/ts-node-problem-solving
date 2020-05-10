import { Solution } from './Solution';

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
  private processInputString(): number[] {
    const result: number[] = [];

    let madeUp = '';
    for (let i = 0; i < this.inputString.length; i++) {
      const currentChar = this.inputString.charAt(i);

      // if empty or other character is found
      if (currentChar === ' ' || currentChar.length !== currentChar.trim().length) {
        if (madeUp !== '') {
          result.push(+madeUp);
          madeUp = '';
        }
      } else {
        madeUp += currentChar.trim();
      }
    }

    if (madeUp !== '') {
      result.push(+madeUp);
    }

    return result;
  }
}
