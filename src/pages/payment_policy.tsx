import Head from "next/head";
import Footer from "@/component/footer";
import NavMenuBar from "@/component/menu";

export default function PaymentPolicy() {
    return (
        <>
            <Head>
                <title>Lumyn | Payment Policy</title>
                <meta name="description" content="Learn about Lumyn's payment policies, including accepted methods, refund guidelines, and payment security." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page">
                <main className="main payment_policy">
                    <div className="banner_section">
                        <NavMenuBar />
                    </div>
                    <div className="content_section">
                        <div className="container">
                            <h1 className="title">Payment Policy</h1>
                            <p>
                                At <strong>Lumyn</strong>, we strive to provide a transparent and secure payment process for all our customers. Please read our payment policy carefully to understand the terms and conditions related to payments.
                            </p>

                            <h2>Accepted Payment Methods</h2>
                            <p>
                                We accept the following payment methods:
                            </p>
                            <ul>
                                <li>Credit Cards (Visa, MasterCard, American Express)</li>
                                <li>Debit Cards</li>
                                <li>Bank Transfers</li>
                                <li>Online Payment Gateways (e.g., PayPal, Stripe)</li>
                            </ul>

                            <h2>Payment Terms</h2>
                            <ul>
                                <li>All payments must be made in full at the time of purchase.</li>
                                <li>Partial payments or installment options may be available for specific products or services. Please contact us for details.</li>
                                <li>Prices displayed on our website are in AED (United Arab Emirates Dirham) and include applicable taxes unless stated otherwise.</li>
                            </ul>

                            <h2>Payment Security</h2>
                            <p>
                                We prioritize your payment security by utilizing industry-standard encryption and secure payment gateways. Your payment details are processed securely, and we do not store sensitive payment information on our servers.
                            </p>

                            <h2>Refunds and Cancellations</h2>
                            <ul>
                                <li>Refunds are subject to our <a href="/refund-policy" style={{ color: "#f7f1f1", textDecoration: "none" }}>Refund Policy</a>.</li>
                                <li>For cancellations, please contact our support team at least 24 hours before the scheduled service or order processing.</li>
                            </ul>

                            <h2>Disputed Payments</h2>
                            <p>
                                If you believe a payment was made in error, please contact us immediately at:
                                <br />
                                <strong>Email:</strong> <a href="mailto:support@lumyn.com" style={{ color: "#f7f1f1", textDecoration: "none" }}>support@lumyn.com</a>
                                <br />
                                <strong>Phone:</strong> +123 456 7890
                            </p>

                            <h2>Changes to Payment Policy</h2>
                            <p>
                                Lumyn reserves the right to update this payment policy at any time. Changes will be effective immediately upon posting. Please review this page periodically for updates.
                            </p>

                            <h2>Contact Us</h2>
                            <p>
                                For any payment-related inquiries or concerns, please reach out to our support team at:
                                <br />
                                <strong>Email:</strong> <a href="mailto:support@lumyn.com" style={{ color: "#00ed85", textDecoration: "none" }}>support@lumyn.com</a>
                                <br />
                                <strong>Phone:</strong> +123 456 7890
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
