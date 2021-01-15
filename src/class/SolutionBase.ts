export abstract class SolutionBase<TInput> {
  constructor(protected input: TInput) {
    this.startSolution();
  }

  abstract startSolution(): void;
}
