import React from 'react'
import styles from '@/styles/Navbar.module.css';


const Navbar: React.FC = () => {
  return (
   <nav className= {styles.navbar}>
    <div className={styles.logo}><span className={styles.vmt}>Vmt</span>PAY</div>
    <div className={styles.headline}>Secure and Fast Financial Tansactions</div>
    <button className={styles.loginBtn}>Login</button>
   </nav>
  )
}

export default Navbar