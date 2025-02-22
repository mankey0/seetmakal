import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from '../Context/LanguageContext';
import { Link } from "react-router-dom";
import igmcard from "../assests/WhatsApp Image 2025-02-20 at 15.44.00.jpeg";
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
const translations = {
  ar: "تُعد صيت للمقاولات من الشركات الرائدة في مجال البناء، حيث تقدم حلولًا متكاملة في مجال الإنشاءات والبنية التحتية، مع التركيز على الجودة والاحترافية في التنفيذ. بفضل خبرتنا الواسعة وفريقنا المتخصص، نلتزم بتقديم مشاريع بناء متميزة تلبي أعلى المعايير الهندسية.",
  en: "Seet Contracting is one of the leading companies in the construction field, offering integrated solutions in construction and infrastructure, with a focus on quality and professionalism in execution. With our extensive experience and specialized team, we are committed to delivering outstanding construction projects that meet the highest engineering standards."
};
const cardsData = [
  {
    id: 1,
    beforeImg: igmcard,
    duringImg: Construction,
    title: { ar: "البناء التجاري", en: "Commercial Construction" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/commercial"
  },
  {
    id: 2,
    beforeImg: igmcard,
    duringImg: residential,
    title: { ar: "البناء السكني", en: "Residential construction" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/residential"
  },
  {
    id: 3,
    beforeImg: igmcard,
    duringImg: industrial,
    title: { ar: "المشاريع الصناعية", en: "Industrial projects" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/industrial"
  },
  {
    id: 4,
    beforeImg: igmcard,
    duringImg: concrete,
    title: { ar: "اعمال الحفر والخرسانة", en: "Excavation and concrete works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/concrete"
  },
  {
    id: 5,
    beforeImg: igmcard,
    duringImg: carpentry,
    title: { ar: "اعمال النجارة المسلحة", en: "Reinforced carpentry works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/carpentry"
  },
  {
    id: 6,
    beforeImg: igmcard,
    duringImg: Plastering,
    title: { ar: "اعمال اللياسة", en: "Plastering works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/plastering"
  },
  {
    id: 7,
    beforeImg: igmcard,
    duringImg: steelworks,
    title: { ar: "اعمال الحدادة الخرسانية", en: "Reinforced steel works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/steelworks"
  },
  {
    id: 8,
    beforeImg: igmcard,
    duringImg: electricalworks,
    title: { ar: "اعمال السباكة والكهرباء", en: "Plumbing and electrical works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/electricalworks"
  },
  {
    id: 9,
    beforeImg: igmcard,
    duringImg: Painting,
    title: { ar: "اعمال الدهانات", en: "Painting works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/painting"
  },
  {
    id: 10,
    beforeImg: igmcard,
    duringImg: renovation,
    title: { ar: "اعمال الترميم والتجديد", en: "Renovation and restoration works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/renovation"
  },
  {
    id: 11,
    beforeImg: igmcard,
    duringImg: finishingworks,
    title: { ar: "اعمال التشطيبات النهائية", en: "Final finishing works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/finishingworks"
  },
  {
    id: 12,
    beforeImg: igmcard,
    duringImg: Ceramic,
    title: { ar: "تركيب سيراميك ورخام وحجر", en: "Ceramic, marble, and stone installation" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/ceramic"
  },
  {
    id: 13,
    beforeImg: igmcard,
    duringImg: gypsum,
    title: { ar: "تركيب الاسقف الجبسية", en: "Gypsum ceiling installation" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/gypsum"
  },
  {
    id: 14,
    beforeImg: igmcard,
    duringImg: roofinsulation,
    title: { ar: "عزل الاسطح وتركيب التكييف المركزي", en: "Roof insulation and central air conditioning installation" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/roofinsulation"
  },
  {
    id: 15,
    beforeImg: igmcard,
    duringImg: woodendoor,
    title: { ar: "تركيب الابواب الخشبية وشبابيك والالمونيوم", en: "Wooden door and aluminum window installation" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/woodendoor"
  },
  {
    id: 16,
    beforeImg: igmcard,
    duringImg: infrastructureprojects,
    title: { ar: "مشاريع البنية التحتية", en: "Infrastructure projects" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/infrastructureprojects"
  },
  {
    id: 17,
    beforeImg: igmcard,
    duringImg: aluminumglass,
    title: { ar: "اعمال الالمونيوم والزجاج", en: "Aluminum, glass, and UPVC works" },
    text: { ar: "هذا نص البطاقة الأولى يوضح بعض المعلومات.", en: "This is the first card's text with some information." },
    buttonText: { ar: "قراءة المزيد", en: "Read More" },
    link: "/home/services/aluminumglass"
  }
];

const Services = () => {
  const { language } = useLanguage();

  const [active, setActive] = useState(8);
  const [isPaused, setIsPaused] = useState(false);
  const [hoverState, setHoverState] = useState(() => {
    let initialState = {};
    cardsData.forEach((card) => {
      initialState[card.id] = "before";
    });
    return initialState;
  });

  const handleMouseEnter = (cardId) => {
    if (cardId === cardsData[active].id) {
      setHoverState((prev) => ({ ...prev, [cardId]: "during" }));
    }
  };

  const handleMouseLeave = (cardId) => {
    if (cardId === cardsData[active].id) {
      setHoverState((prev) => ({ ...prev, [cardId]: "before" }));
    }
  };

  const loadShow = useCallback(() => {
    const elements = document.querySelectorAll(".slider .item");
    if (elements.length === 0 || !elements[active]) return;

    elements.forEach((item, index) => {
      item.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      if (index === active) {
        item.style.transform = "translateX(0) scale(1)";
        item.style.zIndex = 2;
        item.style.filter = "none";
        item.style.opacity = 1;
      } else {
        let distance = Math.abs(index - active);
        let direction = index > active ? 1 : -1;
        item.style.transform = `translateX(${100 * distance * direction}px) scale(${1 - 0.15 * distance}) rotate(${direction * distance * 5}deg)`;
        item.style.zIndex = 1;
        item.style.filter = "blur(4px)";
        item.style.opacity = 0.5;
      }
    });
  }, [active]);

  useEffect(() => {
    loadShow();
  }, [active, loadShow]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cardsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="all-services row m-0">
      <div className="features-caption col-lg-4 col-11">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >{language === "ar" ? 'تتخصص شركة "صيت السعودية" في مجموعة متنوعة من المشاريع، بما في ذلك:' :
          'Seet Saudi specializes in a variety of projects, including:'}</motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >{translations[language]}</motion.p>
      </div>
      <div className="services-part col-lg-8 col-12 d-flex flex-column justify-content-center">
        <div className="slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={`item col-xl-4 col-md-5 col-12 {index === active ? "active-card" : ""}`}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={() => handleMouseLeave(card.id)}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card bg-white shadow-lg rounded-2xl"
              >
                {hoverState[card.id] === "before" && (
                  <img src={card.beforeImg} className="rounded-t-2xl w-60" alt="Card" />
                )}

                {hoverState[card.id] === "during" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    className="card-services"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: .1, duration: 0.5 }}
                      className="img-card-services"
                    >
                      <img src={card.duringImg} className="rounded-t-2xl w-100" alt="Card" />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: .4, duration: 0.5 }}
                      className="text-xl font-bold px-2 py-2">{card.title[language]}</motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: .6, duration: 0.5 }}
                      className="text-gray-600 px-2 py-1">{card.text[language]}</motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: .8, duration: 0.5 }}
                      className="btn-services py-3">
                      <Link to={card.link} className="bg-blue-500 rounded px-2 py-3 block text-center">
                        {card.buttonText[language]}
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
          <button id="prev" onClick={() => setActive(active - 1 >= 0 ? active - 1 : active)}>
            &gt;
          </button>
          <button id="next" onClick={() => setActive(active + 1 < cardsData.length ? active + 1 : active)}>
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
