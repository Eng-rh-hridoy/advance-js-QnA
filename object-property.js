const students = [
    {
        Name: "Omer Sunny",
        Id: 001,
        Cgpa: 2.89
    },
    {
        Name: "Manna",
        Id: 002,
        Cgpa: 3.05
    },
    {
        Name: "Moyouri",
        Id: 003,
        Cgpa: 3.58
    },
    {
        Name: "Dipjol",
        Id: 004,
        Cgpa: 3.86
    }
];

// console.log(students);

// get those students name 

const names = students.filter(x => x.Cgpa > 3.5).map(x => x.Name);
console.log(names);