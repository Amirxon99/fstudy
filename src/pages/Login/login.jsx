import { useState } from 'react';
import './login.css';

// Иконки компоненты (заменяют импорты из lucide-react)
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-small">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-small">
    <path d="m12 19-7-7 7-7"></path>
    <path d="M19 12H5"></path>
  </svg>
);

export default function LoginPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  
  const toggleView = () => {
    // Добавляем класс, который скрывает панель перед переключением для плавной анимации
    const panels = document.querySelectorAll('.left-panel, .right-panel');
    panels.forEach(panel => {
      panel.style.opacity = '0';
      panel.style.transform = 'translateY(10px)';
    });
    
    // Через небольшую задержку меняем состояние и возвращаем стили
    setTimeout(() => {
      setIsLoginView(!isLoginView);
      
      setTimeout(() => {
        panels.forEach(panel => {
          panel.style.opacity = '';
          panel.style.transform = '';
        });
      }, 50);
    }, 300);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="panels-container">
          {/* Left Panel */}
          <div className={`left-panel ${isLoginView ? 'visible' : 'hidden-mobile'}`}>
            {isLoginView ? (
              <div className="panel-content">
                <div className="text-center">
                  <h2 className="title">Kirish</h2>
                  <p className="subtitle">Xush kelibsiz !</p>
                </div>
                
                <div className="form-container">
                  <div className="form-group">
                    <label>Username </label>
                    <div className="input-group">
                      <UserIcon />
                      <input 
                        type="text" 
                        placeholder="Username kiriting"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Parol</label>
                    <div className="input-group">
                      <LockIcon />
                      <input 
                        type="password" 
                        placeholder="Parol  kiriting"
                      />
                    </div>
                  </div>
                  
                  <div className="form-options">
                    <div className="remember-me">
                      <input 
                        type="checkbox" 
                        id="remember"
                      />
                      <label htmlFor="remember">
                        Eslab qolish
                      </label>
                    </div>
                    <a href="#" className="forgot-password">
                      Parolni unutdingizmi?
                    </a>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="submit-button"
                  >
                    Kirish
                  </button>
                </div>
                
                <div className="toggle-view">
                  <p>
                    Akkount yo'qmi?{' '}
                    <button
                      onClick={toggleView}
                      className="toggle-link"
                    >
                      Ro'yxatdan o'tish
                      <ArrowRightIcon />
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="back-to-login mobile-only">
                <button
                  onClick={toggleView}
                  className="back-button"
                >
                  <ArrowLeftIcon />
                  Вернуться к входу
                </button>
              </div>
            )}
          </div>
          
          {/* Right Panel */}
          <div className={`right-panel ${isLoginView ? 'hidden-mobile' : 'visible'}`}>
            {!isLoginView ? (
              <div className="panel-content">
                <div className="text-center">
                  <h2 className="title">Регистрация</h2>
                  <p className="subtitle">Создайте свой аккаунт</p>
                </div>
                
                <div className="form-container">
                  <div className="form-group">
                    <label>Имя пользователя</label>
                    <div className="input-group">
                      <UserIcon />
                      <input 
                        type="text" 
                        placeholder="Выберите имя пользователя"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-group">
                      <MailIcon />
                      <input 
                        type="email" 
                        placeholder="Ваш email адрес"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Пароль</label>
                    <div className="input-group">
                      <LockIcon />
                      <input 
                        type="password" 
                        placeholder="Создайте пароль"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Подтвердите пароль</label>
                    <div className="input-group">
                      <LockIcon />
                      <input 
                        type="password" 
                        placeholder="Повторите пароль"
                      />
                    </div>
                  </div>
                  
                  <div className="terms-checkbox">
                    <input 
                      type="checkbox" 
                      id="terms"
                    />
                    <label htmlFor="terms">
                      Я согласен с <a href="#" className="terms-link">условиями</a> и <a href="#" className="terms-link">политикой конфиденциальности</a>
                    </label>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="submit-button"
                  >
                    Зарегистрироваться
                  </button>
                </div>
                
                <div className="toggle-view">
                  <p>
                    Уже есть аккаунт?{' '}
                    <button
                      onClick={toggleView}
                      className="toggle-link"
                    >
                      <ArrowLeftIcon />
                      Войти
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="cta-container desktop-only">
                <div className="cta-content">
                  <h3 className="cta-title">Нет аккаунта?</h3>
                  <p className="cta-text">
                    Зарегистрируйтесь, чтобы получить доступ ко всем возможностям нашего сервиса
                  </p>
                  <button
                    onClick={toggleView}
                    className="cta-button"
                  >
                    Зарегистрироваться
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}