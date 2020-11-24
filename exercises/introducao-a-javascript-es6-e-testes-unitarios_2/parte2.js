const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (lesson, key, value) => {
  lesson[key] = value;
  // console.log(lesson);
}
addShift(lesson2, 'turno', 'tarde');

const printKeys = (lesson) => console.log(Object.keys(lesson));
// printKeys(lesson2);

const lessonLenght = (lesson) => console.log(`O objeto tem ${Object.keys(lesson).length} de comprimento.`);
// lessonLenght(lesson1);

const printValues = (lesson) => console.log(Object.values(lesson));
// printValues(lesson1);

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

// console.log(allLessons);

const totalStudents = (obj) => {
  let sum = 0;
  for (key in allLessons) {
    sum += allLessons[key].numeroEstudantes;
  }
  return sum;
}
// console.log(totalStudents(allLessons));

const getValueByNumber = (lesson, value) => {
  const lessonValues = Object.values(lesson)
  console.log(`Output: '${lessonValues[value]}'`)
}
// getValueByNumber(lesson1, 0);

const verifyPair = (lesson, key, value) => {
  let resultado;
  if (Object.keys(lesson).includes(key) && lesson[key] === value) {
    resultado = true;
  } else { 
    resultado = false;
  }
  return resultado;
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))
