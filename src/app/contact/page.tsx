import React from "react";
import ContactCard from "./components/contact-card";

const ContactPage = () => {
  return (
    <section className="container flex flex-col gap-4 w-auto py-10 h-auto">
      {" "}
      <h1 className="ham-h1  font-semibold text-2xl text-center border-b-2 border-primary w-auto mx-auto mb-8 text-primary">
        Contact Us
      </h1>
      <div className="flex flex-col ">
        <ContactCard></ContactCard>
        <div className="bg-green-300">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
