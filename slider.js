//массив картинок
let slides = ['pizza-1.jpg', 'pizza-2.jpg', 'pizza-3.jpg', 'pizza-4.jpg'];

//родительский элемент слайдера
let parentSlider = document.querySelector('.slider__box');

let activeSlide = localStorage.getItem('active-slide');

//генерация html разметки слайдера
let list = document.createElement('div');
let btnsBox = document.createElement('div');

list.classList.add('slider');


list.replaceChildren(...
    slides.map((el, index) => {
        let e = document.createElement('img');
        // if(index == 0) {
        //     e.classList.add('visible');
        // }
        e.src = 'img/' + el;
        
        if(activeSlide) {
            if(index == activeSlide) {
                e.classList.add('visible');
            }
        }

        if(!activeSlide){
            if(index === 0){
                e.classList.add('visible');
            }
        }
        return e;
    })
)

//генерация html разметки блока с кнопками
btnsBox.classList.add('btns');

let btnPrev = document.createElement('button');
btnPrev.classList.add('prev');
let btnNext = document.createElement('button');
btnNext.classList.add('next');

btnsBox.appendChild(btnPrev);
btnsBox.appendChild(btnNext);

//вывод разметки слайдера и кнопок на страницу
parentSlider.appendChild(list);
parentSlider.appendChild(btnsBox);


let sliderAll = document.querySelectorAll('.slider img');
let buttonPrev = document.querySelector('.prev');
let buttonNext = document.querySelector('.next');
let i = 0;
if(activeSlide){
    i = activeSlide;
}   


//функция перелистывания слайдов вперед
function next() {
   
    sliderAll[i].classList.remove('visible');
    i++;

    if(i >= sliderAll.length) {
        i = 0;
    }

    sliderAll[i].classList.add('visible');
    localStorage.setItem('active-slide', i);
}

//функция перелистывания слайдов назад
function prev() {
    sliderAll[i].classList.remove('visible');
    i--;

    if(i < 0) {
        i = sliderAll.length - 1;
    }

    sliderAll[i].classList.add('visible');
    localStorage.setItem('active-slide', i);
}

//отлавливаем клики по кнопкам и меняем слайды
buttonNext.addEventListener('click', function() {
    next();
});

buttonPrev.addEventListener('click', function() {
    prev();
});


//листаем слайдер стрелками клавиатуры
function eventKey(e) {
    switch (e.keyCode) {

      case 37:
        prev()
        break;

      case 39:
        next()
        break;

    }
  }
  addEventListener("keydown", eventKey);