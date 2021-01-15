import { SolutionBase } from '../../class/SolutionBase';

export class TwoSum extends SolutionBase<number[]> {
  constructor(protected input: number[]) {
    super(input);
  }

  startSolution(): void {
    const nums = this.input.slice(0, this.input.length - 1);
    const target = this.input[this.input.length - 1];

    console.log(nums);
    console.log(target);

    console.log(this.twoSum(nums, target));
  }

  private twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }
}
