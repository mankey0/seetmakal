// import { createContext, useState, useContext } from "react";

// // إنشاء السياق (Context)
// const LanguageContext = createContext();

// // مزود السياق
// export const LanguageProvider = ({ children }) => {
//     const [language, setLanguage] = useState("ar");

//     return (
//         <LanguageContext.Provider value={{ language, setLanguage }}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };

// // هوك مخصص لاستخدام اللغة بسهولة
// export const useLanguage = () => useContext(LanguageContext);





import { createContext, useContext, useState } from 'react';

// إنشاء السياق
const LanguageContext = createContext();

// مزود اللغة (يجب أن يُغلف التطبيق)
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ar');

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook مخصص للوصول إلى السياق بسهولة
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage يجب أن يُستخدم داخل LanguageProvider");
    }
    return context;
};

export default LanguageContext;
