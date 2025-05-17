import styles from "./login.module.css";



function login() {
  return (
    <div className={styles.login}>
       <div className={styles.loginBox}>
         <form action="" className={styles.form}>
              <h2>Kirish</h2>
              <p>Xush kelibsiz!</p>
              <label htmlFor="username">Username</label>
              <input id="username" type="text"placeholder="Username kiriting " /> 
              <label htmlFor="password">Parol</label>
              <input id="password" type="password"placeholder="Parol kiriting " /> 
              <button type="submit" id="submit-btn">Kirish</button>
              <p>Akkount yo'qmi? <a href="/register">Ro'yxatdan o'tish</a></p>
         </form>
         <div className="loginImg">
             <img src="https://account.asus.com/img/login_img02.png" alt="sdf" />
         </div>

    </div>
    </div>
   
  )
}

export default login