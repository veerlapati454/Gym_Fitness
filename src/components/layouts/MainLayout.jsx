import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MainLayout() {
  const location = useLocation();

  const dashboardRoutes = [
    "/dashboard",
    "/profile",
    "/settings",
    "/membership",
    "/workouts",
    "/nutrition",
    "/progress",
  ];

  const isDashboardPage =
    dashboardRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!isDashboardPage && <Header />}

      <main className="main-content">
        <Outlet />
      </main>

      {!isDashboardPage && <Footer />}
    </div>
  );
}

export default MainLayout;