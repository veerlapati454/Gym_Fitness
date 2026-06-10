import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";
import logo from "../../assets/stackly_logo.webp";

const LOGO_SRC = logo;

const NAV_LINKS = [
  { id: "dashboard",  label: "Dashboard",  icon: "📊" },
  { id: "workouts",   label: "Workouts",   icon: "🏋️" },
  { id: "nutrition",  label: "Nutrition",  icon: "🥗" },
  { id: "progress",   label: "Progress",   icon: "📈" },
  { id: "membership", label: "Membership", icon: "⭐" },
  { id: "profile",    label: "Profile",    icon: "👤" },
  { id: "settings",   label: "Settings",   icon: "⚙️" },
];

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("dashboard");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (id) => {
    setActiveId(id);
    setOpen(false);
  };

  const handleLogout = () => { logout(); navigate("/"); };

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

        {/* Absolutely centered logo — unaffected by hamburger width */}
        <div className="topbar-logo-wrap">
          {LOGO_SRC ? (
            <img src={LOGO_SRC} alt="Stackly" className="topbar-logo-img" />
          ) : (
            <div className="topbar-logo-placeholder" aria-label="Your logo here">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
                <path d="M3 9l4-4 4 4 4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>STACKLY</span>
            </div>
          )}
        </div>
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

        {/* ── Logo ── */}
        <div className="sidebar-brand">
          {LOGO_SRC ? (
            <img src={LOGO_SRC} alt="Stackly" className="sidebar-logo-img" />
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

        {/* ── Nav ── */}
        <p className="sidebar-section-label">Main Menu</p>

        <ul className="sidebar-links" role="list">
          {NAV_LINKS.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                className={`nav-btn${activeId === id ? " active" : ""}`}
                onClick={() => handleNavClick(id)}
                aria-current={activeId === id ? "page" : undefined}
              >
                <span className="nav-icon" aria-hidden="true">{icon}</span>
                {label}
              </button>
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