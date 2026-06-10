import "./AdminDashboard.css";
import Sidebar from "../Sidebar/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="dashboard-layout">

      {/* Sidebar is fully self-contained — owns topbar, hamburger, drawer, overlay */}
      <Sidebar />

      <div className="dashboard-content">

        {/* ── Admin Header ── */}
        <div className="dashboard-header admin-header">
          <div className="header-left">
            <p className="header-date">Thursday, June 11 · Admin Panel</p>
            <h1>Admin Control Center <span className="wave">🛡️</span></h1>
            <p className="header-sub">
              Manage users, monitor platform health, and keep everything running smoothly.
            </p>
          </div>
          <div className="header-right admin-header-right">
            <div className="admin-status-badge">
              <span className="status-dot dot-live"></span>
              <div>
                <p className="status-label">System</p>
                <p className="status-val">All Systems Live</p>
              </div>
            </div>
            <div className="admin-status-badge">
              <span className="admin-icon-lg">👤</span>
              <div>
                <p className="status-label">Logged in as</p>
                <p className="status-val">Super Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── KPI Grid ── */}
        <div className="section-title">Platform Overview</div>
        <div className="insights-grid">
          <div className="card card--blue">
            <div className="card-icon">👥</div>
            <h3>Total Users</h3>
            <h2>24,810</h2>
            <span className="card-unit">registered</span>
            <div className="card-bar"><div className="card-bar-fill" style={{ width: '82%' }}></div></div>
            <p className="card-hint">↑ 312 this week</p>
          </div>

          <div className="card card--green">
            <div className="card-icon">✅</div>
            <h3>Active Today</h3>
            <h2>6,430</h2>
            <span className="card-unit">users</span>
            <div className="card-bar"><div className="card-bar-fill" style={{ width: '65%' }}></div></div>
            <p className="card-hint">26% of total base</p>
          </div>

          <div className="card card--orange">
            <div className="card-icon">💳</div>
            <h3>Revenue (MTD)</h3>
            <h2>₹4.2L</h2>
            <span className="card-unit">this month</span>
            <div className="card-bar"><div className="card-bar-fill" style={{ width: '70%' }}></div></div>
            <p className="card-hint">Target: ₹6L</p>
          </div>

          <div className="card card--purple">
            <div className="card-icon">⭐</div>
            <h3>Premium Members</h3>
            <h2>3,180</h2>
            <span className="card-unit">subscribers</span>
            <div className="card-bar"><div className="card-bar-fill" style={{ width: '53%' }}></div></div>
            <p className="card-hint">Goal: 6,000</p>
          </div>

          <div className="card card--teal">
            <div className="card-icon">🏋️</div>
            <h3>Sessions Today</h3>
            <h2>11,240</h2>
            <span className="card-unit">workouts logged</span>
            <div className="card-bar"><div className="card-bar-fill" style={{ width: '75%' }}></div></div>
            <p className="card-hint">Daily avg: 9,800</p>
          </div>

          <div className="card card--red">
            <div className="card-icon">🚨</div>
            <h3>Open Tickets</h3>
            <h2>17</h2>
            <span className="card-unit">support issues</span>
            <div className="card-bar"><div className="card-bar-fill" style={{ width: '17%' }}></div></div>
            <p className="card-hint">3 high priority</p>
          </div>
        </div>

        {/* ── Two Col: System Health + Recent Alerts ── */}
        <div className="dashboard-sections">

          {/* System Health */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>System Health</h2>
              <span className="badge-updated">Live</span>
            </div>
            {[
              { label: 'API Response Time',  val: '142 ms',  dot: 'dot-green',  note: 'Healthy' },
              { label: 'DB Query Latency',   val: '38 ms',   dot: 'dot-green',  note: 'Healthy' },
              { label: 'Server CPU Usage',   val: '61%',     dot: 'dot-yellow', note: 'Moderate' },
              { label: 'Memory Usage',       val: '74%',     dot: 'dot-yellow', note: 'Moderate' },
              { label: 'Storage Used',       val: '210 GB',  dot: 'dot-green',  note: '/ 500 GB' },
              { label: 'Uptime (30 days)',   val: '99.96%',  dot: 'dot-green',  note: 'Excellent' },
              { label: 'CDN Cache Hit Rate', val: '91.4%',   dot: 'dot-green',  note: 'Healthy' },
            ].map((item, i) => (
              <div className="goal-item" key={i}>
                <div className="goal-left">
                  <span className={`goal-dot ${item.dot}`}></span>
                  <span>{item.label}</span>
                </div>
                <span className="goal-status">
                  <strong>{item.val}</strong>
                  <em style={{ marginLeft: '0.4rem', fontSize: '0.7rem', color: 'var(--text-faint)' }}>{item.note}</em>
                </span>
              </div>
            ))}
          </div>

          {/* Recent Alerts */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>Recent Alerts</h2>
              <span className="badge-count">5 new</span>
            </div>
            <div className="alerts-list">
              {[
                { level: 'critical', icon: '🔴', title: 'Payment gateway timeout',        time: '2 min ago',   msg: 'Razorpay callback failed for 3 txns.' },
                { level: 'warning',  icon: '🟡', title: 'CPU spike on Worker-02',         time: '18 min ago',  msg: 'Spike to 89% for ~40 sec. Auto-scaled.' },
                { level: 'info',     icon: '🔵', title: 'New admin login detected',       time: '1 hr ago',    msg: 'priya@stackly.in from Bangalore, IN.' },
                { level: 'warning',  icon: '🟡', title: 'S3 upload failure (3 retries)',  time: '2 hrs ago',   msg: 'Media upload failed; retrying in queue.' },
                { level: 'info',     icon: '🔵', title: 'Scheduled maintenance complete', time: '4 hrs ago',   msg: 'DB index rebuild finished in 6 min.' },
              ].map((a, i) => (
                <div className={`alert-item alert-${a.level}`} key={i}>
                  <span className="alert-icon">{a.icon}</span>
                  <div className="alert-body">
                    <strong>{a.title}</strong>
                    <p>{a.msg}</p>
                  </div>
                  <span className="alert-time">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── User Growth Chart ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>User Registrations — Last 7 Days</h2>
            <span className="badge-updated">This week</span>
          </div>
          <div className="activity-chart">
            {[
              { day: 'Mon', pct: 60,  val: '340' },
              { day: 'Tue', pct: 75,  val: '420' },
              { day: 'Wed', pct: 50,  val: '285' },
              { day: 'Thu', pct: 90,  val: '510' },
              { day: 'Fri', pct: 100, val: '560' },
              { day: 'Sat', pct: 80,  val: '448' },
              { day: 'Sun', pct: 40,  val: '222', rest: true },
            ].map(({ day, pct, val, rest }) => (
              <div className="bar-col" key={day}>
                <span className="bar-kcal">{val}</span>
                <div className="bar-track">
                  <div className={`bar-fill ${rest ? 'bar-rest' : 'bar-blue'}`} style={{ height: `${pct}%` }}></div>
                </div>
                <span className="bar-day">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── User Management Table ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>User Management</h2>
            <div className="header-actions">
              <button className="admin-btn btn-ghost">Export CSV</button>
              <button className="admin-btn btn-primary">+ Add User</button>
            </div>
          </div>

          {/* Search + Filter Bar */}
          <div className="table-controls">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search by name, email or ID…" className="search-input" readOnly />
            </div>
            <div className="filter-pills">
              {['All', 'Premium', 'Free', 'Suspended'].map((f, i) => (
                <button key={i} className={`filter-pill ${i === 0 ? 'active' : ''}`}>{f}</button>
              ))}
            </div>
          </div>

          <div className="workout-table">
            <div className="workout-head user-head">
              <span>User</span>
              <span>Plan</span>
              <span>Joined</span>
              <span>Last Active</span>
              <span>Status</span>
              <span>Actions</span>
            </div>
            {[
              { name: 'Alex Johnson',   email: 'alex@mail.com',  plan: 'Premium', joined: 'Jan 12',  active: 'Today',     status: 'Active',    color: 'status-active' },
              { name: 'Priya Sharma',   email: 'priya@mail.com', plan: 'Premium', joined: 'Feb 3',   active: 'Yesterday', status: 'Active',    color: 'status-active' },
              { name: 'Rohan Mehta',    email: 'rohan@mail.com', plan: 'Free',    joined: 'Mar 19',  active: '3 days ago',status: 'Inactive',  color: 'status-inactive' },
              { name: 'Sara Fernandez', email: 'sara@mail.com',  plan: 'Premium', joined: 'Apr 2',   active: 'Today',     status: 'Active',    color: 'status-active' },
              { name: 'Dev Kapoor',     email: 'dev@mail.com',   plan: 'Free',    joined: 'Apr 28',  active: '10 days ago', status: 'Suspended', color: 'status-suspended' },
              { name: 'Aisha Nair',     email: 'aisha@mail.com', plan: 'Premium', joined: 'May 14',  active: '2 hrs ago', status: 'Active',    color: 'status-active' },
            ].map((u, i) => (
              <div className="workout-row user-row" key={i}>
                <span className="user-cell">
                  <span className="user-mini-avatar">{u.name[0]}</span>
                  <span className="user-info-cell">
                    <strong>{u.name}</strong>
                    <em>{u.email}</em>
                  </span>
                </span>
                <span>
                  <span className={`plan-badge plan-${u.plan.toLowerCase()}`}>{u.plan}</span>
                </span>
                <span className="workout-date">{u.joined}</span>
                <span className="workout-date">{u.active}</span>
                <span className={`workout-lvl ${u.color}`}>{u.status}</span>
                <span className="row-actions">
                  <button className="row-btn">Edit</button>
                  <button className="row-btn row-btn-danger">Ban</button>
                </span>
              </div>
            ))}
          </div>

          <div className="table-footer">
            <span className="table-count">Showing 6 of 24,810 users</span>
            <div className="pagination">
              <button className="page-btn">←</button>
              {[1, 2, 3].map(p => (
                <button key={p} className={`page-btn ${p === 1 ? 'active' : ''}`}>{p}</button>
              ))}
              <span className="page-ellipsis">…</span>
              <button className="page-btn">248</button>
              <button className="page-btn">→</button>
            </div>
          </div>
        </div>

        {/* ── Revenue + Subscription Breakdown ── */}
        <div className="dashboard-sections">

          {/* Revenue Breakdown */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>Revenue Breakdown</h2>
              <span className="badge-updated">This Month</span>
            </div>
            {[
              { label: 'Monthly Premium',   val: '₹1,98,000', pct: 47, color: 'var(--accent)' },
              { label: 'Annual Premium',    val: '₹1,26,000', pct: 30, color: 'var(--blue)' },
              { label: 'Trainer Add-ons',   val: '₹63,000',   pct: 15, color: 'var(--purple)' },
              { label: 'Nutrition Plans',   val: '₹33,600',   pct: 8,  color: 'var(--teal)' },
            ].map((r, i) => (
              <div className="revenue-item" key={i}>
                <div className="revenue-label">
                  <span className="rev-dot" style={{ background: r.color }}></span>
                  <span>{r.label}</span>
                </div>
                <div className="revenue-bar-wrap">
                  <div className="revenue-bar">
                    <div className="revenue-bar-fill" style={{ width: `${r.pct}%`, background: r.color }}></div>
                  </div>
                  <span className="revenue-val">{r.val}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Plan Distribution */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>Plan Distribution</h2>
              <span className="badge-count">24,810 total</span>
            </div>
            <div className="nutrition-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                { label: 'Free',     val: '21,630', pct: 87, color: '#4b5563' },
                { label: 'Monthly',  val: '1,990',  pct: 63, color: '#ff6b35' },
                { label: 'Annual',   val: '980',    pct: 31, color: '#3b82f6' },
                { label: 'Trial',    val: '210',    pct: 7,  color: '#10b981' },
              ].map((n, i) => (
                <div className="nutrition-card" key={i}>
                  <div className="nutrition-donut" style={{ '--pct': n.pct, '--clr': n.color }}>
                    <span>{n.pct}%</span>
                  </div>
                  <h3>{n.label}</h3>
                  <p>{n.val} <em>users</em></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Trainer Management ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Trainer Roster</h2>
            <div className="header-actions">
              <button className="admin-btn btn-primary">+ Add Trainer</button>
            </div>
          </div>
          <div className="trainer-grid">
            {[
              { name: 'Coach Ravi',   spec: 'Strength & Conditioning', clients: 42, rating: 4.9, sessions: 284, status: 'Active' },
              { name: 'Coach Priya',  spec: 'HIIT & Cardio',           clients: 38, rating: 4.8, sessions: 219, status: 'Active' },
              { name: 'Coach Meena',  spec: 'Yoga & Recovery',         clients: 29, rating: 4.9, sessions: 176, status: 'Active' },
              { name: 'Coach Arjun',  spec: 'Powerlifting',            clients: 21, rating: 4.7, sessions: 141, status: 'On Leave' },
              { name: 'Coach Leena',  spec: 'Functional Fitness',      clients: 33, rating: 4.8, sessions: 198, status: 'Active' },
              { name: 'Coach Vikram', spec: 'Sports Performance',      clients: 17, rating: 4.6, sessions: 99,  status: 'Inactive' },
            ].map((t, i) => (
              <div className="trainer-card" key={i}>
                <div className="trainer-avatar">{t.name.split(' ')[1][0]}</div>
                <div className="trainer-info">
                  <strong>{t.name}</strong>
                  <p>{t.spec}</p>
                </div>
                <div className="trainer-stats">
                  <span>👤 {t.clients} clients</span>
                  <span>⭐ {t.rating}</span>
                  <span>🏋️ {t.sessions} sessions</span>
                </div>
                <span className={`trainer-status ${t.status === 'Active' ? 'status-active' : t.status === 'On Leave' ? 'status-leave' : 'status-inactive'}`}>
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Content + Support Row ── */}
        <div className="dashboard-sections">

          {/* Content Moderation */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>Content Moderation</h2>
              <span className="badge-count">8 pending</span>
            </div>
            {[
              { type: 'Workout Plan',   user: 'rohan@mail.com',  flag: 'Spam',         time: '10 min ago' },
              { type: 'Forum Post',     user: 'dev@mail.com',    flag: 'Inappropriate', time: '32 min ago' },
              { type: 'Profile Photo',  user: 'anon_4821',       flag: 'Nudity',       time: '1 hr ago' },
              { type: 'Diet Review',    user: 'kiran@mail.com',  flag: 'Misinformation', time: '2 hr ago' },
              { type: 'Comment',        user: 'raj@mail.com',    flag: 'Harassment',   time: '3 hr ago' },
            ].map((c, i) => (
              <div className="moderation-item" key={i}>
                <div className="mod-left">
                  <span className="mod-type">{c.type}</span>
                  <em>{c.user} · {c.time}</em>
                </div>
                <div className="mod-actions">
                  <span className="flag-tag">{c.flag}</span>
                  <button className="row-btn">Review</button>
                </div>
              </div>
            ))}
          </div>

          {/* Support Tickets */}
          <div className="section-card">
            <div className="section-card-header">
              <h2>Support Tickets</h2>
              <a href="#" className="view-all">View All →</a>
            </div>
            {[
              { id: '#1084', subject: 'Payment not reflecting',    priority: 'High',   assignee: 'Priya', status: 'Open' },
              { id: '#1083', subject: 'App crash on leg day page', priority: 'High',   assignee: 'Ravi',  status: 'Open' },
              { id: '#1081', subject: 'Cant update profile photo',priority: 'Medium', assignee: 'Meena', status: 'In Progress' },
              { id: '#1078', subject: 'Wrong calorie calculation', priority: 'Medium', assignee: 'Ravi',  status: 'In Progress' },
              { id: '#1072', subject: 'Account deletion request',  priority: 'Low',    assignee: 'Priya', status: 'Resolved' },
            ].map((t, i) => (
              <div className="ticket-item" key={i}>
                <div className="ticket-meta">
                  <span className="ticket-id">{t.id}</span>
                  <span className={`ticket-priority priority-${t.priority.toLowerCase()}`}>{t.priority}</span>
                </div>
                <div className="ticket-subject">{t.subject}</div>
                <div className="ticket-footer">
                  <span>👤 {t.assignee}</span>
                  <span className={`ticket-status tstat-${t.status.toLowerCase().replace(' ', '-')}`}>{t.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Recent Transactions ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Recent Transactions</h2>
            <div className="header-actions">
              <button className="admin-btn btn-ghost">Download Report</button>
            </div>
          </div>
          <div className="workout-table">
            <div className="workout-head txn-head">
              <span>User</span>
              <span>Plan</span>
              <span>Amount</span>
              <span>Method</span>
              <span>Date</span>
              <span>Status</span>
            </div>
            {[
              { user: 'Alex Johnson',   plan: 'Monthly Premium', amount: '₹999',  method: 'UPI',        date: 'Jun 11', status: 'Success',  scolor: 'status-active' },
              { user: 'Sara Fernandez', plan: 'Annual Premium',  amount: '₹7,999',method: 'Card',       date: 'Jun 11', status: 'Success',  scolor: 'status-active' },
              { user: 'Rohan Mehta',    plan: 'Monthly Premium', amount: '₹999',  method: 'Netbanking', date: 'Jun 10', status: 'Failed',   scolor: 'status-suspended' },
              { user: 'Aisha Nair',     plan: 'Nutrition Plan',  amount: '₹499',  method: 'UPI',        date: 'Jun 10', status: 'Success',  scolor: 'status-active' },
              { user: 'Dev Kapoor',     plan: 'Monthly Premium', amount: '₹999',  method: 'Card',       date: 'Jun 9',  status: 'Refunded', scolor: 'status-inactive' },
              { user: 'Priya Sharma',   plan: 'Annual Premium',  amount: '₹7,999',method: 'UPI',        date: 'Jun 9',  status: 'Success',  scolor: 'status-active' },
            ].map((t, i) => (
              <div className="workout-row txn-row" key={i}>
                <span className="workout-name">{t.user}</span>
                <span className="workout-date">{t.plan}</span>
                <span className="workout-kcal">{t.amount}</span>
                <span className="workout-date">{t.method}</span>
                <span className="workout-date">{t.date}</span>
                <span className={`workout-lvl ${t.scolor}`}>{t.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Quick Admin Actions ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions-grid">
            {[
              { icon: '📢', label: 'Send Push Notification',  desc: 'Broadcast to all users' },
              { icon: '🔧', label: 'Toggle Maintenance Mode',  desc: 'Take app offline safely' },
              { icon: '📤', label: 'Export User Data',         desc: 'GDPR-compliant export' },
              { icon: '💾', label: 'Trigger DB Backup',        desc: 'Manual full snapshot' },
              { icon: '🏷️', label: 'Create Promo Code',        desc: 'Discount for premium' },
              { icon: '📊', label: 'Generate Monthly Report',  desc: 'PDF summary export' },
              { icon: '🔄', label: 'Sync Trainer Calendars',   desc: 'Force calendar refresh' },
              { icon: '🚫', label: 'Bulk Ban Users',           desc: 'Mass moderation action' },
            ].map((a, i) => (
              <button className="quick-action-card" key={i}>
                <span className="qa-icon">{a.icon}</span>
                <strong>{a.label}</strong>
                <p>{a.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ── Audit Log ── */}
        <div className="section-card full-width">
          <div className="section-card-header">
            <h2>Audit Log</h2>
            <span className="badge-updated">Last 24 hrs</span>
          </div>
          <div className="audit-list">
            {[
              { admin: 'superadmin',   action: 'Suspended user dev@mail.com',            time: '09:44 AM', type: 'danger' },
              { admin: 'priya@stackly', action: 'Resolved ticket #1072',                 time: '09:30 AM', type: 'success' },
              { admin: 'superadmin',   action: 'Updated pricing for Monthly plan',        time: '08:55 AM', type: 'warning' },
              { admin: 'ravi@stackly', action: 'Added new workout to library: Leg Day v2', time: '08:12 AM', type: 'info' },
              { admin: 'priya@stackly', action: 'Issued refund ₹999 to rohan@mail.com',  time: '07:48 AM', type: 'warning' },
              { admin: 'superadmin',   action: 'Created promo code STACK30',              time: '07:10 AM', type: 'info' },
              { admin: 'superadmin',   action: 'Triggered manual DB backup',              time: '12:00 AM', type: 'success' },
            ].map((log, i) => (
              <div className={`audit-item audit-${log.type}`} key={i}>
                <span className="audit-admin">{log.admin}</span>
                <span className="audit-action">{log.action}</span>
                <span className="audit-time">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;