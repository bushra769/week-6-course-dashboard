import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>LearnHub</h2>

        <nav>
          <a href="#" className="active">
            Dashboard
          </a>
          <a href="#">My Courses</a>
          <a href="#">Progress</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <p className="welcome">Welcome back, Bushra 👋</p>
            <h1>Course Dashboard</h1>
            <p className="subtitle">
              Track your courses and learning progress.
            </p>
          </div>

          <div className="avatar">B</div>
        </header>

        <section className="stats">
          <div className="stat-card">
            <span>Total Courses</span>
            <h2>6</h2>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <h2>2</h2>
          </div>

          <div className="stat-card">
            <span>In Progress</span>
            <h2>3</h2>
          </div>

          <div className="stat-card">
            <span>Overall Progress</span>
            <h2>72%</h2>
          </div>
        </section>

        <section>
          <div className="section-heading">
            <div>
              <h2>My Courses</h2>
              <p>Continue your learning journey.</p>
            </div>
          </div>

          <div className="course-grid">
            <div className="course-card">
              <span className="badge">Frontend</span>
              <h3>React Development</h3>
              <p>Learn React and build modern web applications.</p>

              <div className="progress-info">
                <span>Progress</span>
                <strong>85%</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "85%" }}
                />
              </div>

              <button>Continue Learning</button>
            </div>

            <div className="course-card">
              <span className="badge">Backend</span>
              <h3>Supabase Fundamentals</h3>
              <p>Learn database, authentication and backend services.</p>

              <div className="progress-info">
                <span>Progress</span>
                <strong>65%</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "65%" }}
                />
              </div>

              <button>Continue Learning</button>
            </div>

            <div className="course-card">
              <span className="badge">Design</span>
              <h3>UI/UX Design</h3>
              <p>Learn the fundamentals of modern interface design.</p>

              <div className="progress-info">
                <span>Progress</span>
                <strong>100%</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "100%" }}
                />
              </div>

              <button>Review Course</button>
            </div>

            <div className="course-card">
              <span className="badge">Programming</span>
              <h3>TypeScript</h3>
              <p>Build reliable and scalable applications with TypeScript.</p>

              <div className="progress-info">
                <span>Progress</span>
                <strong>45%</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "45%" }}
                />
              </div>

              <button>Continue Learning</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;