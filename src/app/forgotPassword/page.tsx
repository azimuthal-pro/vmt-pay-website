'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/ForgotPassword.module.css';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      Swal.fire('Error', 'No users found. Please sign up first.', 'error');
      return;
    }

    const userData = JSON.parse(storedData);
    if (email !== userData.email) {
      Swal.fire('Error', 'Email not found in system.', 'error');
      return;
    }

    // Save email temporarily to localStorage for password reset step
    localStorage.setItem('resetEmail', email);
    router.push('/resetPassword');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Reset Your Password</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">Enter your registered email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.submitBtn}>Continue</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
