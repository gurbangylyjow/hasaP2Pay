const translations = {
    tk: {
        home: "Baş Sahypa",
        exchange: "Söwda",
        wallet: "Gapjyk",
        signup: "Agza bol",
        current_lang: "Türkmen",
        hero_title: "Howpsuz P2P Geçirimler",
        hero_text: "Beýleki ulanyjylar bilen howpsuz söwda",
        cta_start: "Başlamak",
        cta_learn: "Giňişleýin",
        feature1_title: "Derrew Geçirim",
        feature1_text: "1 minutdan gowrak wagt",
        feature2_title: "Arzan Bahalar",
        feature2_text: "0.5% töleg komissiýasy",
        footer_about: "hasaP2Pay",
        footer_description: "Howpsuz P2P Söwda Platformasy",
        footer_legal: "Hukuk",
        footer_terms: "Ulanyş şertleri",
        footer_privacy: "Gizlinlik syýasaty",
        signup_title: "Agza bol",
        fullname: "Ady we familiýasy",
        email: "E-poçta",
        phone: "Telefon",
        password: "Parol",
        confirm_password: "Paroly tassyklamak",
        terms_agree: "Men ulanyş şertlerini kabul edýärin",
        signup_submit: "Agza bol",
        already_have_account: "Hasabyňyz barmy?",
        login: "Giriş",
        login_title: "Giriş",
        login_submit: "Giriş",
        no_account: "Hasabyňyz ýokmy?"
    },
    ru: {
        home: "Главная",
        exchange: "Торговля",
        wallet: "Кошелек",
        signup: "Регистрация",
        current_lang: "Русский",
        hero_title: "Безопасные P2P Переводы",
        hero_text: "Торгуйте безопасно с другими пользователями",
        cta_start: "Начать",
        cta_learn: "Подробнее",
        feature1_title: "Мгновенные Переводы",
        feature1_text: "Менее 1 минуты",
        feature2_title: "Низкие Цены",
        feature2_text: "Комиссия 0.5%",
        footer_about: "hasaP2Pay",
        footer_description: "Безопасная P2P Платформа",
        footer_legal: "Юридическая информация",
        footer_terms: "Условия использования",
        footer_privacy: "Политика конфиденциальности",
        signup_title: "Регистрация",
        fullname: "Имя и фамилия",
        email: "Электронная почта",
        phone: "Телефон",
        password: "Пароль",
        confirm_password: "Подтвердите пароль",
        terms_agree: "Я согласен с условиями использования",
        signup_submit: "Зарегистрироваться",
        already_have_account: "Уже есть аккаунт?",
        login: "Войти",
        login_title: "Вход",
        login_submit: "Войти",
        no_account: "Нет аккаунта?"
    },
    en: {
        home: "Home",
        exchange: "Exchange",
        wallet: "Wallet",
        signup: "Sign Up",
        current_lang: "English",
        hero_title: "Secure P2P Transactions",
        hero_text: "Trade securely with other users",
        cta_start: "Get Started",
        cta_learn: "Learn More",
        feature1_title: "Instant Transfers",
        feature1_text: "Less than 1 minute",
        feature2_title: "Low Fees",
        feature2_text: "0.5% transaction fee",
        footer_about: "hasaP2Pay",
        footer_description: "Secure P2P Trading Platform",
        footer_legal: "Legal",
        footer_terms: "Terms of Service",
        footer_privacy: "Privacy Policy",
        signup_title: "Sign Up",
        fullname: "Full Name",
        email: "Email",
        phone: "Phone",
        password: "Password",
        confirm_password: "Confirm Password",
        terms_agree: "I agree to the Terms of Service",
        signup_submit: "Sign Up",
        already_have_account: "Already have an account?",
        login: "Login",
        login_title: "Login",
        login_submit: "Login",
        no_account: "Don't have an account?"
    }
};

// Dil saýlamak
document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.dataset.lang;
        setLanguage(lang);
    });
});

// Dili sazla we ýatda sakla
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('hasaP2Pay_lang', lang);
    updateContent(lang);
}

// Tekstleri täzele
function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translations[lang][key];
    });
}

// Mobil menyu aç/jap
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Sahypa ýüklenende işle
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('hasaP2Pay_lang') || 'tk';
    setLanguage(savedLang);
});