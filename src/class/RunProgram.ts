import { Solution } from './Solution';

export class RunProgram {
  inputString = '';

  constructor() {
    this.inputString = '';

    process.stdin.on('data', (c) => (this.inputString += c));
    process.stdin.on('end', () => {
      const { EOL } = require('os');
      const lines = this.inputString.split(
        EOL
      ); /*your input text, split by lines*/
      //   console.log(lines);
      //   solution(lines.filter(line => line.trim().length > 0));
      const newSolution = new Solution(lines.filter((line) => line.trim().length > 0));
    });
  }
}
