import styles from "./login.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../appContext";
import { eCommerceApi, usersLogin} from "../api/apiClient"

const label = (labelName, type, value, name) => {
  return (
    <label>
      {labelName}
      <input
        className={styles.inputBox}
        type={type}
        defaultValue={value}
        name={name}
      />
    </label>
  );
};

const LoginForm = (props) => {
  const {userData, setUserData } = useContext(UserContext);

  // Desestructuramos los props:
  const { setAuthHook } = props;
  const { username, password } = userData;

  // Establecemos la función que guarda los cambios en los datos globales:
  const handleSubmit = async (event) => {
    // Suspendemos el evento para evitar submits erroneos
    event.preventDefault();
    // Seteamos como autorizado al usuario
    // Actualizamos el objeto userData en este contexto
    userData.username = event.target.username.value;
    userData.password = event.target.password.value;
    // Actualizamos userData para el contexto global

    try {
      const response = await eCommerceApi.post(usersLogin,
        {
          "username": userData.username,
          "password": userData.password
        }
      );
      console.log(response);
      userData.uid = response.data.uid
      userData.token = response.data.token
      setUserData(userData);
      setAuthHook(true);
      console.table(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.formContainer}>
        <div className={styles.initialMessage}>
          <h1>Welcome</h1>
          <p>Log in to your account</p>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          {/* Cada setXxxx actualiza "onChange" el valor del hook,
          cuando el usuario presiona una tecla en el campo, se actualiza
          el valor de la variable del hook. Es por eso que newName debe disparar a setNewName */}
          {label("Username:", "text", username,"username")}
          {label("Password:", "password", password,"password")}
          <input className={styles.submitButton} type="submit" value="Log In" />
        </form>
      </div>
      <div className={styles.endMessage}>
        <p>
          New to marvel e-commerce?{" "}
          <NavLink className={styles.signupLink} to="/signup">
            Sign Up!
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default LoginForm;
