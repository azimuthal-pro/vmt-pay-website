'use client';
import React from 'react';
import styles from '@/styles/Services.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Our Services</h1>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h2>Send Money</h2>
          <p>Quick and secure money transfers to anyone, anywhere.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Pay Bills</h2>
          <p>Pay utilities, internet, and more directly from your dashboard.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Top-Up Wallet</h2>
          <p>Add funds to your VMTpay wallet easily and instantly.</p>
        </div>
        {/* New services added below */}
        <div className={styles.serviceCard}>
          <h2>Mobile Airtime</h2>
          <p>Recharge your mobile phone with airtime from any network.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Merchant Payments</h2>
          <p>Make seamless payments to partnered merchants and shops.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Request Money</h2>
          <p>Ask friends, family, or businesses to send you money easily.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

