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
                            <h1 className="title">Terms and Conditions</h1>
                            <p>Welcome to <strong>Lumyn</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully.</p>

                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing our website, you agree to these terms and conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

                            <h2>2. Use License</h2>
                            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Lumyn's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                            <ul>
                                <li>Modify or copy the materials;</li>
                                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>Attempt to decompile or reverse engineer any software contained on Lumyn's website;</li>
                                <li>Remove any copyright or other proprietary notations from the materials;</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>

                            <h2>3. Disclaimer</h2>
                            <p>The materials on Lumyn's website are provided on an 'as is' basis. Lumyn makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                            <h2>4. Limitations</h2>
                            <p>In no event shall Lumyn or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lumyn's website, even if Lumyn or a Lumyn authorized representative has been notified orally or in writing of the possibility of such damage.</p>

                            <h2>5. Revisions and Errata</h2>
                            <p>The materials appearing on Lumyn's website could include technical, typographical, or photographic errors. Lumyn does not warrant that any of the materials on its website are accurate, complete, or current. Lumyn may make changes to the materials contained on its website at any time without notice. However, Lumyn does not make any commitment to update the materials.</p>

                            <h2>6. Links</h2>
                            <p>Lumyn has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Lumyn of the site. Use of any such linked website is at the user's own risk.</p>

                            <h2>7. Site Terms of Use Modifications</h2>
                            <p>Lumyn may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms and conditions.</p>

                            <h2>8. Governing Law</h2>
                            <p>Any claim relating to Lumyn's website shall be governed by the laws of the UAE without regard to its conflict of law provisions.</p>

                            <p>For more information, please contact us at:</p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:hello@teamlumyn.com" style={{ color: "#00ed85", textDecoration: 'none' }}>hello@teamlumyn.com</a>
                                <br />
                                <strong>Phone:</strong> +971 58 586 7086
                                <br />
                                <strong>Address: </strong> New Alsafiyah Building,  office SM18B4, Abu Hail, Dubai UAE
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
