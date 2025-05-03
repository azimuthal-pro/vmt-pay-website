'use client';
import React, { useState } from 'react';
import styles from '@/styles/Resources.module.css';

const faqs = [
    {
        question: 'Is VMTpay secure?',
        answer: 'Yes! We use the latest encryption and security protocols to protect your data.',
    },
    {
        question: 'How do I reset my password?',
        answer: 'Click on “Forgot password” on the login screen and follow the steps.',
    },
    {
        question: 'What payment methods are supported?',
        answer: 'You can use mobile money, cards, and bank transfers to fund your wallet.',
    },
];

const ResourcesPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h2>User Guides</h2>
                <div className={styles.guides}>
                    <div className={styles.card}>📤 How to Send Money</div>
                    <div className={styles.card}>💳 Top-Up Your Wallet</div>
                    <div className={styles.card}>👤 Managing Your Account</div>
                    <div className={styles.card}>📈 Transaction Fees Information</div>
                </div>
            </section>

            <section className={styles.section}>
                <h2>FAQs</h2>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className={styles.question}>{faq.question}</div>
                            {activeIndex === index && <div className={styles.answer}>{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;
