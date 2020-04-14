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
      // const { EOL } = require('os');
      // const lines = this.inputString.split(EOL); /*your input text, split by lines*/
      //   // console.log(lines);
      //   solution(lines.filter(line => line.trim().length > 0));
      // const newSolution = new Solution(
      //   this.convertSpaceSepartedValues(lines.filter((line) => line.trim().length > 0)).map((line) => +line)
      // );
      const newSolution = new Solution(this.convertSpaceSepartedValues());
    });
  }

  private convertSpaceSepartedValues(): number[] {
    // let result: string[] = [];

    // lines.forEach(line => {
    //   // result = [...result, ...line.split(' ')];

    // });
    // const { EOL } = require('os');
    const result: number[] = [];

    // console.log('SEE INP: ',  this.inputString);

    let madeUp = '';
    for (let i = 0; i < this.inputString.length; i++) {
      const currentChar = this.inputString.charAt(i);
      if (currentChar === ' ' || currentChar.length !== currentChar.trim().length) {
        // madeUp += currentChar;
        if (madeUp !== '') {
          result.push(+madeUp);
          madeUp = '';
        }
      } else {
        // console.log('SEE CHAR     : ', currentChar);
        // console.log('No trim: ', currentChar.length);
        // console.log('w/ trim: ', currentChar.trim().length);
        // // console.log('SEE CHAR num1: ', +currentChar);
        // // console.log('SEE CHAR num2: ', (currentChar as unknown as number).toString());
        madeUp += currentChar.trim();
      }
      // console.log('Made up      : ', madeUp);
    }

    if (madeUp !== '') {
      result.push(+madeUp);
    }

    // console.log('SEE: ', result);
    return result;
  }
}
