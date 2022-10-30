import styles from "./navbar.module.css";
import marvelLogo from "../../assets/img/marvel.svg";
import home from "../../assets/img/home_logo.png";
import logout from "../../assets/img/LogOut.png";
import signup from "../../assets/img/signup_logo.png";
import user from "../../assets/img/user_logo.png";
// Importamos de React Router para manejar los links:
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    const {auth, userData} = props
    const button = (url, cls, image) => {
        return <NavLink to={url}><img className={cls} alt="" src={image}></img></NavLink>
    }

    return (
        <header className={styles.navbar}>
            <div className={styles.logoContainer}>
                <NavLink to="/"><img className={styles.logo} alt="" src={marvelLogo}></img></NavLink>
            </div>
            <div className={styles.buttonContainer}>
                {button("/home", styles.home, home)}
                {auth === true ? <span className ={styles.hiden}></span> : button("/signup", styles.signup, signup)}
                {button("/user", styles.user, user)}
                {auth === false ? <span className ={styles.hiden}></span> : button("/logout", styles.logout, logout)}
            </div>
        </header>
    )
}
export default Navbar;
