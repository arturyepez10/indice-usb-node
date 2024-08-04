import { Course } from "../src/models";

export const regular_courses_mocks: [string, number, Course[]][] = [
  [
    "Abril-Julio", 2016,
    [
      new Course("MA1111", "Matematicas I", 4, 3),
      new Course("CSA211", "Sociales I", 3, 5),
      new Course("LLA111", "Lenguaje I", 3, 3),
      new Course("ID1111", "Ingles I", 3, 5),
      new Course("MA1511", "Curso de Geometria", 2, 1)
    ]
  ],
  [
    "Septiembre-Diciembre", 2016,
    [
      new Course("MA1112", "Matematicas II", 4, 2),
      new Course("FS1111", "Fisica I", 3, 1),
      new Course("CSA212", "Sociales II", 3, 3),
      new Course("LLA112", "Lenguaje II", 3, 4),
      new Course("ID1112", "Ingles II", 3, 5)
    ]
  ]
]

export const removed_courses_mocks: [string, number, Course[]][] = [
  [
    "Abril-Julio", 2016,
    [
      new Course("MA1111", "Matematicas I", 4, "R", true),
      new Course("CSA211", "Sociales I", 3, 5, false, false),
      new Course("LLA111", "Lenguaje I", 3, 3, false),
      new Course("ID1111", "Ingles I", 3, 5, false),
      new Course("MA1511", "Curso de Geometria", 2, 1, false)
    ]
  ]
]