import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";
import logo from "../../assets/stackly_logo.webp" 

// ─── Replace this path with your actual logo file ───────────────────────────
// e.g. import logo from "../../assets/logo.png";
// Then swap the src below: <img src={logo} ... />
// ────────────────────────────────────────────────────────────────────────────
const LOGO_SRC = logo; // set to your logo import when ready

const NAV_LINKS = [
  { to: "/dashboard",  label: "Dashboard",  icon: "📊" },
  { to: "/dashboard",   label: "Workouts",   icon: "🏋️" },
  { to: "/dashboard",  label: "Nutrition",  icon: "🥗" },
  { to: "/dashboard",   label: "Progress",   icon: "📈" },
  { to: "/dashboard", label: "Membership", icon: "⭐" },
  { to: "/dashboard",    label: "Profile",    icon: "👤" },
  { to: "/dashboard",   label: "Settings",   icon: "⚙️" },
];

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate  = useNavigate();
  const location  = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLogout = () => { logout(); navigate("/"); };

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "AJ";

  return (
    <>
      {/* ════════════════════════════════
          MOBILE TOPBAR  (≤ 1024px)
      ════════════════════════════════ */}
      <header className="mobile-topbar">
        <button
          className="hamburger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="sidebar-drawer"
        >
          <span /><span /><span />
        </button>

        {/* Logo placeholder — mobile topbar */}
        <div className="topbar-logo-wrap">
          {LOGO_SRC ? (
            <img src={logo} alt="Logo" className="topbar-logo-img" />
          ) : (
            <div className="topbar-logo-placeholder" aria-label="Your logo here">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
                <path d="M3 9l4-4 4 4 4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>Your Logo</span>
            </div>
          )}
        </div>

        <div className="topbar-avatar" aria-hidden="true">{initials}</div>
      </header>

      {/* ════════════════════════════════
          OVERLAY
      ════════════════════════════════ */}
      <div
        className={`sidebar-overlay${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ════════════════════════════════
          SIDEBAR / DRAWER
      ════════════════════════════════ */}
      <aside
        id="sidebar-drawer"
        className={`sidebar${open ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        {/* Close button — mobile only */}
        <button
          className="sidebar-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* ── Logo placeholder ── */}
        <div className="sidebar-brand">
          {LOGO_SRC ? (
            <img src={LOGO_SRC} alt="Logo" className="sidebar-logo-img" />
          ) : (
            <div className="sidebar-logo-placeholder" title="Replace LOGO_SRC with your logo import">
              <div className="logo-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2.5"/>
                  <path d="M2 10l5-5 5 5 5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="logo-placeholder-text">
                <span className="logo-placeholder-label">Your Logo</span>
                <span className="logo-placeholder-hint">Replace LOGO_SRC</span>
              </div>
            </div>
          )}
        </div>

        {/* ── User Card ── */}
        <div className="sidebar-user">
          <div className="avatar" aria-hidden="true">{initials}</div>
          <div className="sidebar-user-info">
            <h4>{user?.name || "Alex Johnson"}</h4>
            <p>{user?.email || "alex@stackly.com"}</p>
          </div>
        </div>

        {/* ── Nav ── */}
        <p className="sidebar-section-label">Main Menu</p>

        <ul className="sidebar-links" role="list">
          {NAV_LINKS.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? "active" : ""}
                aria-current={location.pathname === to ? "page" : undefined}
              >
                <span className="nav-icon" aria-hidden="true">{icon}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sidebar-divider" />

        {/* ── Logout ── */}
        <button className="sidebar-logout" onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>
    </>
  );
}

export default Sidebar;