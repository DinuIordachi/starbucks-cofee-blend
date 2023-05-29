import logo from '../assets/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='container'>
        <div className='row'>
          <div className='footer-logo-container col-lg-10'>
            <div className='footer-brand'>
              <img src={logo} className='mx-3'/>
              starbucks
            </div>
            <p className='copiright m-4'>2023 © Toate drepturile sunt rezervate</p>
          </div>
          <div className='footer-sn-container col-lg-2 d-flex justify-content-around align-items-center'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTelegram} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer