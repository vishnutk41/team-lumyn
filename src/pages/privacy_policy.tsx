
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
    We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://teamlumyn.com/"><strong>https://teamlumyn.com/</strong></a> and use our services, in compliance with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (UAE PDPL).
</p>


                            <h2>Information We Collect</h2>
                            <div>
                                <p>We may collect the following types of information:</p>
                                <ul>
                                    <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment details.
                                    </li>
                                    <li><strong>Non-Personal Information:</strong> Browser type, IP address, cookies, and usage data.</li>
                                    <li><strong>Media Content:</strong> Images, videos, or other media shared with us for service purposes.</li>
                                </ul>
                            </div>
                            <h2>How We Use Your Information</h2>
                            <div>
                                <p>We use the collected data to:</p>
                                <ul>
                                    <li>Provide, improve, and personalize our services.</li>
                                    <li>Process payments and issue invoices.</li>
                                    <li>Communicate updates, offers, or changes to our services.</li>
                                    <li>Comply with legal obligations and protect against fraud.</li>
                                
                                </ul>
                            </div>

                            <h2>Sharing Your Information</h2>
                            <div>
                                <p>We do not sell your personal information. However, we may share it with:
                                </p>
                                <ul>
                                    <li>Third-party service providers for payment processing or IT support.</li>
                                    <li>Authorities when required by UAE law.</li>
                                    <li>Partners or affiliates under strict confidentiality agreements.</li>
                                    
                                
                                </ul>
                            </div>


                            <h2>Data Retention</h2>
                            <p>
                            We retain personal data only as long as necessary to fulfill the purposes outlined or comply with legal obligations.</p>

                            <h2>Your Rights</h2>
                            <div>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Access and correct your personal data.</li>
                                    <li>Request deletion of your data (subject to UAE legal requirements).</li>
                                    <li>Withdraw consent for data processing.</li>
                                </ul>
                            </div>

                            <h2>Security Measures</h2>
                            <p>
                            We implement robust security measures to safeguard your data, including encryption and secure servers.                            </p>

                            <h2>Contact Us</h2>
                            <p>
                            For questions about this Privacy Policy, contact us at    
                                <a href="mailto:hello@teamlumyn.com" style={{ color: "#00ed85", textDecoration: 'none' }}> info@teamlumyn.com</a>
                                {/* <br />
                                <strong>Phone:</strong> +971 58 586 7086
                                <br />
                                <strong>Address:</strong> New Alsafiyah Building, office SM18B4, Abu Hail, Dubai UAE */}
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
