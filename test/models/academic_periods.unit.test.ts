import { Course, AcademicPeriod } from '../../src/models';
import {
  regular_courses_mocks as mocks,
  removed_courses_mocks
} from '../mocks';

describe("[MODULE[ Academic period component tests", () => {
  test("[SUCCESS] Academic period creation", () => {
    const period = new AcademicPeriod("name", 2020);

    expect(period).toBeInstanceOf(AcademicPeriod);
    expect(period.name).toBe("name");
    expect(period.year).toBe(2020);
  });

  test("[SUCCESS] Academic period creation without name or year", () => {
    const period = new AcademicPeriod();

    expect(period).toBeInstanceOf(AcademicPeriod);
    expect(period.name).toBe("");
    expect(period.year).toBe(undefined);
  });

  test("[SUCCESS] Academic period starts with zero courses", () => {
    const period = new AcademicPeriod();
    expect(period.courses).toHaveLength(0);
  });

  test("[SUCCESS] Academic period can add courses", () => {
    const period = new AcademicPeriod();
    const course = new Course("MA1111", "Matematicas I", 4, 3);
    period.add_course(course);

    expect(period.courses).toHaveLength(1);
    expect(period.courses[0]).toBe(course);
  });

  test("[SUCCESS] we can calculate the grade of an academic period", () => {
    const [period_name, period_year, courses] = mocks[0];

    const period = new AcademicPeriod(period_name, period_year);
    
    courses.forEach((course)=> {
      period.add_course(course)
    });

    expect(period.period_grade).toBe(3.5333)
  });

  test("[SUCCESS] we can calculate the grade of an academic period with no courses", () => {
    const period = new AcademicPeriod();
    expect(period.period_grade).toBe(0);
  });

  test("[SUCCESS] We can get all of the credits in an academic period", () => {
    const [period_name, period_year, courses] = mocks[0];
    const period = new AcademicPeriod(period_name, period_year);

    courses.forEach((course) => {
      period.add_course(course);
    });

    expect(period.total_credits).toBe(15);
  });

  test("[SUCCESS] We can get all of the credits in an academic period with no courses", () => {
    const period = new AcademicPeriod();
    expect(period.total_credits).toBe(0);
  });

  test("[SUCCESS] We can get all of the credits passed in an academic period", () => {
    const [period_name, period_year, courses] = mocks[0];
    const period = new AcademicPeriod(period_name, period_year);

    courses.forEach((course) => {
      period.add_course(course);
    });

    expect(period.total_credits_passed).toBe(13);
  });

  test("[SUCCESS] We can get the credits  with an specific grade in an academic period", () => {
    const [period_name, period_year, courses] = mocks[0];
    const period = new AcademicPeriod(period_name, period_year);

    courses.forEach((course) => {
      period.add_course(course);
    });

    expect(period.get_total_credits_by_grade(3)).toBe(7);
    expect(period.get_total_credits_by_grade(1)).toBe(2);
  });

  test("[SUCCESS] We can get all of the valid credits in an academic period", () => {
    const [period_name, period_year, courses] = removed_courses_mocks[0];

    const period = new AcademicPeriod(period_name, period_year);

    courses.forEach((course) => {
      period.add_course(course);
    });

    expect(period.get_valid_courses()).toHaveLength(4);
  });

  test("[SUCCESS] We can get all of the full credits in an academic period", () => {
    const [period_name, period_year, courses] = removed_courses_mocks[0];

    const period = new AcademicPeriod(period_name, period_year);

    courses.forEach((course) => {
      period.add_course(course);
    });

    expect(period.get_full_courses()).toHaveLength(3);
  });
});