"use client";
import { contactInfo } from "@/data/contact_info";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactCard = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center ">
      {contactInfo.map((info, id) => {
        return (
          <div
            key={id}
            className={` flex flex-col items-center rounded-xl p-4 shadow-md shadow-white/30 border border-primary/30 '}`}
          >
            {info.icon === "MapPin" && (
              <MapPin
                className={`h-14 w-10 text-primary gentle-hover-shake   `}
              />
            )}{" "}
            {info.icon === "Mail" && (
              <Mail className={`h-14 w-10 text-primary gentle-hover-shake `} />
            )}{" "}
            {info.icon === "Phone" && (
              <Phone className={`h-14 w-10 text-primary gentle-hover-shake `} />
            )}
            <h3 className="text-2xl font-bold text-primary ">{info.title}</h3>
            <p className="text-sm text-black">{info.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCard;
