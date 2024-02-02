import './../assets component/css/Footer.css'
import { FaFacebook, FaGithubAlt, FaPhoneAlt } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return(
        <div className="row footer">
            <div className='col-md-6 propos-part'>
                jblkqr
            </div>
            <div className='col-md-6 contact-part'>
                <h1>Contact</h1>
                <ul>
                    <li>ETU001968</li>
                    <li><FaPhoneAlt className='contact-icon'></FaPhoneAlt>0340460137</li>
                    <li><AiFillMail className='contact-icon'></AiFillMail>judiherinirina@gmail.com</li>
                    <li><FaFacebook className='contact-icon'></FaFacebook>www.facebook/judi.nh.04</li>
                    <li><FaGithubAlt className='contact-icon'></FaGithubAlt>https://github.com/judi1968</li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;