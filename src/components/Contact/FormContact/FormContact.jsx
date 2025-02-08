import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./FormContact.css";

function FormContact() {
    const refForm = useRef();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "bzbtzhakbrtfmnkl";
        const templateId = "template_fsersux";
        const ApiKey = "TjeXboAX5i-efGE6I";

        emailjs
            .sendForm(serviceId, templateId, refForm.current, ApiKey)
            .then((result) => console.log(result.text))
            .catch((error) => console.log(error));

        e.target.reset();

        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
        }, 600);
    };

    return (
        <form
            className="container-form-content"
            ref={refForm}
            onSubmit={handleSubmit}
        >
            <div className="container-email-name">
                <div className="fied-name">
                    <input
                        name="userName"
                        type="text"
                        placeholder="Tu nombre"
                        required
                    />
                </div>
                <div className="field-email">
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Tu email"
                        required
                    />
                </div>
            </div>
            <div className="field-theme">
                <input
                    name="theme"
                    type="text"
                    id="menssege"
                    placeholder="Asunto..."
                    required
                />
            </div>
            <div className="field-message">
                <textarea
                    placeholder="Tu mensaje..."
                    name="message"
                    id="message"
                    type="text"
                    required
                />
            </div>
            {isSuccess && <p className="tick_send">se envio correctamente ✔</p>}
            <div className="container-btn-send">
                <button>Enviar mensaje</button>
            </div>
        </form>
    );
}

export default FormContact;