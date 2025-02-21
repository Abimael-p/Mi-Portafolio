import GitHubLogoIcon from "../../icons/github_logo_icon";
import GmailIcon from "../../icons/gmail_icon";
import LinkedinIcon from "../../icons/linkedin_icon";
import "./LinkContact.css";

const LinkContact = () => {

  return (
    <section className="container_link">
      <div className="contact_linkedin">
        <LinkedinIcon className="logo_Contact" />
      </div>
      <div className="contact_gmail">
        <GmailIcon className="logo_Contact" />
      </div>
      <div className="contact_github">
        <GitHubLogoIcon className="logo_Contact" />
      </div>
    </section>
  );
};

export default LinkContact;