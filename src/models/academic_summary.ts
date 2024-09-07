import { AcademicPeriod } from "./academic_period";

export class AcademicSummary {
  public academic_periods: AcademicPeriod[] = [];

  add_academic_period(academic_period: AcademicPeriod): void {
    this.academic_periods.push(academic_period);
  }

  summary_grade(): number {
    let credits_enrolled = 0;
    let factor_notes = 0.0;

    for (let period of this.academic_periods) {
      const courses = period.get_valid_courses();

      for (let course of courses) {
        if (course.grade === "R") {
          continue;
        }

        credits_enrolled += course.credits;
        factor_notes += course.grade * course.credits;
      }
    }

    const grade = credits_enrolled !== 0 ? factor_notes / credits_enrolled : 0.0;

    return +grade.toFixed(4);
  }

  /* --------------------------- */
  /* Statistics function helpers */
  /* --------------------------- */

  get total_courses(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.courses.length, 0);
  }

  get total_credits(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.total_credits, 0);
  }

  get total_courses_passed(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.total_courses_passed, 0);
  }

  get total_credits_passed(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.total_credits_passed, 0);
  }

  get total_courses_removed(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.total_courses_by_grade("R"), 0);
  }

  get total_credits_removed(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.get_total_credits_by_grade("R"), 0);
  }

  get total_courses_failed(): number {
    return this.academic_periods.reduce(
      (total, academic_period) => 
        total
        + academic_period.total_courses_by_grade(1)
        + academic_period.total_courses_by_grade(2),
      0
    );
  }

  get total_credits_failed(): number {
    return this.academic_periods.reduce(
      (total, academic_period) => 
        total
        + academic_period.get_total_credits_by_grade(1)
        + academic_period.get_total_credits_by_grade(2),
      0
    );
  }
}

export default AcademicSummary;