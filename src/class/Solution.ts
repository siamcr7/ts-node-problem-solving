/**
 * We will pass the input lines here.
 * And start to write our solution from here.
 */
export class Solution {
  constructor(private inputs: string[]) {
    this.startSoln();
  }

  private startSoln() {
    const testCases = (this.inputs[0] as unknown) as number;
    for (let i = 1; i <= testCases; i++) {
      this.printResult(this.inputs[i]);
    }
  }

  private printResult(word: string) {
    if (word.length <= 10) {
      console.log(word);
    } else {
      const wordLen = word.length;
      let result = word.charAt(0);
      result += (wordLen - 2).toString();
      result += word.charAt(wordLen - 1);
      console.log(result);
    }
  }
}
