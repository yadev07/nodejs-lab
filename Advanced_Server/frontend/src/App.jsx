import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'http://localhost:3000/students'

function App() {
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')
  const [course, setCourse] = useState('')
  const [minMarks, setMinMarks] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch students from backend
  const fetchStudents = async () => {
    setLoading(true)
    setError('')

    try {
      const params = new URLSearchParams()

      if (course) {
        params.append('course', course)
      }

      if (minMarks !== '') {
        params.append('minMarks', minMarks)
      }

      if (search) {
        params.append('search', search)
      }

      if (sort) {
        params.append('sort', sort)
        params.append('order', order)
      }

      const url = `${API_URL}?${params.toString()}`

      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStudents(data.students || [])
    } catch (err) {
      setError(err.message)
      setStudents([])
    } finally {
      setLoading(false)
    }
  }

  // Load all students when page opens
  useEffect(() => {
    fetchStudents()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchStudents()
    }, 100)
  
    return () => clearTimeout(timer)
  }, [search])

  // Reset all filters
  const handleReset = () => {
    setSearch('')
    setCourse('')
    setMinMarks('')
    setSort('')
    setOrder('asc')

    // Fetch all students
    fetchAllStudents()
  }

  const fetchAllStudents = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStudents(data.students || [])
    } catch (err) {
      setError(err.message)
      setStudents([])
    } finally {
      setLoading(false)
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchStudents()
  }

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <p className="subtitle">STUDENT MANAGEMENT SYSTEM</p>
          <h1>Student Dashboard</h1>
          <p className="description">
            Search, filter and sort student records
          </p>
        </div>

        <div className="student-count">
          <span>{students.length}</span>
          <small>Students</small>
        </div>
      </header>

      <main className="container">

        {/* Filters */}
        <section className="filter-card">
          <div className="section-title">
            <h2>Find Students</h2>
            <p>Use the filters below to find specific students.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="filters">

              {/* Search */}
              <div className="input-group">
                <label>Search by Name</label>

                <input
                  type="text"
                  placeholder="e.g. Aman"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Course */}
              <div className="input-group">
                <label>Course</label>

                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">All Courses</option>
                  <option value="BCA">BCA</option>
                  <option value="BSc IT">BSc IT</option>
                </select>
              </div>

              {/* Minimum Marks */}
              <div className="input-group">
                <label>Minimum Marks</label>

                <input
                  type="number"
                  placeholder="e.g. 60"
                  min="0"
                  max="100"
                  value={minMarks}
                  onChange={(e) => setMinMarks(e.target.value)}
                />
              </div>

              {/* Sort */}
              <div className="input-group">
                <label>Sort By</label>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="">No Sorting</option>
                  <option value="name">Name</option>
                  <option value="marks">Marks</option>
                </select>
              </div>

              {/* Order */}
              <div className="input-group">
                <label>Order</label>

                <select
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  disabled={!sort}
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>

            </div>

            {/* Buttons */}
            <div className="buttons">
              <button
                type="submit"
                className="apply-btn"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Apply Filters'}
              </button>

              <button
                type="button"
                className="reset-btn"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>

          </form>
        </section>

        {/* Error */}
        {error && (
          <div className="error-box">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Table */}
        <section className="table-card">

          <div className="table-header">
            <div>
              <h2>Student Records</h2>
              <p>
                {students.length} record{students.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {loading ? (
            <div className="message">
              <div className="spinner"></div>
              <p>Loading students...</p>
            </div>
          ) : students.length === 0 ? (
            <div className="message">
              <div className="empty-icon">📭</div>
              <h3>No students found</h3>
              <p>Try changing your filters or search term.</p>
            </div>
          ) : (
            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Marks</th>
                    <th>Performance</th>
                  </tr>
                </thead>

                <tbody>

                  {students.map((student) => (

                    <tr key={student.id}>

                      <td>
                        <span className="id-badge">
                          #{student.id}
                        </span>
                      </td>

                      <td>
                        <div className="student-name">
                          <div className="avatar">
                            {student.name.charAt(0).toUpperCase()}
                          </div>

                          <strong>{student.name}</strong>
                        </div>
                      </td>

                      <td>
                        <span className="course-badge">
                          {student.course}
                        </span>
                      </td>

                      <td>
                        <strong className="marks">
                          {student.marks}
                        </strong>
                        <span className="out-of"> / 100</span>
                      </td>

                      <td>
                        <Performance marks={student.marks} />
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <footer>
        <p>
          Student Management Dashboard • Built with React & Express
        </p>
      </footer>

    </div>
  )
}


// Performance badge
function Performance({ marks }) {

  if (marks >= 80) {
    return (
      <span className="performance excellent">
        Excellent
      </span>
    )
  }

  if (marks >= 60) {
    return (
      <span className="performance good">
        Good
      </span>
    )
  }

  if (marks >= 50) {
    return (
      <span className="performance average">
        Average
      </span>
    )
  }

  return (
    <span className="performance needs-work">
      Needs Work
    </span>
  )
}

export default App