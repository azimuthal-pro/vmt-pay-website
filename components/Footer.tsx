import React from 'react'
import styles from '@/styles/Footer.module.css'
const Footer: React.FC = () => {
  return (
    <footer className={styles.mainCont}>
      <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 VmtPay. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>

    </footer>
    
  )
}

export default Footer