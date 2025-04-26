'use client';
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import { useRouter } from 'next/navigation';


const Navbar = () => {

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.log}><img src="/vmt-logo.jpg" alt="Logo" width="50" height="50" /></div>
      <div className={styles.headline}>Secure and Fast Financial Transactions</div>
      <button className={styles.loginBtn} onClick={handleLoginClick}>
        Login
      </button>
    </nav>
  )
}

export default Navbar