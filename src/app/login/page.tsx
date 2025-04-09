'use client';
import React from 'react';
import styles from '@/styles/Login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><img src="/vmt-logo.jpg" alt="Logo" height="100" width="100" /></div>
      <h2 className={styles.header}>Login to Your Account</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className={styles.submitBtn}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
