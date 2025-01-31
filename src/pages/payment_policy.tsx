import Head from "next/head";
import Footer from "@/component/footer";
import NavMenuBar from "@/component/menu";

export default function PaymentPolicy() {
    return (
        <>
            <Head>
                <title>Lumyn | Payment Policy & Terms</title>
                <meta name="description" content="Lumyn's payment policies and terms of service including payment methods, refund conditions, and service terms." />
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
                            
                            <h2>1. Accepted Payment Methods</h2>
                            <ul>
                                <li>Credit/Debit Cards (Visa, MasterCard, etc.)</li>
                                <li>Bank Transfers (details provided upon request)</li>
                                <li>Cash payments (for select services)</li>
                            </ul>

                            <h2>2. Payment Terms</h2>
                            <ul>
                                <li>All payments must be made in AED unless otherwise agreed</li>
                                <li>Payments are due in full upon receipt of the invoice unless installment arrangements are pre-approved</li>
                            </ul>

                            <h2>3. Refunds and Cancellations</h2>
                            <ul>
                                <li>Refunds: Issued only for cancellations made within 15-30 working days prior to the service date, minus administrative fees</li>
                                <li>Cancellations: 50% fee applies if canceled less than 24 hours before service</li>
                                <li>Non-Refundable Services: Custom content creation, LED signage rentals, and other specialized services</li>
                            </ul>

                            <h2>4. Late Payments</h2>
                            <ul>
                                <li>A late payment fee of 100 AED per day applies to overdue invoices</li>
                                <li>Services may be suspended until outstanding payments are cleared</li>
                            </ul>

                            <h2>5. Dispute Resolution</h2>
                            <p>Payment disputes must be raised in writing within 7 business days of the invoice date.</p>

                          
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}