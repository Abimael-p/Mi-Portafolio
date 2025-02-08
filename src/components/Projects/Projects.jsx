import "./Projects.css";

const Projects = () => {

    return (
        <section className="section_project">
            <h2>Proyectos</h2>
            <div>
                <ul>
                    <li>
                        <img src="https://i.ibb.co/JsTjhB1/Rich-And-Morty.png" alt="RickAndMorty" />
                    </li>
                    <li>
                        <img src="https://i.ibb.co/myXprWY/Fortune-Cookies.png" alt="FortuneCookies" />
                    </li>
                    <li>
                        <img src="https://i.ibb.co/Lg896vy/skyWacth.png" alt="SkyWacth" />
                    </li>
                    <li>
                        <img src="https://i.ibb.co/xHvPgDg/Ecommerce.png" alt="Ecommerce" />
                    </li>
                    <li>
                        <img src="https://i.ibb.co/kq5jZKF/Appointment-App.png" alt="AppointmentApp" />
                    </li>
                    <li>
                        <img src="https://i.ibb.co/J7ZVyrs/UserAmid.png" alt="UserAdmin" />
                    </li>
                </ul>
            </div>
            <section className="container_btn">
                <div className="detail_btn">
                    <button>Detalles</button>
                </div>
                <div className="briefcase_btn">
                    <button>Ver Portafolio</button>
                </div>
            </section>
        </section>
    );
};

export default Projects;