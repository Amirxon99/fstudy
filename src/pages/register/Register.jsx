import styles from './register.module.css'

function Register() {
    


      
  return (
  
          <div className={styles.login}>
               <div className={styles.loginBox}>
                 <div className="loginImg">
                     <img src="https://account.asus.com/img/login_img02.png" alt="sdf" />
                 </div>
                 <form action="" className={styles.form}>
                      <h2>Ro'yxatdan o'tish</h2>
                      <label htmlFor="name">Ism</label>
                      <input id="name" type="text"placeholder="Ismingizni kiriting " /> 
                      <label htmlFor="familya">Familya</label>
                      <input id="familya" type="text"placeholder="Familya kiriting " /> 
                      <label htmlFor="username">Username</label>
                      <input id="username" type="text"placeholder="Username kiriting " /> 
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email"placeholder="Email kiriting " /> 
                      <label htmlFor="password">Parol</label>
                      <input id="password" type="password"placeholder="Parol kiriting " /> 
                      <button type="submit" id="submit-btn">Ro'yxatdan o'tish</button>
                      <p>Account mavjud? <a href="/login">Kirish</a></p>
                 </form>
        
            </div>
            </div>
  
  )
}

export default Register