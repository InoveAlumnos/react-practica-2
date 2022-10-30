import styles from "./signUp.module.css";
import { FormInput } from "../components/form_inputs/formInputs.js";
import { NavLink, useNavigate } from "react-router-dom";

const SignUpForm = (props) => {
  let navigate = useNavigate();
  const { setAuthHook, userData, userDataHook } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const e = event.target
    alert(`Your data: 
    ✅ First Name: ${e.firstName.value}
    ✅ Last Name: ${e.lastName.value}
    ✅ Username: ${e.username.value}
    ✅ E-mail: ${e.email.value}
    ✅ Password: ${e.password.value}
    ✅ Repeated password: ${e.repeatPassword.value}`);
    if (e.password.value !== e.repeatPassword.value) {
      // Previene que las contraseñas ingresadas sean distinas
      alert("😬 New passwords doesn't match");
    } else {
      // Actualiza el objeto global userData
      setAuthHook(true);
      alert("🥳 Thank you for joining us!!");
      userData.firstName = e.firstName.value;
      userData.lastName = e.lastName.value;
      userData.username = e.username.value;
      userData.email = e.email.value;
      userData.password = e.password.value;
      userDataHook(userData);
      navigate("/home", { replace: true });
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
