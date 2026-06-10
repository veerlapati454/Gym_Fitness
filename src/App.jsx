import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
            <Route path="/admin-dashboard" element={<AdminDashboard/> } />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;