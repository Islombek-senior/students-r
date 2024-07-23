export const studentsData = [
  {
    id: "1",
    name: "Adham",
    lastName: "Obidjonov",
    classId: 1,
    adress: "Farg'ona",
  },
  {
    id: " 2",
    name: "Anvar",
    lastName: "Obidjonov",
    classId: 2,
    adress: "Farg'ona",
  },
  {
    id: " 3",
    name: "Elmurod",
    lastName: "Obidjonov",
    classId: 1,
    adress: "Farg'ona",
  },
  {
    id: " 4",
    name: "G'ayrat",
    lastName: "Obidjonov",
    classId: 2,
    adress: "Farg'ona",
  },
  {
    id: " 5",
    name: "Ailbek",
    lastName: "Obidjonov",
    classId: 1,
    adress: "Farg'ona",
  },
  {
    id: " 6",
    name: "Obid",
    lastName: "Obidjonov",
    classId: 2,
    adress: "Farg'ona",
  },
  {
    id: " 7",
    name: "Ronaldo",
    lastName: "Obidjonov",
    classId: 1,
    adress: "Farg'ona",
  },
  {
    id: " 8",
    name: "Dilxush",
    lastName: "Obidjonov",
    classId: 2,
    adress: "Farg'ona",
  },
  {
    id: " 9",
    name: "Dilmurod",
    lastName: "Obidjonov",
    classId: 1,
    adress: "Farg'ona",
  },
  {
    id: "10",
    name: "Shomurod",
    lastName: "Obidjonov",
    classId: 2,
    adress: "Farg'ona",
  },
];
export const classesData = [
  {
    id: 1,
    name: "10-A",
  },
  {
    id: 2,
    name: "10-B",
  },
];

export type teach = {
  id: number;
  name: string;
  lastName: string;
  classId: number;
  subjectId: number;
  directClass: string;
};

export const teacherData: teach[] = [
  {
    id: 1,
    name: "Shohida",
    lastName: "Obidjonova",
    classId: 1,
    subjectId: 1,
    directClass: "10-A",
  },
  {
    id: 2,
    name: "Dilnura",
    lastName: "Arslaonova",
    classId: 2,
    subjectId: 3,
    directClass: "10-B",
  },
];
export const subjectsData = [
  {
    id: 1,
    name: "Mathematics",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "Biologiy",
  },
  {
    id: 4,
    name: "History",
  },
  {
    id: 5,
    name: "Information",
  },
];
