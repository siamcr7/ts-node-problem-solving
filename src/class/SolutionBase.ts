export abstract class SolutionBase<TInput> {
  constructor(protected input: TInput) {
  }

  protected abstract startSolution(): void;
}
