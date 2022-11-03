import styles from "./signUp.module.css";
import { FormInput } from "../components/form_inputs/formInputs.js";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../appContext";
import { eCommerceApi, usersSignup} from "../api/apiClient"


const SignUpForm = (props) => {
  const {userData, setUserData } = useContext(UserContext);
  let navigate = useNavigate();
  const { setAuthHook } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const e = event.target
    if (e.password.value !== e.repeatPassword.value) {
      // Previene que las contraseñas ingresadas sean distinas
      alert("😬 New passwords doesn't match");
    } else {
      // Actualiza el objeto global userData
      try {
        const response = await eCommerceApi.post(usersSignup, {
          "first_name": e.firstName.value,
          "last_name": e.lastName.value,
          "email": e.email.value,
          "username": e.username.value,
          "password": e.password.value
        }
        );
        console.log(response);
        userData.firstName = e.firstName.value;
        userData.lastName = e.lastName.value;
        userData.username = e.username.value;
        userData.email = e.email.value;
        userData.password = e.password.value;
        setUserData(userData);
      } catch (error) {
        console.error(error);
      }
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.fromBox}>
        <div className={styles.initialMessage}>
          <h1>Sign Up!</h1>
        </div>
        <form className={styles.signUpFormContainer} onSubmit={handleSubmit}>
          {FormInput("First name:", "text", userData.firstName,"firstName" )}
          {FormInput("Last name:", "text", userData.lastName,"lastName" )}
          {FormInput("Username:", "text", userData.username,"username" )}
          {FormInput("Email:", "email", userData.email,"email" )}
          {FormInput("Password:", "password", userData.password,"password" )}
          {FormInput("Repeat password:", "password", "MySuperSecretKey","repeatPassword" )}
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
