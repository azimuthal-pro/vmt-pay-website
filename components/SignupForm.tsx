'use client'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import React, { useState } from 'react';
import styles from '@/styles/signup.module.css'


const SignupForm = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        agreeToTerms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className={styles.cont}>
            <div className={styles.logo}><img src="/vmt-logo.jpg" alt="Logo" height="100" width="100" /></div>
            <h2 className={styles.header}>Create an Account</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className={styles.formGroup}>
                    <label htmlFor="phone">Mobile Number</label>
                    <PhoneInput 
                    country={'gh'}
                    value={formData.phoneNumber}
                    onChange={(phone) => setFormData({ ...formData, phoneNumber: phone})}
                    inputStyle={{ width: '100%' }}
                    inputProps={{
                        name: 'phone',
                        required : true,
                    }}
                     />



                </div>


                <div className={styles.formGroup}>
                    <label>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleCheckboxChange}
                            required
                        />
                         <span className={styles.terms}>I agree to  Terms and Conditions</span>
                    </label>
                </div>
                <button type="submit" className={styles.submitBtn}>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignupForm;