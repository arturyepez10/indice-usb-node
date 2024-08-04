import { Course, AcademicPeriod, AcademicSummary } from '../../src/models';
import {
  regular_courses_mocks as mocks
} from '../mocks';

describe("[MODULE] Academic summary tests", () => {
  const academic_periods: AcademicPeriod[] = [];

  beforeAll(() => {
    mocks.forEach(([period_name, year, courses]) => {
      const period = new AcademicPeriod(period_name, year);

      courses.forEach(course => {
        period.add_course(course)
      });

      academic_periods.push(period);
    });
  });

  test("[SUCCESS] Academic summary creation", () => {
    const summary = new AcademicSummary();
    expect(summary).toBeInstanceOf(AcademicSummary);
  });

  test("[SUCCESS] Academic summary starts with zero academic periods", () => {
    const summary = new AcademicSummary();
    expect(summary.academic_periods).toHaveLength(0);
  });

  test("[SUCCESS] Academic summary can add academic periods", () => {
    const summary = new AcademicSummary();
    academic_periods.forEach(period => {
      summary.add_academic_period(period);
    });
  
    expect(summary.academic_periods).toHaveLength(academic_periods.length);
  });

  test("[SUCCESS] we can get the total credits of an academic summary", () => {
    const summary = new AcademicSummary();
    academic_periods.forEach(period => {
      summary.add_academic_period(period);
    });

    expect(summary.total_credits).toBe(31);
  });

  test("[SUCCESS] we can get the total credits passed of an academic summary", () => {
    const summary = new AcademicSummary();
    academic_periods.forEach(period => {
      summary.add_academic_period(period);
    });

    expect(summary.total_credits_passed).toBe(22);
  });

  test("[SUCCESS] we can get the summary grade of an academic summary", () => {
    const summary = new AcademicSummary();
    academic_periods.forEach(period => {
      summary.add_academic_period(period);
    });

    expect(summary.summary_grade()).toBe(3.2258);
  });
});