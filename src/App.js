import "./App.css";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import { UserContext } from "./appContext";
// Importamos React Router:
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos componentes visuales:
import ComicCards from "./components/comicCards/comicCards";
import LoginForm from "./pages/login";
import Profile from "./pages/profile";
import Logout from "./pages/logout";
import SignUpForm from "./pages/signUp";
import Footer from "./components/footer/footer";

function App() {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "firstName",
    lastName: "lastName",
    username: "yourUsername",
    email: "youremail@inove.com.ar",
    phone: "+54-9-11-1234-5678",
    country: "yourCountry",
    provinceState: "yourState",
    city: "yourCity",
    postalCode: "yourPostalCode",
    password: "12345",
  });

  return (
    <UserContext.Provider value={{userData, setUserData}}>    
    
    <div className="App">
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
                <Profile/>
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
                />
              )
            }
          ></Route>
        </Routes>
        <div className="navbar-container">
          <Navbar auth={auth}/>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </HashRouter>
    </div>
    </UserContext.Provider>

  );
}

export default App;
