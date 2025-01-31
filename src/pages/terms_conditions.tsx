import Head from "next/head";
import Footer from "@/component/footer";
import NavMenuBar from "@/component/menu";

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Lumyn | Terms and Conditions</title>
                <meta name="description" content="Understand the rules and guidelines for using our website and services." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page">
                <main className="main terms_conditions">
                    <div className="banner_section">
                        <NavMenuBar />
                    </div>
                    <div className="content_section">
                        <div className="container">
                        <h1 className="title" style={{marginTop: "40px"}}>Terms and Conditions</h1>

<h2>1. Acceptance of Terms</h2>
<p>By using Lumyn Media's website and services, you agree to these Terms and Conditions. If you disagree, please refrain from using our services.</p>

<h2>2. Services Provided</h2>
<ul>
    <li>SEO</li>
    <li>Event media setup</li>
    <li>LED signage</li>
    <li>Content creation</li>
    <li>Social media management</li>
    <li>Consultancy</li>
    <li>Podcast studio rental</li>
    <li>Photography and videography</li>
</ul>

<h2>3. Intellectual Property</h2>
<p>All content including images, videos, and designs created by Lumyn Media remains our intellectual property unless otherwise stated.</p>

<h2>4. Client Responsibilities</h2>
<ul>
    <li>Provide accurate information for service delivery</li>
    <li>Obtain necessary permissions for materials shared with us</li>
    <li>Adhere to UAE laws when using our services</li>
</ul>

<h2>5. Limitation of Liability</h2>
<ul>
    <li>Lumyn Media is not liable for delays caused by third-party vendors or unforeseeable circumstances</li>
    <li>Not liable for losses resulting from improper use of delivered content</li>
</ul>

<h2>6. Dispute Resolution and Governing Law</h2>
<ul>
    <li>All disputes are subject to the exclusive jurisdiction of the courts in the UAE</li>
    <li>These Terms and Conditions are governed by UAE law</li>
</ul>

<h2>7. Amendments</h2>
<p>We reserve the right to modify these Terms and Conditions at any time. Changes will be communicated via our website.</p>

<h2>8. Contact Information</h2>
<p>
    For inquiries about these Terms and Conditions:
    <br />
    <strong>Email:</strong> <a href="mailto:info@teamlumyn.com" style={{ color: "#00ed85", textDecoration: "none" }}>info@teamlumyn.com</a>
</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
