import ApiEcommerce from "../ApiEcommerce/ApiEcommerce";
import ApiMovies from "../ApiMovies/ApiMovies";
import UserCrud from "../UserCrud/UserCrud";
import VerificationApi from "../VerificationApi/VerificationApi";
import "./MyServices.css";

const MyServices = () => {
  return (
    <section id="myservice" className="services-api">
      <h2>Mis Back-End</h2>
      <div className="container-card-service">
        <div className="card-service">
          <div className="service-1">
            <UserCrud />
          </div>
          <div className="service-1">
            <ApiMovies />
          </div>  
          <div className="service-1">
            <VerificationApi />
          </div>
          <div className="service-1">
            <ApiEcommerce />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
