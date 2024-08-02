
export class Course {
  constructor(
    public code: string,
    public name: string,
    public credits: number,
    public grade: number | "R",
    public removed: boolean = false,
    public has_effect: boolean = true
  ) {}
}

export default Course;