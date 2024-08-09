import styles from "./index.module.css";
import bg from "./assets/textbg.png";
export default function TandC() {
  return (
    <div className={styles.tandcContainer}>
      <div className={styles.headsContainer}>
        <h1>TERMS & CONDITIONS</h1>
      </div>
      <div className={styles.contentContainer}>
        <p>
          Top 100 Coders is a platform that provides a community for coders to
          share knowledge, learn from each other, and showcase their skills. By
          using the site, you agree to the terms and conditions outlined below.
          <br />
          <ol style={{ paddingLeft: "3rem" }}>
            <li>
              You must respect the rights and privacy of other users on the
              site.
            </li>
            <li>You must not post spam or unsolicited messages on the site.</li>
            <li>You must not harass or bully other users on the site.</li>
            <li>
              You must not engage in illegal activities on the site, including
              but not limited to copyright infringement, hacking, or other
              illegal activities.
            </li>
            <li>
              By posting content on the site, you grant the site a
              non-exclusive, worldwide, royalty-free license to use, reproduce,
              modify, and distribute your content.
            </li>
            <li>
              You must comply with the site's content guidelines, which include
              but are not limited to:
            </li>
            <ul style={{ paddingLeft: "3rem" }}>
              <li>
                You must not post content that is illegal or promotes illegal
                activities.
              </li>
              <li>
                You must not post content that infringes on the intellectual
                property rights of others.
              </li>
              <li>You must not post content that is defamatory or libelous.</li>
            </ul>
            <li>
              The site reserves the right to suspend or terminate your account
              if you violate the terms and conditions of this agreement.
            </li>
            <li>
              This agreement will be governed by and construed following the
              laws of Kerala, India.
            </li>
            <li>
              The site reserves the right to modify or update these terms and
              conditions at any time.
            </li>
          </ol>
          <br />
          <h2>Effective Date</h2>
          <p style={{ paddingLeft: "1rem" }}>
            Effective Date These terms and conditions are effective as of June
            5, 2024.
          </p>
        </p>
      </div>
      <div className={styles.pandpContainer}>
        <img src={bg} alt="" />
        <h2>PRIVACY POLICY</h2>
      </div>
      <div className={styles.contentContainer}>
        <p>
          Top 100 Coders is committed to protecting the privacy of its users.
          This privacy policy outlines how we collect, use, and protect the
          personal information of our users. By using the site, you agree to the
          terms of this privacy policy.
        </p>

        <h2>Data Collection and Use</h2>
        <ol style={{ paddingLeft: "3rem" }}>
          <li>
            We use cookies and other tracking technologies to collect data on
            your browsing behavior and preferences. This includes:
            <ul style={{ paddingLeft: "2rem" }}>
              <li>
                Session Cookies: Temporary cookies that expire when you close
                your browser.
              </li>
              <li>
                Persistent Cookies: Cookies that remain on your device until
                they expire or are deleted.
              </li>
              <li>
                Tracking Pixels: Small images embedded in web pages to track
                user behavior.
              </li>
            </ul>
          </li>
          <li>
            We may use your registration information to manage your account,
            including login and password management.
          </li>
          <li>
            We may share your information with law enforcement agencies or other
            government entities if required by law or if necessary to protect
            the site or its users.
          </li>
        </ol>

        <h2>Security Measures Taken by Us</h2>
        <ol style={{ paddingLeft: "3rem" }}>
          <li>
            We use encryption to protect your personal information during
            transmission.
          </li>
          <li>
            We will be storing your personal information in secure databases and
            servers.
          </li>
          <li>
            We limit access to your personal information to authorized personnel
            only.
          </li>
        </ol>

        <h2>Your Rights and Choices</h2>
        <ol style={{ paddingLeft: "3rem" }}>
          <li>
            You have the right to access and correct your personal information.
          </li>
          <li>
            You have the right to request the deletion of your personal
            information.
          </li>
          <li>
            You have the right to opt-out of marketing and promotional emails.
          </li>
        </ol>

        <h2>Changes to This Policy</h2>
        <p style={{ paddingLeft: "1rem" }}>
          We reserve the right to modify this privacy policy at any time.
          Changes will be effective immediately upon posting. It is your
          responsibility to review this policy periodically to stay informed
          about how we collect and use your personal information.
        </p>

        <h2>Effective Date</h2>
        <p style={{ paddingLeft: "1rem" }}>
          This privacy policy is effective as of June 5, 2024.
        </p>
      </div>
    </div>
  );
}
