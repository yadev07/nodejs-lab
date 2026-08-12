const express = require('express');
const server = express();

const students = [
    { id: 1, name: "Aman", course: "BCA", marks: 72 },
    { id: 2, name: "Raju", course: "BCA", marks: 88 },
    { id: 3, name: "Moksh", course: "BIT", marks: 56 },
    { id: 4, name: "Raj", course: "BIT", marks: 90 },
    { id: 5, name: "Shasheekant", course: "BIT", marks: 99 },
    { id: 6, name: "Kshitij", course: "MCA", marks: 40 },
    { id: 7, name: "Sunil", course: "MCA", marks: 60 },
    { id: 8, name: "Nikhil", course: "MCA", marks: 77 }
];

//Home
server.get('/', (req, res)=>{
    res.json({
        message: "Student API is running..!"
    });
});


server.get('/students', (req, res)=>{

    let result = [...students];

    const {course, minMarks, search, sort, order = 'asc'} = req.query;

    //Validate minMarks
    if( minMarks !== undefined && isNaN(Number(minMarks))){
        return res.status(400).json({
            error: "minMarks must be a number"
            
        });
    }

    //Validate sort
    if (sort && sort !== 'name' && sort !== 'marks'){
        return res.status(404).json({
            message: "Sort must be either 'name' or 'marks'"
        });
    }

    //Course filter
    if(course){
        result = result.filter(student => 
            student.course.toLowerCase() === course.toLowerCase()
        );
    }

    //Minimum marks filter
    if (minMarks !== undefined){
        result = result.filter(
            student => student.marks >= Number(minMarks)
        );
    }

    //Search filter
    if (search){
        result = result.filter(
            student => student.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    //Sorting 
    if (sort){
        result.sort((a,b)=>{ //JS's '.sort()' uses this comaprison to decide who comes first.

            let comparison;
            
            if (sort === 'marks'){
                comparison = a.marks - b.marks;
            } else {
                comparison = a.name.localeCompare(b.name); //'localeCompare()' compare strings alphabetically
            }

            return order === 'desc' ? -comparison : comparison ;

        });
    }

    res.json({
        count: result.length,
        students: result
    });
});

//Dynamic routing (course)
server.get('/students/course/:course', (req, res)=>{
    
    let result = students.filter(student => student.course.toLowerCase() === req.params.course.toLowerCase());

    const {minMarks, sort, order = 'asc'} = req.query;
    
    //minMarks Validation
    if (minMarks !== undefined && isNaN(Number(minMarks))){
        return res.status(404).json({
            error: "minMarks must be a number"
        });
    }

    //minMarks filter
    if (minMarks !== undefined){
        result = result.filter(student => student.marks >= Number(minMarks));
    }

    //Sort validation
    if (sort && sort !== 'name' && sort !== 'marks'){
        return res.status(404).json({
            error: "Sort must be either 'name' or 'marks'"
        });
    }

    //Comparison & Sorting
    if (sort){
        result.sort((a,b)=>{
            const comparison = 
            sort === 'marks'
            ? a.marks - b.marks
            : a.name.localeCompare(b.name);

            return order = 'desc' 
                ? -comparison
                : comparison ;
        });
    }

    res.json({
        count: result.length,
        students: result
    });

});

server.listen(3000, (req, res)=>
        console.log("Server running on port http://localhost:3000") 
);
