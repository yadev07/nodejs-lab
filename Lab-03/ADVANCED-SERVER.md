# Advanced Student Server

A simple REST API built with **Node.js and Express.js** for managing and querying student data.

The server supports filtering, partial name search, sorting, combined query parameters, and input validation.

---

## 🚀 Technologies Used

* Node.js
* Express.js
* JavaScript

---

## 📁 Project Structure

```text
project-folder/
│
├── advanced-server.js
├── README.md
├── advanced-output.png
└── package.json
```

---

## ⚙️ Setup & Run

Install Express:

```bash
npm install express
```

Start the server:

```bash
node advanced-server.js
```

Server runs at:

```text
http://localhost:3000
```

---

## 👨‍🎓 Student Data

The server contains **8 student records**.

Each student has:

* `id`
* `name`
* `course`
* `marks`

The data includes at least two different courses and a wide range of marks for testing filtering and sorting.

---

## 📌 API Routes

### 1. Get All Students

**Method:** `GET`

**Route:**

```text
/students
```

**Example:**

```text
http://localhost:3000/students
```

Returns all students.

---

### 2. Filter by Course

**Method:** `GET`

**Route:**

```text
/students?course=BCA
```

**Example:**

```text
http://localhost:3000/students?course=BCA
```

Returns students belonging to the specified course.

Course matching is case-insensitive.

---

### 3. Filter by Minimum Marks

**Method:** `GET`

**Route:**

```text
/students?minMarks=60
```

**Example:**

```text
http://localhost:3000/students?minMarks=60
```

Returns students whose marks are greater than or equal to the given value.

---

### 4. Search by Name

**Method:** `GET`

**Route:**

```text
/students?search=an
```

**Example:**

```text
http://localhost:3000/students?search=an
```

Performs a case-insensitive partial search on student names.

---

### 5. Sort Students

Students can be sorted by `name` or `marks`.

**By marks:**

```text
/students?sort=marks&order=desc
```

**By name:**

```text
/students?sort=name&order=asc
```

If `order` is not provided, it defaults to `asc`.

Valid values for `sort`:

* `name`
* `marks`

Valid values for `order`:

* `asc`
* `desc`

---

## 🔍 Query Parameters

| Parameter  | Purpose                               | Example                           |
| ---------- | ------------------------------------- | --------------------------------- |
| `course`   | Filters students by course            | `/students?course=BCA`            |
| `minMarks` | Filters students by minimum marks     | `/students?minMarks=60`           |
| `search`   | Partial, case-insensitive name search | `/students?search=an`             |
| `sort`     | Sorts by name or marks                | `/students?sort=marks`            |
| `order`    | Sets ascending or descending order    | `/students?sort=marks&order=desc` |

---

## 🔗 Combining Parameters

Multiple parameters can be used in a single request.

Example:

```text
http://localhost:3000/students?course=BCA&minMarks=60
```

This returns students who belong to BCA **AND** have marks greater than or equal to 60.

A complete example:

```text
http://localhost:3000/students?course=BCA&minMarks=60&search=a&sort=marks&order=desc
```

The server applies filters first and sorting afterwards.

---

## ⭐ Bonus Route

The API also supports filtering by course using a route parameter.

**Method:** `GET`

**Route:**

```text
/students/course/:course
```

**Example:**

```text
http://localhost:3000/students/course/BCA
```

Query parameters can also be used with this route:

```text
http://localhost:3000/students/course/BCA?minMarks=60&sort=marks&order=desc
```

---

## ⚠️ Input Validation

The server validates user input and returns **HTTP 400** for invalid values instead of crashing.

### Invalid `minMarks`

```text
http://localhost:3000/students?minMarks=abc
```

Response:

```json
{
    "error": "minMarks must be a number"
}
```

### Invalid `sort`

```text
http://localhost:3000/students?sort=xyz
```

Response:

```json
{
    "error": "sort must be either 'name' or 'marks'"
}
```

---

## 🧪 Testing Checklist

* [x] `/students` — Return all students
* [x] `/students?course=BCA` — Course filtering
* [x] `/students?minMarks=60` — Minimum marks filtering
* [x] `/students?search=an` — Partial name search
* [x] `/students?sort=marks&order=desc` — Marks sorting
* [x] `/students?sort=name&order=asc` — Name sorting
* [x] `/students?sort=xyz` — Invalid sort
* [x] `/students?minMarks=abc` — Invalid marks
* [x] Combined filtering and sorting
* [x] Bonus course route

Screenshots of the tests are saved as:

```text
advanced-output.png
```

---

## 📤 Response Format

Successful requests return JSON:

```json
{
    "count": 2,
    "students": [
        {
            "id": 1,
            "name": "Aman",
            "course": "BCA",
            "marks": 72
        }
    ]
}
```

The `count` field shows the number of students matching the requested filters.

---

## 📌 Conclusion

This project demonstrates how **Express.js** can be used to build a simple API with routing, query parameters, filtering, searching, sorting, combined conditions, and input validation.
