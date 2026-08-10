# Lab Assignment - 03

## To Start 'server.js'
npm start & npm run server

# Routes in server.js

* `GET /students` – Returns all students.
* `GET /students/name/:fname` – Returns students matching the first name.
* `GET /students/:id` – Returns a student by ID.
* Invalid route – Returns `404 Route not found`.


## To Start 'ben-server.js'
npm run ben

# Routes in ben-server.js

* `GET /items` – Returns the complete list of Ben 10 aliens.
* `GET /items/:id` – Returns an alien based on its ID.
* Invalid ID – Returns `404 Alien not found`.
* Invalid route – Returns `404 Route not found`.



## To Start 'student-server.js'
npm run student-server

## Routes in student-server.js

* `GET /students/course/bca` – Returns all BCA students.
* `GET /students/course/bit` – Returns all BIT students.

Both routes use `Array.filter()` to filter students based on their course.



### `req.url.split()`

`req.url.split('/')` splits the URL to extract values like the student ID or first name.
