import Head from "next/head";
import Footer from "@/component/footer";
import NavMenuBar from "@/component/menu";

export default function CookiesPolicy() {
    return (
        <>
            <Head>
                <title>Lumyn | Cookies Policy</title>
                <meta name="description" content="Learn about Lumyn's use of cookies to enhance your browsing experience and manage your privacy preferences." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page">
                <main className="main cookies_policy">
                    <div className="banner_section">
                        <NavMenuBar />
                    </div>
                    <div className="content_section">
                        <div className="container">
                            <h1 className="title">Cookies Policy</h1>
                            <p>
                                At <strong>Lumyn</strong>, we use cookies to enhance your experience on our website and provide a personalized service. This Cookies Policy explains how we use cookies, your choices regarding cookies, and how you can manage them.
                            </p>

                            <h2>What Are Cookies?</h2>
                            <p>
                                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help websites function efficiently, improve user experiences, and provide analytical insights.
                            </p>

                            <h2>Types of Cookies We Use</h2>
                            <ul>
                                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.</li>
                                <li><strong>Performance Cookies:</strong> These cookies allow us to measure and improve the performance of our website by analyzing visitor interactions.</li>
                                <li><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences.</li>
                                <li><strong>Targeting Cookies:</strong> These cookies may be set by advertising partners to build a profile of your interests and show relevant ads.</li>
                            </ul>

                            <h2>Why We Use Cookies</h2>
                            <ul>
                                <li>To enable website functionality and security.</li>
                                <li>To remember user preferences and settings.</li>
                                <li>To analyze website traffic and improve performance.</li>
                                <li>To provide personalized content and advertisements.</li>
                            </ul>

                            <h2>Your Choices</h2>
                            <p>
                                You can manage or delete cookies by adjusting your browser settings. Please note that disabling certain cookies may affect the functionality of the website. For more information, visit your browser's help section:
                            </p>
                            <ul>
                                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/browsing-data-and-privacy-microsoft-edge-8023f0a0-f308-c155-dcbf-47c0f4cc9c43" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                            </ul>

                            <h2>Third-Party Cookies</h2>
                            <p>
                                Some cookies may be set by third-party services integrated into our website, such as analytics tools and advertising networks. These third-party providers may collect and use cookie data in accordance with their privacy policies.
                            </p>

                            <h2>Updates to This Policy</h2>
                            <p>
                                Lumyn reserves the right to update this Cookies Policy at any time. Changes will be effective immediately upon posting. Please review this page periodically for updates.
                            </p>

                            <h2>Contact Us</h2>
                            <p>
                                If you have any questions or concerns about our Cookies Policy, please contact us at:
                                <br />
                                <strong>Email:</strong> <a href="mailto:hello@teamlumyn.com" style={{ color: "#00ed85", textDecoration: "none" }}>hello@teamlumyn.com</a>
                                <br />
                                <strong>Phone:</strong> +971 58 586 7086
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
