import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
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

      <main className="main-content">
        <header className="header">
          <div>
            <p className="welcome">Welcome back, Bushra 👋</p>
            <h1>Course Dashboard</h1>
            <p>Track your learning progress in one place.</p>
          </div>

          <div className="user-avatar">B</div>
        </header>

        <section className="stats">
          <div className="card">
            <span>Total Courses</span>
            <strong>6</strong>
          </div>

          <div className="card">
            <span>Completed</span>
            <strong>2</strong>
          </div>

          <div className="card">
            <span>In Progress</span>
            <strong>3</strong>
          </div>

          <div className="card">
            <span>Overall Progress</span>
            <strong>72%</strong>
          </div>
        </section>

        <section>
          <div className="section-title">
            <div>
              <h2>My Courses</h2>
              <p>Continue your learning journey.</p>
            </div>
          </div>

          <div className="courses">
            <div className="course-card">
              <div className="course-top">
                <span className="badge">Frontend</span>
                <span>85%</span>
              </div>

              <h3>React Development</h3>
              <p>Learn modern React and build interactive applications.</p>

              <div className="progress">
                <div className="progress-fill" style={{ width: "85%" }} />
              </div>

              <button>Continue Learning</button>
            </div>

            <div className="course-card">
              <div className="course-top">
                <span className="badge">Database</span>
                <span>65%</span>
              </div>

              <h3>Supabase Fundamentals</h3>
              <p>Learn authentication, database and backend integration.</p>

              <div className="progress">
                <div className="progress-fill" style={{ width: "65%" }} />
              </div>

              <button>Continue Learning</button>
            </div>

            <div className="course-card">
              <div className="course-top">
                <span className="badge">Design</span>
                <span>100%</span>
              </div>

              <h3>UI/UX Design</h3>
              <p>Understand user experience and modern interface design.</p>

              <div className="progress">
                <div className="progress-fill" style={{ width: "100%" }} />
              </div>

              <button>Review Course</button>
            </div>

            <div className="course-card">
              <div className="course-top">
                <span className="badge">Development</span>
                <span>45%</span>
              </div>

              <h3>TypeScript</h3>
              <p>Build reliable applications using TypeScript.</p>

              <div className="progress">
                <div className="progress-fill" style={{ width: "45%" }} />
              </div>

              <button>Continue Learning</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;