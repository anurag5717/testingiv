import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="heading-xl mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: 1/22/2026
          </p>

          <div className="space-y-8 text-body leading-relaxed">

            <section>
              <h2 className="heading-md mb-2">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>City</li>
                <li>Event details and requirements</li>
                <li>Basic technical data such as IP address and browser type</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-md mb-2">2. How We Use Your Information</h2>
              <p>
                Your information is used to respond to enquiries, prepare quotations,
                communicate regarding services, improve our website experience, and
                maintain internal business records. We do not sell or rent your personal
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">3. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect
                your personal data. However, no online system can be guaranteed 100% secure.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">4. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience and analyze website
                traffic. You may disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-2">5. Contact</h2>
              <p>
                For any privacy-related questions, contact us at:
                <br />
                <strong>Email:</strong> info@impavidventure.com
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
