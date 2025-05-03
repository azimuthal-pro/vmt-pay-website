import React from 'react'
import styles from '@/styles/Footer.module.css'
const Footer: React.FC = () => {
  return (
//    
<footer className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.logoSection}>
      <img src="/vmt-logo.jpg" alt="VmtPay Logo" width={60} />
      <p>Empowering Fast & Secure Transactions Worldwide</p>
    </div>

    <div className={styles.linksSection}>
      <h4>Company</h4>
      <a href="#">About Us</a>
      <a href="#">Blog</a>
    </div>

    <div className={styles.linksSection}>
      <h4>Support</h4>
      <a href="#">Help Center</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>

    <div className={styles.socialSection}>
      <h4>Follow Us</h4>
      <a href="" className={styles.linkSect}><img src="/facebook.svg" alt="Social Icons" width={60} /></a>
      <a href=""className={styles.linkSect}><img src="/instagram.svg" alt="Social Icons" width={60} /></a>
      <a href=""className={styles.linkSect}><img src="/linkedin.svg" alt="Social Icons" width={60} /></a>
      <a href=""className={styles.linkSect}><img src="/x.svg" alt="Social Icons" width={60} /></a>
    </div>
  </div>

  <div className={styles.bottomBar}>
    <p>&copy; {new Date().getFullYear()} VmtPay. All rights reserved.</p>
  </div>
</footer>

    
    
    
    
    
    
    
    
    
  )
}

export default Footer