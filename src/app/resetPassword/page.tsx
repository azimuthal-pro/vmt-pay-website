'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import styles from '@/styles/ResetPassword.module.css';

const ResetPasswordPage = () => {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire('Error', 'Passwords do not match', 'error');
      return;
    }

    const storedUser = localStorage.getItem('userData');

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      userData.password = password;
      localStorage.setItem('userData', JSON.stringify(userData));

      Swal.fire('Success', 'Password reset successfully', 'success').then(() => {
        router.push('/login');
      });
    } else {
      Swal.fire('Error', 'No user found in local storage', 'error');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Reset Your Password</h2>
      <form className={styles.form} onSubmit={handleReset}>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className={styles.submitBtn} type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
