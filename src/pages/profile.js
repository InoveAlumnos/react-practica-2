import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../appContext";


import {
  FormInput,
  PhoneInput,
  RequiredFormInput,
} from "../components/form_inputs/formInputs.js";

const Profile = () => {
  const {userData, setUserData } = useContext(UserContext);
  // Este es un hook de React Router que nos ayuda a redireccionar luego del submit.
  let navigate = useNavigate();

  // Desestructuramos los props:
  // const { userData, setUserData } = props;

  // Función que maneja el submit del formulario, actualiza el objeto global userData.
  const handleProfileSubmit = (event) => {
    event.preventDefault();
    const e = event.target
    userData.firstName = e.firstName.value;
    userData.lastName = e.lastName.value;
    userData.username = e.username.value;
    userData.email = e.email.value;
    userData.phone = e.phone.value;
    userData.country = e.country.value;
    userData.provinceState = e.provinceState.value;
    userData.city = e.city.value;
    userData.postalCode = e.postalCode.value;
    setUserData(userData);
    console.table(userData);
  };

  // Función que maneja el submit del formulario, actualiza el objeto global userData.
  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    const e = event.target
    if (e.newPassword.value !== e.repeatNewPassword.value) {
      // Previene que las contraseñas ingresadas sean distinas
      alert("😬 New passwords doesn't match");
    } else if (e.actualPassword.value === e.newPassword.value) {
      // Previene que las contraseñas ingresadas sean iguales a la original
      alert("😛 The New password must be diferent than the old one");
    } else {
      // Actualiza el objeto global userData
      userData.password = e.newPassword.value;
      setUserData(userData);
      alert("🥳 Password Updated !!");
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className={styles.formsContainer}>
      <div className={styles.userProfileContainer}>
        <div className={styles.initialMessage}>
          <h1>User Profile</h1>
        </div>
        <form
          className={[styles.userProfileForm, styles.formCommon].join(" ")}
          onSubmit={handleProfileSubmit}
        >
          {FormInput("First name", "text", userData.firstName, 'firstName')}
          {FormInput("Last name", "text", userData.lastName, 'lastName')}
          {RequiredFormInput("**Username", "text", userData.username, 'username')}
          {RequiredFormInput("**Email", "email", userData.email, 'email')}
          {PhoneInput("**Phone", userData.phone, 'phone')}
          <p>[Delivery address]</p>
          {FormInput("Country:", "text", userData.country, 'country')}
          {FormInput("Province - State:", "text", userData.provinceState, 'provinceState')}
          {FormInput("City:", "text", userData.city, 'city')}
          {FormInput("Postal Code:", "text", userData.postalCode, 'postalCode')}
          <input
            className={styles.submitButton}
            type="submit"
            value="Update profile"
          />
        </form>
      </div>
      <div className={styles.passwordFormContainer}>
        <div className={styles.initialMessage}>
          <h1>Change Password</h1>
        </div>
        <form
          className={[styles.passwordForm, styles.formCommon].join(" ")}
          onSubmit={handlePasswordSubmit}
        >
          {RequiredFormInput("**Actual Password", "text", userData.password,"actualPassword")}
          {RequiredFormInput("**New Password", "password", "**", "newPassword" )}
          {RequiredFormInput("**Repeat new password", "password", "***", "repeatNewPassword")}
          <input
            className={styles.passwordSubmitButton}
            type="submit"
            value="Password Reset"
          />
        </form>
      </div>
    </div>
  );
};
export default Profile;
