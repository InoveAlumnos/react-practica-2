import "./App.css";
import Navbar from "./components/navbar/navbar";
import { useState, createContext } from "react";
// Importamos React Router:
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos componentes visuales:
import ComicCards from "./components/comicCards/comicCards";
import LoginForm from "./pages/login";
import Profile from "./pages/profile";
import Logout from "./pages/logout";
import SignUpForm from "./pages/signUp";
import Footer from "./components/footer/footer";
import { userDataStructure } from "./config";

export const UserContext = createContext()

function App() {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState(userDataStructure);

  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              component={ComicCards}
              element={<ComicCards />}
            ></Route>
            <Route
              path="/home"
              component={ComicCards}
              element={<ComicCards />}
            ></Route>
            <Route
              path="/user"
              component={Profile}
              element={
                auth ? (
                  <Profile
                    userData={userData}
                    userDataHook={(data) => setUserData(data)}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            ></Route>
            <Route
              path="/login"
              component={LoginForm}
              element={
                auth ? (
                  <Navigate to="/home" />
                ) : (
                  <LoginForm
                    auth={auth}
                    setAuthHook={(auth) => setAuth(auth)}
                    userData={userData}
                    userDataHook={(data) => setUserData(data)}
                  />
                )
              }
            ></Route>
            <Route
              path="/logout"
              component={Logout}
              element={
                auth ? (
                  <Logout auth={auth} setAuthHook={(auth) => setAuth(auth)} />
                ) : (
                  <Navigate to="/home" />
                )
              }
            ></Route>
            <Route
              path="/signup"
              component={SignUpForm}
              element={
                auth ? (
                  <Navigate to="/home" />
                ) : (
                  <SignUpForm
                    auth={auth}
                    setAuthHook={(auth) => setAuth(auth)}
                    userData={userData}
                    userDataHook={setUserData}
                  />
                )
              }
            ></Route>
          </Routes>
          <div className="navbar-container">
            <Navbar auth={auth} userData={userData} />
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </HashRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
