import React from 'react'
import { useLanguage } from '../Context/LanguageContext';
import logo from '../assests/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareFacebook,
    faSquareSnapchat,
    faWhatsapp,
    faLinkedin,
    faTiktok,
    faSquareInstagram,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";
function Footer() {
    const { language } = useLanguage();
    const translations = {
        en: {
            footerTitle: "Saite Saudi",
            footerText: "Leadership in construction, reputation in the sky",
            footerAddress: "King Fahd Branch Road - Al Washam District - Al Washm Tower, P.O. Box: 12735",
            linksTitle: "Links",
            copyright: "© 2024 Copyright: ",
            siteName: "YourWebsite.com"
        },
        ar: {
            footerTitle: "صيت السعودية",
            footerText: "ريادة في البناء والصيت في السماء",
            footerAddress: "طريق الملك فهد الفرعي - حي الوشام - برج الوشم ص.ب : 12735",
            linksTitle: "روابط",
            copyright: "© 2024 جميع الحقوق محفوظة: ",
            siteName: "موقعك الإلكتروني"
        }
    };
    return (
        <>
            <section className="footer">
                {/* <!-- Footer --> */}
                <footer className="bg-body-tertiary">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="logo-footer col-lg-2 col-md-12 col-8 mb-4 mb-md-0">
                                <HashLink smooth to="/home#hero-home" className='img-footer'>
                                    <img src={logo} alt="" className="col-md-12 col-12" />
                                </HashLink>
                            </div>
                            <div className="footeraddress col-lg-3 col-md-12 mb-4 mb-md-0">
                                <p>{language === 'ar' ? translations.ar.footerAddress : translations.en.footerAddress}</p>
                            </div>
                            <div className="footercaption col-lg-3 col-md-12 mb-4 mb-md-0">
                                <h3 className="text-uppercase">{language === 'ar' ? translations.ar.footerTitle : translations.en.footerTitle}</h3>
                                <p>{language === 'ar' ? translations.ar.footerText : translations.en.footerText}</p>
                            </div>

                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase text-center">{language === 'ar' ? "وسائل الاعلام" : "social media"}</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-body"><FontAwesomeIcon icon={faSquareFacebook} className="footer-icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body"><FontAwesomeIcon icon={faSquareInstagram} className="footer-icon text-pink-500" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body"> <FontAwesomeIcon icon={faLinkedin} className="footer-icon text-blue-700" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body"><FontAwesomeIcon icon={faSquareSnapchat} className="footer-icon text-yellow-400" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body"><FontAwesomeIcon icon={faWhatsapp} className="footer-icon text-green-500" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body"><FontAwesomeIcon icon={faTiktok} className="footer-icon text-black" /></a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body"><FontAwesomeIcon icon={faXTwitter} className="footer-icon text-black" /></a>
                                    </li>
                                </ul>


                                {/* <!-- Section: Social media --> */}
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', direction: "ltr" }}>
                        ©Copyright:
                        <a
                            style={{ color: 'rgba(0, 0, 0)' }}
                            href='https://www.facebook.com/profile.php?id=61552130970112'
                            target="_blank"
                            rel="noopener noreferrer">{language === 'ar' ? "Information system security" : "Information system security"}
                        </a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}
            </section>
        </>
    )
}

export default Footer
