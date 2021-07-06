import React from "react";

// components
import ContactPartial from "./ContactPartial";
import ContactPartialLink from "./ContactPartialLink";

const Contact = () => {
  return (
    <div className="personal__contact">
      <ContactPartial
        icon="fas fa-envelope"
        info="dejan.markovic.dev@gmail.com"
      />
      <ContactPartial icon="fas fa-phone" info="069/1907-978" />
      <ContactPartial icon="fab fa-viber" info="069/1907-978" />
      <ContactPartialLink
        icon="fab fa-github"
        adress="https://github.com/Dejan85"
        info="Github"
      />
      <ContactPartialLink
        icon="fas fa-globe"
        adress="https://dejan85.github.io/portfolio/"
        info="Web App"
      />
    </div>
  );
};

export default Contact;
