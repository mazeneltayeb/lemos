import "./home.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "../nav/img/398111342_677269547839034_2265390937036909134_n-removebg-preview.png"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from 'react-whatsapp';
function Footer() {
return(
 <div className="main-footer ">
    <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-around align-items-center flex-column mb-sm-4 mb-md-0">
            <img src={logo} alt=""/>
            <div className=" w-100 d-flex justify-content-evenly align-items-center social-media mt-sm-4 ">
            <a  href="https://www.facebook.com/Lemos.Restaurant" target="_blank" rel="noreferrer">
                <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/lemos.restaurant/" target="_blank" rel="noreferrer">
                <RiInstagramFill/>
                </a>
                     <ReactWhatsapp className="border-0 bg-transparent" number="+201002955430" message={`Hello Lemo's I want to communicate with someone `} >
                     <IoLogoWhatsapp />
                     </ReactWhatsapp>                                        
                {/* <a>
                <FaPinterest/>
                </a> */}
            </div>
        </div>
        <div className="location-description col-lg-4 col-md-6 col-sm-12 align-items-center d-grid d-sm-flex d-md-grid flex-column">
            <h3>Location & Maps</h3>
            <div className="d-flex location-icon">
                <p className="m-0 address"> طريق أحمد أبو زيد، التمساح، قسم أول الاسماعيلية، محافظة الإسماعيلية</p>
            </div>
           <div className="d-flex flex-md-column flex-sm-row  location-address">
                <span className="me-sm-1">E-mail:</span>
                <span className="me-sm-3">support@lemos.com</span>
                <span className="me-sm-3"> | </span>
                <span className="me-sm-2">Phone:</span>
                <span>010 03065607</span>
                <span className="me-sm-1"> , </span>
                <span >010 03065607</span>
           </div>
           <div className="mt-4 button"> View location  <FaLongArrowAltRight /></div>
        </div>
        <div className="location col-lg-4 col-md-6 col-sm-12">
        <iframe
         src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=J824+HMR%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A3%D8%AD%D9%85%D8%AF%20%D8%A3%D8%A8%D9%88%20%D8%B2%D9%8A%D8%AF%D8%8C%20%D8%A7%D9%84%D8%AA%D9%85%D8%B3%D8%A7%D8%AD%D8%8C%20%D9%82%D8%B3%D9%85%20%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9%D8%8C%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9%208367544+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            style={{ border: 0 ,height:"100%" ,width:"100%"}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Humanity First Indonesia"
            />
        </div>
    </div>
 </div>
)  
 
}

export default Footer;