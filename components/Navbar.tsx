'use client';
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Navbar = () => {

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><img src="/vmt-logo.jpg" alt="Logo" width="50" height="50" /></div>
      {/* <div className={styles.headline}>Secure and Fast Financial Transactions</div> */}
      <div className={styles.navlinks}>
        <Link href={'/Services'} className={styles.link}>
          Services
        </Link>
        <Link href={'#'} className={styles.link}>
          About
        </Link>

        <Link href={'/Resources'} className={styles.link}>
          Resources
        </Link>

        <Link href={'#'} className={styles.link}>
          Developers
        </Link>
      </div>
      <button className={styles.loginBtn} onClick={handleLoginClick}>
        Login
      </button>
    </nav>
  )
}

export default Navbar