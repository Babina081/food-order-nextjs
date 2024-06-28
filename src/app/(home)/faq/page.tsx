import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsInfo } from "@/data/faqs_list";

const FAQpage = () => {
  return (
    <section className="container w-screen  py-10 flex flex-col items-center justify-center  h-full">
      <h1 className=" font-bold text-3xl text-center border-b-4 border-primary w-auto mx-auto mb-8 text-primary">
        FAQs
      </h1>
      <Accordion type="multiple" className="w-full max-w-6xl ">
        {faqsInfo.map((info, id) => {
          return (
            <AccordionItem value={`item-${id}`} key={id}>
              <AccordionTrigger className=" hover:text-primary no-underline text-sm md:text-lg font-bold text-justify transition-all  duration-300 ease-in-out translate-x-0 hover:translate-x-5">
                {info.question}
              </AccordionTrigger>
              <AccordionContent className="text-justify text-xs md:text-sm">
                {info.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default FAQpage;
