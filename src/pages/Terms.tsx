import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-muted/40 py-16">
      <div className="container-wide max-w-4xl mx-auto px-4">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
        >
          ← Back to Home
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="heading-xl mb-2">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: 1/22/2026
          </p>

          <div className="space-y-8 text-body leading-relaxed">

            <section>
              <h2 className="heading-md mb-2">1. Services</h2>
              <p>
                Impavid Venture provides professional event planning and management services.
                All services are delivered based on agreed proposals, timelines, and budgets.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">2. Booking & Payments</h2>
              <p>
                A booking is confirmed only upon receipt of an advance payment. Remaining
                balances must be cleared as per the agreed payment schedule. Delays may
                affect service delivery.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">3. Cancellations</h2>
              <p>
                Cancellation charges may apply depending on the stage of planning and vendor
                commitments. Refunds are subject to management approval.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">4. Client Responsibilities</h2>
              <p>
                Clients must provide accurate information and timely approvals to ensure
                smooth execution of events.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">5. Liability</h2>
              <p>
                Impavid Venture is not responsible for delays or disruptions caused by natural
                events, vendor failures, or circumstances beyond reasonable control.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">6. Governing Law</h2>
              <p>
                These terms are governed under the laws of India. Any disputes shall be
                subject to the jurisdiction of Odisha courts.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
