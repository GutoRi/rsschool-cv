// Прокрутка при клике

const menuLinks = document.querySelectorAll('.data[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", oneMenuLinkClick);
  });

  function oneMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

console.log(`Самооценка: 150/160 баллов.
  √ Вёрстка валидная (валидатор ошибок не выявил) - 10 баллов;
  √ Вёрстка семантическая (присутствуют 6 семантических тегов: header, nav, main, section, footer, time,
    а также 6 заголовков h1, h2, h3, h4, h5, h6) - 20 баллов;
  √ Для оформления СV используются css-стили (сss-стили используются в файле style.css) - 10 баллов;
  √ Контент размещается в блоке, который горизонтально центрируется на странице. 
    Фоновый цвет, тянется во всю ширину страницы - 10 баллов;
  √ Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная 
    полоса прокрутки, при этом всё содержание страницы сохраняется - 10 баллов;
  √ Есть адаптивное бургер-меню - 10 баллов;
  √ На странице СV присутствует изображение - фото или аватарка автора CV, 
    пропорции изображения не искажены, у изображения есть атрибут alt - 10 баллов;
  √ Контакты для связи и перечень навыков оформлены в виде списка ul > li - 10 баллов;
  √ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, 
    информацию об образовании и уровне английского - 10 баллов;
  √ CV содержит пример с подсветкой кода - 10 баллов;
  √ CV содержит изображения-ссылки на выполненные вами проекты. 
    При клике по изображению страница проекта открывается в новой вкладке. 
    У каждого проекта есть название, небольшое описание, 
    указан перечень используемых технологий - 10 баллов;
  √ CV выполнено на английском языке - 10 баллов;
  √ Выполнены требования к Pull Request - 10 баллов;
  √ Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV - 10 баллов;
  х Есть видеорезюме автора CV на английском языке - 0 баллов;`);
