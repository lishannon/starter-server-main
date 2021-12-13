const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "68st",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  email:"@gmail.com"
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;