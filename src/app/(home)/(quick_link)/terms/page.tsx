import React from "react";

const TermsConditions = () => {
  return (
    <section className="container w-screen  py-10 flex flex-col items-center justify-center  h-full ">
      <h1 className=" font-bold text-3xl text-center border-b-4 border-primary w-auto mx-auto mb-8 text-primary">
        Terms and Conditions
      </h1>
      <ul className=" w-full max-w-6xl">
        <li>
          <h2 className="terms-h2">Acceptance of Terms</h2>
          <p className="terms-p">
            By accessing and using our food order web app, you accept and agree
            to be bound by the terms and provision of this agreement.
          </p>
        </li>{" "}
        <li>
          <h2 className="terms-h2">Description of Service</h2>
          <p className="terms-p">
            Our web app provides a platform for users to order food from various
            restaurants and food establishments. We are not responsible for the
            preparation or delivery of the food, but act as a facilitator
            between the user and the food establishment.
          </p>
        </li>{" "}
        <li>
          <h2 className="terms-h2">User Responsibilities</h2>
          <p className="terms-p">
            Users are responsible for providing accurate and complete
            information when placing an order. Any inaccuracies may result in
            incorrect orders or delivery issues.
          </p>
        </li>
        <li>
          <h2 className="terms-h2">Payments</h2>
          <p className="terms-p">
            Users agree to pay for all orders placed through our web app. Prices
            listed are subject to change without notice.
          </p>
        </li>
        <li>
          <h2 className="terms-h2">Refunds and Cancellations</h2>
          <p className="terms-p">
            Refunds and cancellations are subject to the policy of the
            individual food establishment. We will facilitate communication
            between the user and the establishment to resolve any issues.
          </p>
        </li>{" "}
        <li>
          <h2 className="terms-h2">Privacy</h2>
          <p className="terms-p">
            We respect your privacy and will handle all personal information in
            accordance with our Privacy Policy.
          </p>
        </li>{" "}
        <li>
          <h2 className="terms-h2">Disclaimer of Warranties</h2>
          <p className="terms-p">
            Our web app is provided on an as is and as available basis. We make
            no warranties or representations regarding the accuracy or
            completeness of the content on our web app.
          </p>
        </li>{" "}
        <li>
          <h2 className="terms-h2">Limitation of Liability</h2>
          <p className="terms-p">
            In no event shall we be liable for any direct, indirect, incidental,
            special, consequential or exemplary damages, including but not
            limited to, damages for loss of profits, goodwill, use, data or
            other intangible losses.
          </p>
        </li>
        <li>
          <h2 className="terms-h2">Changes to Terms</h2>
          <p className="terms-p">
            We reserve the right to modify these terms at any time. Any changes
            will be effective immediately upon posting on our web app.
          </p>
        </li>
        <li>
          <h2 className="terms-h2">Governing Law</h2>
          <p className="terms-p">
            These terms shall be governed by and construed in accordance with
            the laws of Judiciary.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default TermsConditions;
