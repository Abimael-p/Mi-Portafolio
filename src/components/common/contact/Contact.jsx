import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_me">
      <div className="linkeding_contact">
        <a
          className="link_me"
          href="https://www.linkedin.com/in/abimael-junior-pacheco-cardenas"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
      <div className="email_contact">
        <a className="link_me" href="mailto:pachecoabimael360@mail.com">
          <i className="bx bxl-gmail"></i>
        </a>
      </div>
      <div>
        <a
          className="link_me"
          href="https://github.com/Abimael-p?tab=repositories"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
