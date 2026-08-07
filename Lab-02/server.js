const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Welcome to the Home Page..!\n\n' +
            'Name: Yadev Singh Nishad\n' +
            'Scholar no.: 23145026\n' +
            'Course: BCA'
        );
    }
    else if (req.url === '/about') {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Hello..!, I am a BCA Student interested in JS Development.');
    } 
    else if (req.url === '/college') {

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        res.end(
            "College: Dev Sanskriti Vishwavidyalaya\n" +
            "Semester: BCA VII"
        );
    }
    else if (req.url === '/profile') {

        const profile = {
            name: "Yadev Singh Nishad",
            scholarNumber: "23145026",
            course: "BCA",
            semester: "VII",
            college: "Dev Sanskriti Vishwavidyalaya"
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
    
        res.end(JSON.stringify(profile));

    }
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
    
        res.end("Page Not Found");
    
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});