import React from 'react';
import styles from '@/styles/Body.module.css';
import Image from 'next/image';
const Body: React.FC = () => {
    return (
        <section className={styles.bodyCont}>
            <div className={styles.textSect}>
                <h2 className={styles.heading}>
                    Enabling <span className={styles.payment}>Payments</span> <br />
                    <p>Without Boundaries </p>
                </h2>
                <p className={styles.subHeading}>
                    VmtPay is the latest and fastest gateway to all kinds of payment across the world
                </p>

                <button className={styles.signupBtn}>Sign Up</button>
            </div>

            <div className={styles.imageSect}>
                <Image
                    src="/page.jpg"
                    alt="Image Here"
                    height={500}
                    width={700}
                    className={styles.image}
                />
            </div>
        </section>



    );
};

export default Body;