import React, { useState } from "react";
import { useLanguage } from '../Context/LanguageContext';
import { motion } from 'framer-motion';
import about_us from '../assests/عن-صيت.jpeg'
import video_about_us from '../assests/فيديو عن صيت.mp4'
function WhoUs() {
  const { language } = useLanguage();

  const texts = {
    ar: {
      header_about: "عن صيــــت:",
      paragraph1: `شركة صيت السعودية للمقاولات هي شركة رائدة في قطاع البناء 
                  والتشييد، حيث تتمتع بخبره تمتد لاكثر من 10 سنوات في تقديم 
                  خدمات المقاولات في المملكة العربية السعودية`,
      paragraph2: `تأسست الشركة بهدف تلبية احتياجات السوق المحلي والدولي من خلال تقديم مشاريع عالية الجودة ومبتكرة `,
      paragraph3: `منذ ٢٠١٨ اتخذنا من العاصمة "الرياض" مقرًا في المملكة بخبراتنا ومهاراتنا في إتمام مشاريع تجارية وحكومية.`,
      paragraph4: `نسعى دائمًا لتحقيق أعلى معايير الجودة والالتزام بمواعيد التنفيذ مع التركيز على تلبية 
                  احتياجات عملائنا وتحقيق تطلعاتهم من خلال الابتكار والاستدامة`,
    },
    en: {
      header_about: "About “Seet”:",
      paragraph1: `Saudi Seet Contracting Company is a leading company
                    in the construction sector, with over 10 years of
                    experience in providing contracting services in the
                    Kingdom of Saudi Arabia. `,
      paragraph2: `The company was established with the goal of meeting 
                    the needs of both local and international markets by 
                    delivering high-quality and innovative projects.`,
      paragraph3: `Since 2018, we have established our headquarters in the 
                    capital, Riyadh. In 2022, we expanded across the 
                    Kingdom with our expertise and skills, completing large 
                    commercial and governmental projects.`,
      paragraph4: `We are always committed to achieving the highest 
                    quality standards and meeting deadlines, with a focus 
                    on addressing our client's needs and fulfilling their 
                    expectations through innovation and sustainability`,
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
  };





  const [isHovered, setIsHovered] = useState(false); 
  return (
    <>
      <div id="about-us" className="about-us section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <motion.div
              className="features-image col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {isHovered ? (
                <motion.video
                  src={video_about_us} 
                  autoPlay
                  loop
                  muted
                  onMouseLeave={() => setIsHovered(false)} 
                  className="video-fluid w-100"
                />
              ) : (
                <motion.img
                  src={about_us} 
                  alt="About Us"
                  onMouseEnter={() => setIsHovered(true)} 
                  className="img-fluid w-100"
                />
              )}
            </motion.div>
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.5 }} 
              >
                {language === 'ar' ? texts.ar.header_about : texts.en.header_about}
              </motion.h3>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 1 }} 
              >
                {language === 'ar' ? texts.ar.paragraph1 : texts.en.paragraph1}
              </motion.p>

              {[texts.ar.paragraph2, texts.ar.paragraph3, texts.ar.paragraph4].map(
                (paragraph, index) => (
                  <motion.div
                    key={index}
                    className="icon-box d-flex position-relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 1.5 + index * 0.5 }} 
                  >
                    <p>
                      {language === 'ar'
                        ? paragraph
                        : [texts.en.paragraph2, texts.en.paragraph3, texts.en.paragraph4][index]}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default WhoUs;
