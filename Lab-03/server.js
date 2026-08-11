//Importing Module
const http = require('http');

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
    { id: 13, name: "Mikki Jaiswal", course: "BCA" }
];

//Creating Server
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    // GET all students
    if (req.url === '/students' || req.url === '/students/name') {

        let html = `
            <h1>Students List</h1>
            <hr>
        `;

        students.forEach(student => {
            html += `
                <p>
                    <b>${student.id}. ${student.name}</b>
                    - ${student.course}
                    <a href="/students/${student.id}">View Details</a>
                </p>
            `;
        });

        res.end(html);
    }
    else  if (req.url.startsWith('/students/')) {
        const id = Number(req.url.split('/')[2]);
        const student = students.find(s => s.id === id);
        
        if (student) {
            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Student not found" }));
        }

    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});
server.listen(3000, () => console.log("Server running on port http://localhost:3000"));