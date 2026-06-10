import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-layout">

      {/* Sidebar is fully self-contained — owns topbar, hamburger, drawer, overlay */}
      <Sidebar />

      <div className="dashboard-content">

        {/* ── Welcome Header ── */}
        <div className="dashboard-header">
          <div className="header-left">
            <p className="header-date">Monday, June 08 · Week 24</p>
            <h1>Welcome Back<span className="wave">💪</span></h1>
            <p className="header-sub">
              Stay consistent. Every workout brings you one step closer to your goals.
            </p>
          </div>
          <div className="header-right">
            <div className="streak-badge">
              <span className="streak-fire">🔥</span>
              <div>
                <p className="streak-num">6</p>
                <p className="streak-label">Day Streak</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Profile + Quick Stats Row ── */}
        <div className="top-row">
          <div className="profile-card">
            <div className="profile-info">
              
              <span className="membership-badge">⭐ Premium Member</span>
              <div className="profile-meta">
                <span>🎂 24 yrs</span>
                <span>📏 178 cm</span>
                <span>⚖️ 72 kg</span>
                <span>🎯 Muscle Gain</span>
              </div>
            </div>
            <div className="profile-ring">
              <svg viewBox="0 0 100 100" className="ring-svg">
                <circle cx="50" cy="50" r="42" className="ring-bg" />
                <circle cx="50" cy="50" r="42" className="ring-fill" strokeDasharray="263.89" strokeDashoffset="57.86" />
              </svg>
              <div className="ring-label">
                <span className="ring-pct">78%</span>
                <span className="ring-sub">Goal</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        <div className="section-title">Today's Overview</div>
        <div className="insights-grid">
          <div className="card card--blue">
            <div className="card-icon">🔥</div>
            <h3>Calories Burned</h3>
            <h2>1,850</h2>
            <span className="card-unit">kcal</span>
            <div className="card-bar"><div className="card-bar-fill" style={{width: '74%'}}></div></div>
            <p className="card-hint">Target: 2,500 kcal</p>
          </div>

          <div className="card card--green">
            <div className="card-icon">🏋️</div>
            <h3>Workouts Done</h3>
            <h2>18</h2>
            <span className="card-unit">this month</span>
            <div className="card-bar"><div className="card-bar-fill" style={{width: '60%'}}></div></div>
            <p className="card-hint">Target: 30 sessions</p>
          </div>

          <div className="card card--orange">
            <div className="card-icon">⚖️</div>
            <h3>Current Weight</h3>
            <h2>72</h2>
            <span className="card-unit">kg</span>
            <div className="card-bar"><div className="card-bar-fill" style={{width: '82%'}}></div></div>
            <p className="card-hint">Start: 78 kg · Goal: 70 kg</p>
          </div>

          <div className="card card--purple">
            <div className="card-icon">🥩</div>
            <h3>Protein Intake</h3>
            <h2>145</h2>
            <span className="card-unit">g</span>
            <div className="card-bar"><div className="card-bar-fill" style={{width: '80%'}}></div></div>
            <p className="card-hint">Target: 180 g</p>
          </div>

          <div className="card card--teal">
            <div className="card-icon">💧</div>
            <h3>Water Intake</h3>
            <h2>3.2</h2>
            <span className="card-unit">liters</span>
            <div className="card-bar"><div className="card-bar-fill" style={{width: '80%'}}></div></div>
            <p className="card-hint">Target: 4 L</p>
          </div>

          <div className="card card--red">
            <div className="card-icon">👟</div>
            <h3>Steps Today</h3>
            <h2>8,420</h2>
            <span className="card-unit">steps</span>
            <div className="card-bar"><div className="card-bar-fill" style={{width: '84%'}}></div></div>
            <p className="card-hint">Target: 10,000</p>
          </div>
        </div>

        {/* ── Two Column ── */}
        <div className="dashboard-sections">

          {/* Today's Goals */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>Today's Goals</h2>
              <span className="badge-count">4 tasks</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-green"></span><span>Morning Workout</span></div>
              <span className="goal-status status-done">✔ Done</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-yellow"></span><span>Water Intake</span></div>
              <span className="goal-status status-progress">3.2 / 4 L</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-yellow"></span><span>Protein Goal</span></div>
              <span className="goal-status status-progress">145 / 180 g</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-yellow"></span><span>Daily Steps</span></div>
              <span className="goal-status status-progress">8,420 / 10,000</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-red"></span><span>Evening Stretch</span></div>
              <span className="goal-status status-pending">Pending</span>
            </div>
          </div>

          {/* Body Metrics */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>Body Metrics</h2>
              <span className="badge-updated">Updated today</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-blue"></span><span>BMI</span></div>
              <span className="goal-status">22.7 <em>Normal</em></span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-blue"></span><span>Body Fat</span></div>
              <span className="goal-status">16%</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-blue"></span><span>Muscle Mass</span></div>
              <span className="goal-status">34 kg</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-blue"></span><span>Hydration</span></div>
              <span className="goal-status status-done">Good</span>
            </div>
            <div className="goal-item">
              <div className="goal-left"><span className="goal-dot dot-blue"></span><span>Resting HR</span></div>
              <span className="goal-status">64 bpm</span>
            </div>
          </div>
        </div>

        {/* ── Weekly Activity Chart ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Weekly Activity</h2>
            <span className="badge-updated">This week</span>
          </div>
          <div className="activity-chart">
            {[
              { day: 'Mon', pct: 85, kcal: '620' },
              { day: 'Tue', pct: 60, kcal: '445' },
              { day: 'Wed', pct: 95, kcal: '720' },
              { day: 'Thu', pct: 40, kcal: '310' },
              { day: 'Fri', pct: 75, kcal: '560' },
              { day: 'Sat', pct: 100, kcal: '790' },
              { day: 'Sun', pct: 20, kcal: '150', rest: true },
            ].map(({ day, pct, kcal, rest }) => (
              <div className="bar-col" key={day}>
                <span className="bar-kcal">{kcal}</span>
                <div className="bar-track">
                  <div className={`bar-fill ${rest ? 'bar-rest' : ''}`} style={{ height: `${pct}%` }}></div>
                </div>
                <span className="bar-day">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Recent Workouts ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Recent Workouts</h2>
            <a href="#" className="view-all">View All →</a>
          </div>
          <div className="workout-table">
            <div className="workout-head">
              <span>Workout</span>
              <span>Date</span>
              <span>Duration</span>
              <span>Calories</span>
              <span>Intensity</span>
            </div>
            {[
              { name: 'Chest & Triceps', date: 'Jun 7', dur: '90 min', kcal: '650 kcal', lvl: 'High', color: 'lvl-high' },
              { name: 'Back & Biceps',   date: 'Jun 6', dur: '75 min', kcal: '590 kcal', lvl: 'High', color: 'lvl-high' },
              { name: 'Leg Day',         date: 'Jun 5', dur: '95 min', kcal: '720 kcal', lvl: 'Max',  color: 'lvl-max'  },
              { name: 'Cardio HIIT',     date: 'Jun 4', dur: '45 min', kcal: '410 kcal', lvl: 'Mid',  color: 'lvl-mid'  },
              { name: 'Shoulder & Core', date: 'Jun 3', dur: '60 min', kcal: '480 kcal', lvl: 'Mid',  color: 'lvl-mid'  },
            ].map((w, i) => (
              <div className="workout-row" key={i}>
                <span className="workout-name">{w.name}</span>
                <span className="workout-date">{w.date}</span>
                <span>{w.dur}</span>
                <span className="workout-kcal">{w.kcal}</span>
                <span className={`workout-lvl ${w.color}`}>{w.lvl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Nutrition Overview ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Nutrition Overview</h2>
            <span className="badge-updated">Today</span>
          </div>
          <div className="nutrition-grid">
            {[
              { label: 'Calories', val: '2,350', unit: 'kcal', pct: 94, color: '#f97316' },
              { label: 'Protein',  val: '145',   unit: 'g',    pct: 80, color: '#3b82f6' },
              { label: 'Carbs',    val: '280',   unit: 'g',    pct: 70, color: '#10b981' },
              { label: 'Fats',     val: '65',    unit: 'g',    pct: 65, color: '#8b5cf6' },
            ].map((n, i) => (
              <div className="nutrition-card" key={i}>
                <div className="nutrition-donut" style={{'--pct': n.pct, '--clr': n.color}}>
                  <span>{n.pct}%</span>
                </div>
                <h3>{n.label}</h3>
                <p>{n.val} <em>{n.unit}</em></p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Upcoming Schedule ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Upcoming Schedule</h2>
            <a href="#" className="view-all">Full Calendar →</a>
          </div>
          <div className="schedule-list">
            {[
              { day: 'Today',    time: '06:00 AM', title: 'Upper Body Strength', trainer: 'Coach Ravi',  tag: 'Gym' },
              { day: 'Tomorrow', time: '07:30 AM', title: 'HIIT Cardio Blast',   trainer: 'Coach Priya', tag: 'Cardio' },
              { day: 'Wed',      time: '06:00 AM', title: 'Leg & Glutes',        trainer: 'Coach Ravi',  tag: 'Gym' },
              { day: 'Thu',      time: '07:00 AM', title: 'Active Recovery Yoga',trainer: 'Coach Meena', tag: 'Rest' },
            ].map((s, i) => (
              <div className="schedule-item" key={i}>
                <div className="schedule-day">{s.day}</div>
                <div className="schedule-time">{s.time}</div>
                <div className="schedule-info">
                  <strong>{s.title}</strong>
                  <span>{s.trainer}</span>
                </div>
                <span className={`schedule-tag tag-${s.tag.toLowerCase()}`}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Achievements ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Achievements</h2>
            <span className="badge-count">4 earned</span>
          </div>
          <div className="achievements-grid">
            {[
              { icon: '🔥', title: '6-Day Streak',    desc: 'Worked out 6 days in a row',   earned: true  },
              { icon: '💪', title: 'First 10kg Lost',  desc: 'Hit major weight milestone',   earned: true  },
              { icon: '🏃', title: '100km Cardio',     desc: 'Total cardio distance logged', earned: true  },
              { icon: '🥗', title: 'Nutrition Master', desc: 'Hit macros 7 days straight',   earned: true  },
              { icon: '🏆', title: '30-Day Warrior',   desc: 'Complete 30 workouts',         earned: false },
              { icon: '⚡', title: 'Speed Demon',      desc: 'Sub-5min km on treadmill',     earned: false },
            ].map((a, i) => (
              <div className={`achievement-card ${a.earned ? 'earned' : 'locked'}`} key={i}>
                <span className="ach-icon">{a.icon}</span>
                <strong>{a.title}</strong>
                <p>{a.desc}</p>
                {!a.earned && <span className="lock-icon">🔒</span>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;