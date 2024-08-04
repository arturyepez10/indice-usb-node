import Course from "./course";

export class AcademicPeriod {
  public courses: Course[] = [];
  public accumulated_grade: number = 0.0;

  constructor(
    public name: string = "",
    public year: number | undefined = undefined,
  ) { }

  add_course(course: Course): void {
    this.courses.push(course);
  }

  get_full_courses(): Course[] {
    return this.courses.filter(course => !course.removed && course.has_effect);
  }

  get_valid_courses(): Course[] {
    return this.courses.filter(course => !course.removed);
  }

  get total_credits(): number {
    const courses = this.get_valid_courses();

    return courses.reduce((total, course) => total + course.credits, 0);
  }

  get total_credits_passed(): number {
    const courses = this.get_valid_courses();

    return courses.reduce((total, course) => {
      if (course.grade !== "R" && course.grade >= 3) {
        return total + course.credits;
      }

      return total;
    }, 0);
  }

  get_total_credits_by_grade(grade: number): number {
    const courses = this.get_valid_courses();

    return courses.reduce((total, course) => {
      if (course.grade === grade) {
        return total + course.credits;
      }

      return total;
    }, 0);
  }

  get period_grade(): number {
    const courses = this.get_valid_courses();

    const taken_courses = courses.reduce(
      (total, course) => (
        total + course.credits
      ),
      0
    );

    const notes_factor = courses.reduce(
      (total, course) => {
        if (course.grade === "R") {
          return total;
        }

        return total + course.grade * course.credits;
      },
      0
    );

    const grade = taken_courses !== 0 ? notes_factor / taken_courses : 0.0;

    return +grade.toFixed(4);
  }
}

export default AcademicPeriod;