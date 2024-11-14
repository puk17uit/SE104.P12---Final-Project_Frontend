import React, { useState } from 'react';
import './index.css';

const App: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />
          <span>BUTTH Learning Journey</span>
        </div>
        <div className="header-icons">
          <span>🔔</span>
          <span>💬</span>
          <span>🔍</span>
        </div>
        <button className="login-button">Đăng nhập</button>
      </header>
      <div className="login-container">
        <h1>ĐĂNG NHẬP</h1>
        <form className="login-form">
          <label htmlFor="username">Tên đăng nhập</label>
          <input type="text" id="username" placeholder="Nhập tên đăng nhập" />

          <label htmlFor="password">Mật khẩu</label>
          <div className="password-input">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Nhập mật khẩu mới"
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer' }}
            >
              {passwordVisible ? '🙈' : '👁️'}
            </span>
          </div>

          <a href="/forgot-password" className="forgot-password">
            Quên mật khẩu?
          </a>

          <button type="submit" className="submit-button">
            ĐĂNG NHẬP
          </button>
        </form>

        <div className="or-divider">HOẶC</div>

        <div className="social-login">
          <button className="facebook-button">Facebook</button>
          <button className="google-button">Google</button>
        </div>

        <div className="signup-link">
          Bạn chưa có tài khoản? <a href="/signup">Đăng ký</a>
        </div>
      </div>
    </div>
  );
};

export default App;
