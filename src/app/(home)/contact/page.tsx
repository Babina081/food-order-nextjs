import React from "react";
import ContactCard from "./components/contact-card";
import ContactForm from "./components/contact-form";

const ContactPage = () => {
  return (
    <section className="container flex flex-col gap-4 w-auto py-10 h-auto">
      {" "}
      <h1 className="  font-bold text-3xl text-center border-b-4 border-primary w-auto mx-auto mb-8 text-primary">
        Contact Us
      </h1>
      <div className="flex flex-col  gap-8">
        <ContactCard></ContactCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm></ContactForm>
          <div className="">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.681518425699!2d83.98369517427567!3d28.21698720283188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944d76693d11%3A0xf1f006d89be13640!2sNew%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1719243319513!5m2!1sen!2snp"
              className="h-72  md:h-full w-full   rounded-xl object-center object-cover  overflow-hidden border border-primary/30 shadow-sm shadow-primary/30"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
