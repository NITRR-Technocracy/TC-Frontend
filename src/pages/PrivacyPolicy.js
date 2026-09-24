import React, { useEffect } from "react";
import styles from "./Legal.module.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className={styles.content}>
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to the Technocracy/Vikunja system. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our authentication system.
          </p>
        </section>

        <section>
          <h2>2. Authentication Method</h2>
          <p>
            Our system utilizes Google Sign-In for secure authentication. We do not process or store your passwords directly.
          </p>
        </section>

        <section>
          <h2>3. Data Collected</h2>
          <p>
            When you sign in, we collect the following information:
          </p>
          <ul>
            <li>Your full name</li>
            <li>Your email address</li>
            <li>Your Google account ID</li>
            <li>Basic profile information provided by Google</li>
          </ul>
        </section>

        <section>
          <h2>4. Purpose of Collection</h2>
          <p>
            The data collected is used solely for the following purposes:
          </p>
          <ul>
            <li>Verifying your identity and managing authentication</li>
            <li>Controlling access to the Technocracy workspace account</li>
            <li>Maintaining the security and integrity of our systems</li>
          </ul>
        </section>

        <section>
          <h2>5. Storage &amp; Protection</h2>
          <p>
            User data is securely stored on our servers with industry-standard encryption. Access to this data is strictly limited to authorized personnel and is protected against unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or otherwise share your personal information with third parties. Your data is kept strictly within the necessary infrastructure providers required to operate the Technocracy/Vikunja system.
          </p>
        </section>

        <section>
          <h2>7. Data Retention &amp; Deletion</h2>
          <p>
            We retain your data for as long as your account is active. If you wish to delete your account or request the removal of your personal data, you may contact us using the details below. We will process your request promptly in accordance with applicable laws.
          </p>
        </section>

        <section>
          <h2>8. Contact Information</h2>
          <p>
            For any questions, concerns, or requests regarding your data, please contact the Technocracy/NITRR team at:
          </p>
          <ul>
            <li>Email: <a href="mailto:nitrr.technocracy@gmail.com">nitrr.technocracy@gmail.com</a></li>
            <li>Address: NIT Raipur, Raipur, CG 492013</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
