import React from 'react'
import WhoUs from '../components/whous'
import Footer from '../components/footer'




import { useLanguage } from '../Context/LanguageContext';
import instagram from '../assests/social-icons/instagram.png'
import Twitter from '../assests/social-icons/twitter.png'
import FaceBook from '../assests/social-icons/Facebook-logo.png'
import Tiktok from '../assests/social-icons/tiktok_.png'
import Snapchat from '../assests/social-icons/Snapchat-Logo.png'
import Linkedin from '../assests/social-icons/linkedin.png'



const texts = {
  ar: "ريادة في البناء والصيت في السماء",
  en: "Leadership in construction, reputation in the sky",
};
function About() {
  const { language } = useLanguage();
  return (
    <div className='row m-0 p-0'>
        <div className='hero-about'>
          <div className='hero row m-0'>
            <div className='background-hero col-md-12 p-0'>
              <div className='overlay'>
                <div className='content-hero'>
                  <div className='heading-hero col-md-12'>
                    <h1>{texts[language]}</h1>
                  </div>
                  <div className='icons-hero col-12'>
                    <div className='btn-social'>
                      <a className='icon-hero' href='#s'><img src={FaceBook} alt='' /></a>
                      <a href='#s' className='name-icon'>{language === 'ar' ? 'فيسبوك' : 'Facebook'}</a>
                    </div>
                    <div className='btn-social'>
                      <a className='icon-hero' href='#s'><img src={instagram} alt='' /></a>
                      <a href='#s' className='name-icon'>{language === 'ar' ? 'انستقرام' : 'Instagram'}</a>
                    </div>
                    <div className='btn-social'>
                      <a className='icon-hero' href='#s'><img src={Twitter} alt='' /></a>
                      <a href='#s' className='name-icon'>{language === 'ar' ? 'تويتر' : 'Twitter'}</a>
                    </div>
                    <div className='btn-social'>
                      <a className='icon-hero' href='#s'><img src={Tiktok} alt='' /></a>
                      <a href='#s' className='name-icon'>{language === 'ar' ? 'تيك توك' : 'Tiktok'}</a>
                    </div>
                    <div className='btn-social'>
                      <a className='icon-hero' href='#s'><img src={Snapchat} alt='' /></a>
                      <a href='#s' className='name-icon'>{language === 'ar' ? 'سناب شات' : 'Snapchat'}</a>
                    </div>
                    <div className='btn-social'>
                      <a className='icon-hero' href='#s'><img src={Linkedin} alt='' /></a>
                      <a href='#s' className='name-icon'>{language === 'ar' ? 'لينكد ان' : 'Linkedin'}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-shape-divider-bottom-1739029698">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
              </div>
            </div>

          </div>
        </div>
        <WhoUs />
      <Footer />
    </div>
  )
}

export default About
