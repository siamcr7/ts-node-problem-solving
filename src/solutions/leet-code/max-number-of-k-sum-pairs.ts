import { SolutionBase } from "../../class/SolutionBase";

export class LCMaxNumberOfKSumPairs extends SolutionBase<number[]> {
  constructor(protected inp: number[]) {
    super(inp);
    this.startSolution();
  }

  startSolution() {
    const k = this.inp[this.inp.length - 1];
    const nums = this.inp.slice(0, this.inp.length - 1);
    console.log(this.lcSolution(nums, k));
  }

  private lcSolution(nums: number[], k: number) {
    const mappedNum = new Map<number, number>();
    const kMinus = nums.map(num => {
      if (mappedNum.has(num) === false) {
        mappedNum.set(num, 0);
      }
      mappedNum.set(num, (mappedNum.get(num) as number) + 1);

      return k - num;
    });

    let ans = 0;
    kMinus.forEach((num, idx) => {
      const other = nums[idx];
      if (((mappedNum.get(other) as number) > 0 &&
        (mappedNum.get(num) as number) > 0 &&
        other !== num) ||
          (other === num &&
          (mappedNum.get(other) as number) > 1)) {
        mappedNum.set(other, (mappedNum.get(other) as number) - 1);
        mappedNum.set(num, (mappedNum.get(num) as number) - 1);
        ans++;
      }
    });

    return ans;
  }
}