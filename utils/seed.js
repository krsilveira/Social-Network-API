// GLOBAL VARIABLES

const connection = require('../config/connection');
const { Course, Student } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');


// console.log connection
connection.on('error', (err) => err);
connection.once('open', async () => {
  console.log('connected');



  // delete existing course/students
  await Course.deleteMany({});
  await Student.deleteMany({});


  const students = [];
  // Loop 20 times --studentys are added to empty array
  // RandomAssignment objects are recevied via imported function from data.js file
   for (let i = 0; i < 20; i++) {
  
    const assignments = getRandomAssignments(20);
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    students.push({
      first,
      last,
      github,
      assignments,
    });
  }

  // ADDED STUDENTS
  await Student.collection.insertMany(students);

  // course added to collection
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });



  // SEED DATA LOG OUT 
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
