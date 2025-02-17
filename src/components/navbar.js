
import React, { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import nav_imgs1 from "../assests/services/البناء-السكني-صيت-للمقاولات.png";
import constructionImg from "../assests/services/البناء-السكني-صيت-للمقاولات.png";
import Industrial from '../assests/services/المشاريع-الصناعية-صيت-للمقاولات.png'
function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
  const { language, toggleLanguage } = useLanguage();






  // const toggleLanguage = () => {
  //   setLanguage(language === "ar" ? "en" : "ar");
  // };







  // const [currentImage, setCurrentImage] = useState(nav_imgs1);

  // const menuItems = [
  //   { text: "Commercial Construction" },
  //   { text: "Industrial Projects" },
  //   { text: "Excavation and Earthworks" },
  //   { text: "Reinforced Carpentry Works" },
  //   { text: "Plastering Works" },
  //   { text: "Concrete Ironworks" },
  //   { text: "Plumbing and Electrical Works" },
  //   { text: "Painting Works" },
  //   { text: "Gypsum Ceiling Installation" },
  //   { text: "Roof Insulation & Central Air Conditioning Installation" },
  //   { text: "Renovation and Restoration Works" },
  //   { text: "Final Finishing Works" },
  //   { text: "Wooden Doors & Aluminum Windows Installation" },
  //   { text: "Infrastructure Projects" },
  //   { text: "Ceramic, Marble, and Stone Installation" },
  //   { text: "Aluminum, Glass, and UPVC Works" },
  // ]


  const menuItems = [
    { en: "Commercial Construction", ar: "البناء التجاري", img: constructionImg },
    { en: "Industrial Projects", ar: "المشاريع الصناعية", img: Industrial },
    { en: "Excavation and Earthworks", ar: "الحفريات وأعمال التربة" },
    { en: "Reinforced Carpentry Works", ar: "أعمال النجارة المسلحة" },
    { en: "Plastering Works", ar: "أعمال الجبس" },
    { en: "Concrete Ironworks", ar: "أعمال الحديد الخرساني" },
    { en: "Plumbing and Electrical Works", ar: "أعمال السباكة والكهرباء" },
    { en: "Painting Works", ar: "أعمال الدهان" },
    { en: "Gypsum Ceiling Installation", ar: "تركيب الأسقف الجبسية" },
    { en: "Roof Insulation & Central AC Installation", ar: "عزل الأسطح وتركيب التكييف المركزي" },
    { en: "Renovation and Restoration Works", ar: "أعمال الترميم والتجديد" },
    { en: "Final Finishing Works", ar: "أعمال التشطيبات النهائية" },
    { en: "Wooden Doors & Aluminum Windows Installation", ar: "تركيب الأبواب الخشبية والنوافذ الألمنيوم" },
    { en: "Infrastructure Projects", ar: "مشاريع البنية التحتية" },
    { en: "Ceramic, Marble, and Stone Installation", ar: "تركيب السيراميك والرخام والحجر" },
    { en: "Aluminum, Glass, and UPVC Works", ar: "أعمال الألمنيوم والزجاج و UPVC" },
  ];
  





  return (
    <>
      <div className="all-nav- row m-0">
        <nav className="navbar navbar-expand-lg fixed-top d-none d-lg-flex col-md-12 ">
          <div className="container-fluid col-md-12 m-0 p-0">
            <div className='nav-logo- col-lg-2 col-xl-1 col-md-2 col-2 p-0'>
              <Link className="navbar-brand" to='/'>Seet</Link>
            </div>

            <div className="collapse navbar-collapse col-md-8">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link className="nav-link active" to="">Home</Link> */}
                  <Link className="nav-link active" to="">{language === "ar" ? "الرئيسية" : "Home"}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">{language === "ar" ? "من نحن" : "About"}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="">{language === "ar" ? "اتصل بنا" : "Contact"}</Link>
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
                        border: "0"
                      }}
                    >
                      {/* الصورة */}
                      <div className="col-md-3 col-12 p-0">
                        <img src={nav_imgs1} alt="Dropdown"
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover"
                          }}
                        />
                      </div>
                      {/* القائمة */}
                      <div className="col-md-9 col-12">
                        <div className="row">
                          {menuItems.map((item, index) => (
                            <div
                              key={index}
                              className="col-md-4 col-12 mb-2"
                            >
                              <Link
                                className="dropdown-item w-100 text-center"
                                to=""
                                style={{
                                  display: "block",
                                  whiteSpace: "normal",
                                  wordBreak: "break-word",
                                  // padding: "8px",
                                  // fontSize: "20px",
                                  fontWeight: "bold"
                                }}
                              >
                                <img src={item.img} alt={item.ar} style={{ width: "80px", height: "80px" }} />
                                {language === "ar" ? item.ar : item.en}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ul>
                  )}
                </li>

















              </ul>
            </div>

            <div className="btn-nav d-flex col-md-1">
              <button className="btn" onClick={toggleLanguage}>
                {language === "ar" ? "EN" : "ع"}
              </button>
            </div>
          </div>
        </nav>

        {/* شريط التنقل للموبايل */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-lg-none">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Seet</a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        {/* المودال في الشاشات الصغيرة */}
        {isModalOpen && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Seet</h5>
                  <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
                </div>
                <div className="modal-body">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li
                      className="nav-item dropdown"
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        onClick={() => setIsDropdownOpenMobile(!isDropdownOpenMobile)}
                      >
                        Dropdown
                      </a>
                      <ul className={`dropdown-menu ${isDropdownOpenMobile ? "show" : ""}`}>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
