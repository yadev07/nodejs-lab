const express = require('express');
const app = express();

//Students data
const students = [
    { id: 1, name: "Aditya Soni", course: "BCA" },
    { id: 2, name: "Ayush Ram Tripathi", course: "BCA" },
    { id: 3, name: "Bhaskar Mall", course: "BCA" },
    { id: 4, name: "Gouri Tyagi", course: "BCA" },
    { id: 5, name: "Kanak Sharma", course: "BCA" },
    { id: 6, name: "Nisha Bharti", course: "BCA" },
    { id: 7, name: "Pragya Gupta", course: "BCA" },
    { id: 8, name: "Shreya Singh", course: "BCA" },
    { id: 9, name: "Reshab Khatiwada", course: "BCA" },
    { id: 10, name: "Sayon Koley", course: "BCA" },
    { id: 11, name: "Yadev Singh Nishad", course: "BCA" },
    { id: 12, name: "Shreya Kashyap", course: "BCA" },
    { id: 13, name: "Mikki Jaiswal", course: "BCA" },
    { id: 14, name: "Akansha Rana", course: "BIT" },
    { id: 15, name: "Dolly Verma", course: "BIT" },
    { id: 16, name: "Minakshi", course: "BIT" },
    { id: 17, name: "Gourav Kumar", course: "BIT" },
    { id: 18, name: "Gourav Dungriyal", course: "BIT" },
    { id: 19, name: "Saroj Poddar", course: "BIT" },
    { id: 20, name: "Amit Tiwari", course: "BIT" },
    { id: 21, name: "Sneha Pal", course: "BIT" },
    { id: 22, name: "Pragya Maurya", course: "BIT" },
    { id: 23, name: "Sakshi Pal", course: "BIT" },
    { id: 24, name: "Aman Pratap Singh", course: "BIT" }
];

// GET all bca students
app.get('/students/course/bca', (req, res)=>{
    
    const bcaStudents = students.filter(s => s.course.toLowerCase() === 'bca');
    res.json(bcaStudents);
    
}); 

// GET all bit students
app.get('/students/course/bit', (req, res)=>{

    const bitStudents = students.filter(s => s.course.toLowerCase() === 'bit');
    res.json(bitStudents);

}); 

app.listen(3000, () => console.log("Server running on port http://localhost:3000"));