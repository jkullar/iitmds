import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { DashboardPage } from "./components/DashboardPage";
import "./index.css";

function RootRouter() {
  const location = useLocation();
  const first = location.pathname.split("/").filter(Boolean)[0];
  if (first === "login") return <LoginPage />;
  if (first === "signup") return <SignupPage />;
  if (first === "dashboard") return <DashboardPage />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  </BrowserRouter>
);
