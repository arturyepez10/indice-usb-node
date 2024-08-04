import { Course } from '../../src/models/course';

describe("[MODULE] Course tests", () => {
  test("[SUCCESS] Course creation", () => {
    const course = new Course("MA1111", "Matematicas I", 4, 3);
    expect(course).toBeInstanceOf(Course);
    expect(course.code).toBe("MA1111");
    expect(course.name).toBe("Matematicas I");
    expect(course.credits).toBe(4);
    expect(course.grade).toBe(3);
  });
});