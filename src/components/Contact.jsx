import React from "react";
import { SectionWrapper } from "../hoc";
import { contacts } from "../constants/constants";
const ContactCard = ({ index, title, icon, url }) => {
  return (
    <div>
      <div
        onClick={() =>
          window.open(
            url,

            "_blank"
          )
        }
        className="  cursor-pointer rounded-xl  glow-on-hover-blue"
      >
        <img
          src={icon}
          alt={title}
          style={{ filter: "invert(100%)" }}
          className="h-[44px] w-[44px] sm:h-[64px] sm:w-[64px] svg-glow"
        />
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div id="contact">
      <div className="mt-20 flex flex-wrap gap-10 flex-wrap justify-center sm:flex-row">
        {contacts.map((contact, index) => (
          <ContactCard
            title={contact.title}
            icon={contact.icon}
            index={index}
            url={contact.url}
            {...contacts} // spread the contact object, not the contacts array
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
