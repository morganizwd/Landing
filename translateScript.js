function switchLanguage(lang) {
    document.querySelectorAll('[data-lang-' + lang + ']').forEach(element => {
        element.innerHTML = element.getAttribute('data-lang-' + lang);
    });
}

document.querySelector('.eng').addEventListener('click', () => switchLanguage('en'));
document.querySelector('.rus').addEventListener('click', () => switchLanguage('ru'));

// Получаем все элементы с классом langs
const langSwitcher = document.querySelector('.langs');
const engBtn = document.querySelector('.eng');
const rusBtn = document.querySelector('.rus');

// При клике на блок с классом langs
langSwitcher.addEventListener('click', (e) => {
    // Если клик был по кнопке "Eng"
    if (e.target === engBtn) {
        engBtn.classList.add('active-lang');   // Добавляем класс active-lang к кнопке "Eng"
        rusBtn.classList.remove('active-lang'); // Убираем класс active-lang у кнопки "Rus"
    }
    // Если клик был по кнопке "Rus"
    else if (e.target === rusBtn) {
        rusBtn.classList.add('active-lang');    // Добавляем класс active-lang к кнопке "Rus"
        engBtn.classList.remove('active-lang');  // Убираем класс active-lang у кнопки "Eng"
    }
});