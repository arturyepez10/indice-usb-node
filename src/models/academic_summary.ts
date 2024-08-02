import { AcademicPeriod } from "./academic_period";

export class AcademicSummary {
  public academic_periods: AcademicPeriod[] = [];

  add_academic_period(academic_period: AcademicPeriod): void {
    this.academic_periods.push(academic_period);
  }

  get total_credits(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.total_credits, 0);
  }

  get total_credits_passed(): number {
    return this.academic_periods.reduce((total, academic_period) => total + academic_period.total_credits_passed, 0);
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

    return credits_enrolled !== 0 ? factor_notes / credits_enrolled : 0.0;
  }
}

export default AcademicSummary;