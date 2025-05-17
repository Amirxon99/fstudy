import styles from "./header.module.css";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Menu holatini boshqarish uchun
  const isLogin = JSON.parse(localStorage.getItem("user"))?true:false;

  const login = () => {
    localStorage.setItem("login", "true");
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Mobil menyu yopiladi
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <Link to="/" className={styles.headerLink}>
           <img src={logo} alt="EduPlatform logo" className={styles.logo} />
          <span className={styles.logoText}>Fluent Study</span>
          </Link>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)} // Menu holatini almashtirish
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link to="/">Bosh Sahifa</Link>
             
            </li>
            <li>
              <button onClick={() => scrollToSection("courses")} className={styles.navBtn}>
                Kurslar
              </button>
            </li>
            <li>
              {/* <button onClick={() => scrollToSection("stats")} className={styles.navBtn}>
                Testlar
              </button> */}
              <Link to="/tests">Testlar</Link>
            </li>
            <li>
              <button onClick={() => scrollToSection("reviews")} className={styles.navBtn}>
                Blog
              </button>
            </li>
            <li>
              <a href="/">Biz haqimizda</a>
            </li>
          </ul>

          {isLogin ? (
            <button onClick={logout} className={styles.signupBtn}>
              Log out
            </button>
          ) : (
            <div className={styles.btnBox}>
              <button onClick={login} className={styles.loginBtn}>
                Kirish
              </button>
              <button onClick={login} className={styles.signupBtn}>
                Ro'yxatdan o'tish
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
