import React, { useEffect } from "react";
import styles from "./Legal.module.css";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

      <div className={styles.content}>
        <section>
          <h2>1. Introduction</h2>
          <p>
            By accessing or using the Technocracy/Vikunja system, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Authorized Use</h2>
          <p>
            The Technocracy/Vikunja system is provided for authorized individuals to collaborate and manage projects. You agree to use the system only for its intended purposes and in compliance with all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2>3. Account Responsibility</h2>
          <p>
            You are entirely responsible for maintaining the security of your account. You must not share your access credentials with others and must promptly notify us of any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2>4. No Unauthorized Access</h2>
          <p>
            Users are strictly prohibited from attempting to gain unauthorized access to the system, other user accounts, or any associated infrastructure. Any misuse, malicious activity, or attempts to breach security will result in immediate termination of access and potential disciplinary action.
          </p>
        </section>

        <section>
          <h2>5. Service Availability</h2>
          <p>
            While we strive to provide reliable access to our services, availability is not guaranteed 100% of the time. The system may experience downtime due to maintenance, updates, or unforeseen technical issues. Technocracy shall not be liable for any disruptions in service.
          </p>
        </section>

        <section>
          <h2>6. Access Revocation</h2>
          <p>
            Technocracy reserves the right, at its sole discretion, to suspend or revoke access to the system at any time, with or without notice, for any violation of these Terms of Service or for any other reason deemed necessary to protect the integrity of our systems.
          </p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>
            We may update these Terms of Service periodically. Continued use of the system following any modifications indicates your acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
