import FormContact from "./FormContact/FormContact";
import LinkContact from "./LinkContact/LinkContact";
import "./Contact.css";

const Contact = () => {

  return (
    <section className="contact_section">
      <h2>Contáctame</h2>
      <div className="container_contact">
        <div>
          <FormContact />
        </div>
        <div>
          <LinkContact />
        </div>
      </div>
    </section>
  );
};

export default Contact;