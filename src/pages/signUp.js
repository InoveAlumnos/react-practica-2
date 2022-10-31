import styles from "./signUp.module.css";
import { FormInput } from "../components/form_inputs/formInputs.js";
import { NavLink, useNavigate } from "react-router-dom";
import { signUpUser } from "../api/UserApis";
import { UserContext } from "../App";
import { useContext } from "react";

const SignUpForm = (props) => {
  let navigate = useNavigate();
  const { setAuthHook } = props;
  const {userData, setUserData } = useContext(UserContext);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const e = event.target
    if (e.password.value !== e.repeatPassword.value) {
      // Previene que las contraseñas ingresadas sean distinas
      alert("😬 New passwords doesn't match");
    } else {
      // Actualiza el objeto global userData
      alert("🥳 Thank you for joining us!!");
      try {
        const response = await signUpUser(
          e.firstName.value,
          e.lastName.value,
          e.email.value,
          e.username.value,
          e.password.value,
        )
        userData.firstName = response.first_name;
        userData.lastName = response.last_name;
        userData.username = response.username;
        userData.email = response.first_name;
        userData.password = e.password.value;
        console.log(userData)
        setUserData(userData);
        navigate("/login", { replace: true });
      } catch (error) {
        alert(`Ups! Algo salió mal: ${error}`);
      }


    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.fromBox}>
        <div className={styles.initialMessage}>
          <h1>Sign Up!</h1>
        </div>
        <form className={styles.signUpFormContainer} onSubmit={handleSubmit}>
          {FormInput("First name:", "text", userData.firstName, "firstName")}
          {FormInput("Last name:", "text", userData.lastName, "lastName")}
          {FormInput("Username:", "text", userData.username, "username")}
          {FormInput("Email:", "email", userData.email, "email")}
          {FormInput("Password:", "password", userData.password, "password")}
          {FormInput("Repeat password:", "password", "MySuperSecretKey", "repeatPassword")}
          <input
            className={styles.submitButton}
            type="submit"
            value="Create Account"
          />
        </form>
      </div>
      <div className={styles.endMessage}>
        <p>
          Already have an account?{" "}
          <NavLink className={styles.loginLink} to="/login">
            Log In!
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default SignUpForm;
