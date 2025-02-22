import React from 'react'
import { useLanguage } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import Footer from "../components/footer"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import imgAbout from "../assests/photo-services/IMG-20250204-WA0015.jpg"
import Construction from "../assests/services/البناء-التجاري.png";
import residential from "../assests/services/البناء-السكني.png";
import industrial from "../assests/services/المشاريع الصناعية.png";
import concrete from "../assests/services/اعمال-الخرسانة.png";
import carpentry from "../assests/services/اعمال-النجارة-المسلحة.png";
import Plastering from "../assests/services/اعمال-اللياسة.png";
import steelworks from "../assests/services/اعمال-الحدادة-الخرسانية.png";
import electricalworks from "../assests/services/اعمال السباكة والكهرباء.png";
import Painting from "../assests/services/اعمال الدهانات.png";
import renovation from "../assests/services/اعمال الترميم والتجديد.png";
import finishingworks from "../assests/services/اعمال التشطيبات النهائية.png";
import ceramic from "../assests/services/تركيب سيراميك رخام وحجر.png";
import gypsum from "../assests/services/تركيب الاسقف الجبسية.png";
import roofinsulation from "../assests/services/عزل الاسطح وتركيب التكييف المركزي.png";
import woodendoor from "../assests/services/تركيب الأبواب الخشبية والشبابيك.png"
import infrastructureprojects from "../assests/services/مشاريع البنية التحتية.png"
import aluminumglass from "../assests/services/اعمال الزجاج.png"

function Woodendoor() {
    const { language } = useLanguage();
    const texts = {
        ar: {
            card_title_hero: "تركيب الأبواب والنوافذ الخشبية",
            card_text_hero: "تعد صيت السعودية للمقاولات شريكك الموثوق في تنفيذ أعمال تركيب الأبواب والنوافذ الخشبية بأعلى معايير الجودة والدقة، حيث نقدم حلولاً متكاملة لتصميم وتركيب الأبواب والنوافذ بمختلف الأشكال والمقاسات لضمان المتانة والجمال.",
            about_services: "نحن نوفر خدمات تركيب الأبواب والنوافذ الخشبية باستخدام أفضل أنواع الخشب وأحدث التقنيات لضمان الجودة، العزل الممتاز، والمظهر الأنيق."
        },
        en: {
            card_title_hero: "Wooden Doors & Windows Installation",
            card_text_hero: "At Saudit Contracting, we are your trusted partner in executing high-quality wooden doors and windows installation, offering comprehensive solutions for designing and installing various styles and sizes to ensure durability and elegance.",
            about_services: "We provide wooden doors and windows installation services using premium wood materials and the latest technologies to guarantee quality, excellent insulation, and a sophisticated appearance."
        }
    };
    

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 850, // عند حجم شاشة أقل من 768px (تابلت وموبايل)
                settings: {
                    slidesToShow: 1, // عرض كارد واحد فقط
                },
            },
        ]
    };

    const services = [
        {
            titleAr: "البناء التجاري",
            titleEn: "Commercial Construction",
            imgSrc: Construction,
            link: "/home/services/commercial",
            textAr: "نحن نقدم خدمات البناء التجاري وفقًا لأعلى المعايير.",
            textEn: "We provide commercial construction services with the highest standards."
        },
        {
            titleAr: "البناء السكني",
            titleEn: "Residential Construction",
            imgSrc: residential,
            link: "/home/services/residential",
            textAr: "تصميم وتنفيذ المنازل بأعلى درجات الجودة.",
            textEn: "Design and construction of homes with the highest quality."
        },
        {
            titleAr: "المشاريع الصناعية",
            titleEn: "Industrial Projects",
            imgSrc: industrial,
            link: "/home/services/industrial",
            textAr: "تنفيذ المشاريع الصناعية بمهارة عالية.",
            textEn: "Executing industrial projects with high expertise."
        },
        {
            titleAr: "أعمال الخرسانة",
            titleEn: "Concrete Works",
            imgSrc: concrete,
            link: "/home/services/concrete",
            textAr: "خدمات احترافية لأعمال الخرسانة والبناء.",
            textEn: "Professional concrete and construction services."
        },
        {
            titleAr: "أعمال النجارة المسلحة",
            titleEn: "Carpentry Works",
            imgSrc: carpentry,
            link: "/home/services/carpentry",
            textAr: "تنفيذ أعمال النجارة المسلحة بدقة عالية.",
            textEn: "Executing carpentry works with high precision."
        },
        {
            titleAr: "أعمال اللياسة",
            titleEn: "Plastering Works",
            imgSrc: Plastering,
            link: "/home/services/plastering",
            textAr: "تشطيبات مثالية بأحدث تقنيات اللياسة.",
            textEn: "Perfect finishes using the latest plastering techniques."
        },
        {
            titleAr: "أعمال الحدادة الخرسانية",
            titleEn: "Steel Reinforcement",
            imgSrc: steelworks,
            link: "/home/services/steelworks",
            textAr: "تركيب الحديد المسلح بأفضل المعايير.",
            textEn: "Steel reinforcement installation with top standards."
        },
        {
            titleAr: "أعمال السباكة والكهرباء",
            titleEn: "Plumbing & Electrical Works",
            imgSrc: electricalworks,
            link: "/home/services/electricalworks",
            textAr: "تنفيذ جميع أعمال السباكة والكهرباء بكفاءة عالية.",
            textEn: "Executing all plumbing and electrical works efficiently."
        },
        {
            titleAr: "أعمال الدهانات",
            titleEn: "Painting Works",
            imgSrc: Painting,
            link: "/home/services/painting",
            textAr: "دهانات عالية الجودة تناسب جميع الأذواق.",
            textEn: "High-quality painting to suit all tastes."
        },
        {
            titleAr: "أعمال الترميم والتجديد",
            titleEn: "Renovation & Restoration",
            imgSrc: renovation,
            link: "/home/services/renovation",
            textAr: "خدمات تجديد وترميم لإعادة إحياء المباني.",
            textEn: "Renovation and restoration services to revitalize buildings."
        },
        {
            titleAr: "أعمال التشطيبات النهائية",
            titleEn: "Final Finishing Works",
            imgSrc: finishingworks,
            link: "/home/services/finishingworks",
            textAr: "إنهاء المباني بأعلى مستويات الفخامة والجودة.",
            textEn: "Finishing buildings with top luxury and quality."
        },
        {
            titleAr: "تركيب سيراميك، رخام وحجر",
            titleEn: "Ceramic, Marble & Stone Installation",
            imgSrc: ceramic,
            link: "/home/services/ceramic",
            textAr: "تركيب احترافي للسيراميك، الرخام والحجر.",
            textEn: "Professional installation of ceramic, marble, and stone."
        },
        {
            titleAr: "تركيب الأسقف الجبسية",
            titleEn: "Gypsum Ceiling Installation",
            imgSrc: gypsum,
            link: "/home/services/gypsum",
            textAr: "تصاميم جبسية مميزة تناسب مختلف الديكورات.",
            textEn: "Unique gypsum designs suitable for various decors."
        },
        {
            titleAr: "عزل الأسطح وتركيب التكييف",
            titleEn: "Roof Insulation & Central AC Installation",
            imgSrc: roofinsulation,
            link: "/home/services/roofinsulation",
            textAr: "حماية الأسطح بأنظمة العزل الحديثة وتركيب التكييف.",
            textEn: "Protecting roofs with modern insulation systems and AC installation."
        },
        {
            titleAr: "تركيب الأبواب الخشبية والشبابيك",
            titleEn: "Wooden Doors & Windows Installation",
            imgSrc: woodendoor,
            link: "/home/services/woodendoor",
            textAr: "تركيب الأبواب والنوافذ الخشبية بتصاميم فريدة.",
            textEn: "Installing wooden doors and windows with unique designs."
        },
        {
            titleAr: "مشاريع البنية التحتية",
            titleEn: "Infrastructure Projects",
            imgSrc: infrastructureprojects,
            link: "/home/services/infrastructureprojects",
            textAr: "تنفيذ مشاريع البنية التحتية وفقًا لأحدث المعايير.",
            textEn: "Executing infrastructure projects according to the latest standards."
        },
        {
            titleAr: "أعمال الزجاج",
            titleEn: "Glass Works",
            imgSrc: aluminumglass,
            link: "/home/services/aluminumglass",
            textAr: "تركيب الزجاج لمختلف التطبيقات الداخلية والخارجية.",
            textEn: "Glass installation for various indoor and outdoor applications."
        }
    ];
    return (
        <>
            <div className='all-padge row m-0 p-0'>
                <div className='services-hero col-md-12 m-0 p-0'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={woodendoor} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{language === 'ar' ? texts.ar.card_title_hero : texts.en.card_title_hero}</h5>
                                    <p className="card-text">{language === 'ar' ? texts.ar.card_text_hero : texts.en.card_text_hero}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-services'>
                    <div className="card col-md-8">

                        <div className="card-body">
                            <p className="card-text">{language === 'ar' ? texts.ar.about_services : texts.en.about_services}</p>
                        </div>
                        <div className='img-card-services col-md-6'>
                            <img src={imgAbout} className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>




                <div className='all-services-cards'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {services.map((service, index) => (
                                <div className="card" key={index}>
                                    <div className="img-every-card">
                                        <img src={service.imgSrc} className="card-img-top" alt={language === 'ar' ? service.titleAr : service.titleEn} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{language === 'ar' ? service.titleAr : service.titleEn}</h5>
                                        <p className="card-text">{language === 'ar' ? service.textAr : service.textEn}</p>
                                        <Link to={service.link} className="btn">
                                            {language === 'ar' ? "المزيد" : "Learn More"}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <Footer />

            </div>
        </>
    )
}

export default Woodendoor

