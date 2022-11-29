import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import UpdateProfile from "./components/UpdateProfile";
import ContextProvider from "./context/Context";
import RequireAuth from "./context/RequireAuth";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
