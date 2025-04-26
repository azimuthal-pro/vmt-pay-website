'use client';
import React, { useState } from 'react';
import styles from '@/styles/Login.module.css';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const storedData = localStorage.getItem('userData');
      if (!storedData) {
        Swal.fire('Error', 'No user found. Please sign up first.', 'error');
        setLoading(false);
        return;
      }

      const userData = JSON.parse(storedData);

      if (
        credentials.email === userData.email &&
        credentials.password === userData.password
      ) {
        Swal.fire('Login Successful', 'Welcome back to VMTpay!', 'success');
        // TODO: route to dashboard or homepage
      } else {
        Swal.fire('Invalid Credentials', 'Email or password is incorrect.', 'error');
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}><img src="/vmt-logo.jpg" alt="Logo" height="100" width="100" /></div>
      <h2 className={styles.header}>Login to Your Account</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required onChange={handleChange} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required onChange={handleChange} />
        </div>

        <div className={styles.forgetPassword}>
          <a href="/forgotPassword">Forgot password?</a>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? (
            <span className={styles.spinner}></span>
          ) : (
            'Login'
          )}
        </button>
      </form>
      <div className={styles.alternative}>
        Don't Have an Account? <span className={styles.signUpLink}><a href="/signup">Sign Up</a></span>
      </div>
    </div>
  );
};

export default LoginPage;


