
import Head from "next/head";
import Footer from "@/component/footer";
import NavMenuBar from "@/component/menu";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Lumyn | Privacy Policy</title>
                <meta name="description" content="Learn about our commitment to safeguarding your privacy and protecting your data." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page">
                <main className="main privacy_policy">
                    <div className="banner_section">
                        <NavMenuBar />
                    </div>
                    <div className="content_section">
                        <div className="container">
                            <h1 className="title">Privacy Policy</h1>
                            <p>
                                At <strong>Lumyn</strong>, your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, store, and protect your personal data when you visit our website or use our services. By accessing our website, you agree to the terms and practices described in this policy.
                            </p>

                            <h2>Information We Collect</h2>
                            <div>
                                <p>We may collect the following types of information when you visit our website or interact with our services:</p>
                                <ul>
                                    <li>Personal Information: Name, email address, phone number, and other contact details.</li>
                                    <li>Usage Data: Information about how you access and use our website, including IP address, browser type, device type, and browsing behavior.</li>
                                    <li>Cookies and Tracking Technologies: We use cookies to enhance your experience on our website.</li>
                                </ul>
                            </div>
                            <h2>How We Use Your Information</h2>
                            <div>
                                <p>We use the information we collect for the following purposes:</p>
                                <ul>
                                    <li>To provide and improve our services.</li>
                                    <li>To respond to inquiries and support requests.</li>
                                    <li>To send updates, newsletters, and marketing materials (with your consent).</li>
                                    <li>To analyze website performance and user behavior.</li>
                                    <li>To comply with legal obligations and resolve disputes.</li>
                                </ul>
                            </div>
                            <h2>Data Security</h2>
                            <p>
                                We implement reasonable security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                            </p>

                            <h2>Your Rights and Choices</h2>
                            <div>
                                <p>You have the following rights regarding your personal data:</p>
                                <ul>
                                    <li>Access: Request access to the personal information we hold about you.</li>
                                    <li>Correction: Update or correct your personal data if it is inaccurate or incomplete.</li>
                                    <li>Deletion: Request the deletion of your personal information.</li>
                                    <li>Opt-Out: Opt-out of receiving marketing communications from us at any time.</li>
                                </ul>
                            </div>

                            <h2>Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies and similar technologies to track the activity on our website. Cookies help us analyze website traffic and improve user experience by remembering preferences and settings.
                            </p>

                            <h2>Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically to stay informed about how we are protecting your data.
                            </p>

                            <h2>Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                                <br />
                                <strong>Email:</strong><a href="mailto:support@lumyn.com" style={{ color: "#00ed85", textDecoration: 'none' }}> support@lumyn.com</a>
                                <br />
                                <strong>Phone:</strong> +123 456 7890
                                <br />
                                <strong>Address:</strong> 123 IT Solutions Ave, Tech City, UAE
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
