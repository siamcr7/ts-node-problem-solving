import { SolutionBase } from "../../class/SolutionBase";

export class SolutionLCOAPN extends SolutionBase<string> {
  constructor(protected input: string) {
    super(input);
  }

  startSolution() {
    console.log(this.letterCombination(this.input));
  }

  private letterCombination(digits: string): string[] {
    const mobilePad: string[][] = [
      [],
      [],
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
      ['j', 'k', 'l'],
      ['m', 'n', 'o'],
      ['p', 'q', 'r', 's'],
      ['t', 'u', 'v'],
      ['w', 'x', 'y', 'z'],
    ];

    const len = digits.length;
    const result = (currentPosition: number, made: string): string[] => {
      if (currentPosition === len) {
        if (made.length === 0) {
          return [];
        }
        return [made];
      }

      let ret: string[] = [];
      mobilePad[+digits[currentPosition]].forEach(digit => {
        ret = ret.concat(result(currentPosition + 1, made + digit));
      });

      return ret;
    };

    return result(0, '');
  }
}
