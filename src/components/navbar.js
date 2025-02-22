
import React, { useState, useEffect } from "react";
import { useLanguage } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png"
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
import Ceramic from "../assests/services/تركيب سيراميك رخام وحجر.png";
import gypsum from "../assests/services/تركيب الاسقف الجبسية.png";
import roofinsulation from "../assests/services/عزل الاسطح وتركيب التكييف المركزي.png";
import woodendoor from "../assests/services/تركيب الأبواب الخشبية والشبابيك.png"
import infrastructureprojects from "../assests/services/مشاريع البنية التحتية.png"
import aluminumglass from "../assests/services/اعمال الزجاج.png"
function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const menuItems = [
    { en: "Commercial Construction", ar: "البناء التجاري", img: Construction, to: "/home/services/commercial" },
    { en: "Residential construction", ar: "البناء السكني", img: residential, to: "/home/services/residential" },
    { en: "Industrial projects", ar: "المشاريع الصناعية", img: industrial, to: "/home/services/industrial" },
    { en: "Excavation and concrete works", ar: "اعمال الحفر والخرسانة", img: concrete, to: "/home/services/concrete" },
    { en: "Reinforced carpentry works", ar: "اعمال النجارة المسلحة", img: carpentry, to: "/home/services/carpentry" },
    { en: "Plastering works", ar: "اعمال اللياسة", img: Plastering, to: "/home/services/plastering" },
    { en: "Reinforced steel works", ar: "اعمال الحدادة الخرسانية", img: steelworks, to: "/home/services/steelworks" },
    { en: "Plumbing and electrical works", ar: "اعمال السباكة والكهرباء", img: electricalworks, to: "/home/services/electricalworks" },
    { en: "Painting works", ar: "اعمال الدهانات", img: Painting, to: "/home/services/painting" },
    { en: "Renovation and restoration works", ar: "اعمال الترميم والتجديد", img: renovation, to: "/home/services/renovation" },
    { en: "Final Finishing Works", ar: "أعمال التشطيبات النهائية", img: finishingworks, to: "/home/services/finishingworks" },
    { en: "Ceramic, Marble, and Stone Installation", ar: "تركيب السيراميك والرخام والحجر", img: Ceramic, to: "/home/services/ceramic" },
    { en: "Gypsum ceiling installation", ar: "تركيب الاسقف الجبسية", img: gypsum, to: "/home/services/gypsum" },
    { en: "Roof insulation and central air conditioning installation", ar: "عزل الاسطح وتركيب التكييف المركزي", img: roofinsulation, to: "/home/services/roofinsulation" },
    { en: "Wooden door and aluminum window installation", ar: "تركيب الابواب الخشبية وشبابيك الالومنيوم", img: woodendoor, to: "/home/services/woodendoor" },
    { en: "Infrastructure projects (roads, bridges, tunnels).", ar: " مشاريع البنية التحتية(الطرق، الجسور، الأنفاق)", img: infrastructureprojects, to: "/home/services/infrastructureprojects" },
    { en: "Aluminum, Glass, and UPVC Works", ar: "أعمال الألمنيوم والزجاج و UPVC", img: aluminumglass, to: "/home/services/aluminumglass" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsNavbarVisible(false); // إخفاء النافبار عند التمرير للأعلى
      } else {
        setIsNavbarVisible(true); // إظهار النافبار عند التمرير لأسفل
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setIsModalOpen(false); // إغلاق المودال أيضًا
  };
  return (
    <>
      <div className="all-nav- row m-0">
        <nav className={`navbar navbar-expand-lg fixed-top d-none d-lg-flex ${isNavbarVisible ? "visible-navbar" : "hidden-navbar"}`}>
          <div className="container-fluid col-md-12 m-0 p-0 ">
            <div className='nav-logo- col-lg-3 col-xl-1 col-md-2 col-2 p-0'>
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className="collapse navbar-collapse col-lg-7 col-md-5">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">{language === "ar" ? "الرئيسية" : "Home"}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home/about">{language === "ar" ? "من نحن" : "About"}</Link>
                </li>


                <li
                  className="nav-item dropdown position-relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link className="nav-link dropdown-toggle" to="">{language === "ar" ? "الخدمات" : "Services"}</Link>
                  {isDropdownOpen && (
                    <ul
                      className="dropdown-menu drop-down-web show d-flex flex-wrap"
                      style={{
                        position: "fixed",
                        left: "0",
                        right: "0",
                        width: "100vw",
                        backgroundColor: "white",
                        textAlign: "center",
                        borderRadius: "0",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        padding: "20px",
                        zIndex: "999",
                        display: "flex",
                        alignItems: "start",
                        flexWrap: "wrap",
                        border: "0",
                        transform: isDropdownOpen ? "translateY(0)" : "translateY(-20px)",
                        opacity: isDropdownOpen ? "1" : "0",
                        visibility: isDropdownOpen ? "visible" : "hidden",
                        transition: "transform 2s ease, opacity 0.5s ease, visibility 0.5s",

                      }}
                    >
                      {/* الصورة */}
                      <div className="col-md-2 col-12 p-0 d-flex align-items-center justify-content-center"
                        style={{
                          height: "300px",
                          textAlign: "center"
                        }}>
                        {selectedImage ? (
                          <img src={selectedImage} alt="Dropdown"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain"
                            }}
                          />
                        ) : (
                          <h3 style={{ color: "#000", fontWeight: "bold" }}>{language === "ar" ? "صيت السعودية للمقاولات" : "Seet Saudi Contracting"}</h3>
                        )}
                      </div>
                      {/* القائمة */}
                      <div className="col-md-10 col-12">
                        <div className="row">
                          {menuItems.map((item, index) => (
                            <div
                              key={index}
                              className="col-md-4 col-12 mb-2"
                              onMouseEnter={() => setSelectedImage(item.img)} // تغيير الصورة عند التحريك
                              onMouseLeave={() => setSelectedImage(null)} // العودة للصورة الافتراضية
                            >
                              <Link
                                className="dropdown-item w-100 text-center"
                                to={item.to}
                                style={{
                                  display: "block",
                                  whiteSpace: "normal",
                                  wordBreak: "break-word",
                                  fontWeight: "bold",
                                }}
                              >
                                <img src={item.img} alt={item.ar} style={{ width: "60px", height: "60px" }} />
                                {language === "ar" ? item.ar : item.en}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home/contact">{language === "ar" ? "اتصل بنا" : "Contact"}</Link>
                </li>
              </ul>
            </div>

            <div className="btn-nav d-flex col-md-1">
              <button className="btn" onClick={toggleLanguage}>
                {language === "ar" ? "EN" : "ع"}
              </button>
            </div>
          </div>
        </nav >

        <nav className="navbar navbar-expand-lg bg-body-tertiary row m-0 d-lg-none">
          <div className="container-fluid col-12">
            <div className="nav-logo- col-4 p-0">
              <Link to="/home">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="navbar-toggler" type="button" onClick={() => setIsModalOpen(true)}>
                <span className="navbar-toggler-icon"></span>
              </button>

              <button className="btn" onClick={toggleLanguage}>
                {language === "ar" ? "EN" : "ع"}
              </button>
            </div>
          </div>
        </nav>
        {
          isModalOpen && (
            <>
              {/* الخلفية الشفافة */}
              <div className="modal-overlay" onClick={() => setIsModalOpen(false)}></div>

              <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className={`modal-header d-flex ${language === "ar" ? "flex-row-reverse" : ""}`}>
                      <h5 className="modal-title">{language === "ar" ? "صيت السعودية للمقاولات" : "Seet Saudi Contracting"}</h5>
                      <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
                    </div>
                    <div className="modal-body">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link active" to="/" onClick={closeNavbar}>{language === "ar" ? "الرئيسية" : "Home"}</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/home/about" onClick={closeNavbar}>{language === "ar" ? "من نحن" : "About"}</Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            onClick={() => setIsDropdownOpenMobile(!isDropdownOpenMobile)}
                          >
                            {language === "ar" ? "الخدمات" : "Services"}
                          </Link>
                          {isDropdownOpenMobile && (
                            <ul className="dropdown-menu show">
                              {menuItems.map((item, index) => (
                                <li key={index}>
                                  <Link className="dropdown-item" to={item.to} onClick={closeNavbar}>
                                    <img src={item.img} alt={item.ar} />
                                    {language === "ar" ? item.ar : item.en}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/home/contact" onClick={closeNavbar}>{language === "ar" ? "اتصل بنا" : "Contact"}</Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }


      </div >
    </>
  );
}

export default Navbar;
