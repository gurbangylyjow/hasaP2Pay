const translations = {
    tk: {
        home: "Baş Sahypa",
        exchange: "Söwda",
        wallet: "Gapjyk",
        current_lang: "Türkmen",
        hero_title: "Howpsuz P2P Geçirimler",
        hero_text: "Beýleki ulanyjylar bilen howpsuz söwda",
        cta_start: "Başlamak",
        cta_learn: "Giňişleýin",
        exchange_title: "Söwda Sahypasy",
        exchange_text: "Bu ýerde söwda edip bilersiňiz",
        wallet_title: "Gapjyk Sahypasy",
        wallet_text: "Bu ýerde gapjygyňyzy dolduryp bilersiňiz"
    },
    ru: {
        home: "Главная",
        exchange: "Торговля",
        wallet: "Кошелек",
        current_lang: "Русский",
        hero_title: "Безопасные P2P Переводы",
        hero_text: "Торгуйте безопасно с другими пользователями",
        cta_start: "Начать",
        cta_learn: "Подробнее",
        exchange_title: "Страница Торговли",
        exchange_text: "Здесь вы можете торговать",
        wallet_title: "Страница Кошелька",
        wallet_text: "Здесь вы можете пополнить кошелек"
    },
    en: {
        home: "Home",
        exchange: "Exchange",
        wallet: "Wallet",
        current_lang: "English",
        hero_title: "Secure P2P Transactions",
        hero_text: "Trade securely with other users",
        cta_start: "Get Started",
        cta_learn: "Learn More",
        exchange_title: "Exchange Page",
        exchange_text: "You can trade here",
        wallet_title: "Wallet Page",
        wallet_text: "You can top up your wallet here"
    }
};

// Dil saýlamagy işleýän funksiýa
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
    updateURL(lang);
}

// Sahypany täzeden ýüklemezden URL-i üýtget
function updateURL(lang) {
    const newURL = new URL(window.location);
    newURL.searchParams.set('lang', lang);
    window.history.replaceState(null, '', newURL);
}

// Tekstleri täzele
function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translations[lang][key];
    });
}

// Ilkinji ýükleme
function init() {
    const savedLang = localStorage.getItem('hasaP2Pay_lang');
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const defaultLang = navigator.language.startsWith('ru') ? 'ru' : 
                      navigator.language.startsWith('en') ? 'en' : 'tk';
    
    const lang = urlLang || savedLang || defaultLang;
    setLanguage(lang);
}

// Sahypa ýüklenende işle
document.addEventListener('DOMContentLoaded', init);