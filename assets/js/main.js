//dropdown
document.addEventListener('DOMContentLoaded', function() {
  
    const dropdown = document.getElementById('dropdown');
  
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
  
  
  });
//Галерея
function openImage(element) {
    if (window.innerWidth > 768) {
        const image = element.querySelector('.gallery__wrapp_img').src;
        const modal = document.querySelector('.image-modal');
        const imageElement = modal.querySelector('.modal-image');
        const overlay = document.querySelector('.overlay');

        imageElement.src = image;

        // Показать модальное окно и затемненный задний фон
        overlay.style.display = 'block';
        modal.style.display = 'block';
    }
}

function closeModal(element) {
    if (window.innerWidth > 768) {
        const modal = element.closest('.image-modal');
        const overlay = document.querySelector('.overlay');

        // Скрыть модальное окно и затемненный задний фон
        overlay.style.display = 'none';
        modal.style.display = 'none';
    }
}




//Прокрут до секции 
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu__item_a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href'); // Получаем атрибут href ссылки
            const targetSection = document.querySelector(targetId); // Находим соответствующую секцию по ID

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к секции плавно
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const downButton = document.querySelector('.btn__down');

    downButton.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = downButton.getAttribute('href'); // Получаем атрибут href кнопки
        const targetSection = document.querySelector(targetId); // Находим соответствующую секцию по ID

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к секции плавно
        }
    });
});


//Файл


const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');
const fileIcon = document.getElementById('fileIcon');
const fileInput2 = document.getElementById('fileInput2');
const fileName2 = document.getElementById('fileName2');
const fileIcon2 = document.getElementById('fileIcon2');

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
        fileIcon.style.display = 'none'; // Скрывает иконку SVG
    } else {
        fileName.textContent = 'Файл';
        fileIcon.style.display = 'block'; // Показывает иконку SVG
    }
});

fileInput2.addEventListener('change', () => {
    if (fileInput2.files.length > 0) {
        fileName2.textContent = fileInput2.files[0].name;
        fileIcon2.style.display = 'none'; // Скрывает иконку SVG
    } else {
        fileName2.textContent = 'Файл';
        fileIcon2.style.display = 'block'; // Показывает иконку SVG
    }
});

//burger

$(document).ready(function(){
    $('.header__menu').click(function(event){
      $('.menu').toggleClass('active__menu');
  
    });
  
  });
  $(document).ready(function(){
    $('.header__menu').click(function(event){
      var menuImage = $('.burger__img');
      
      if (menuImage.attr('src') === 'assets/img/burger.png') {
          menuImage.attr('src', 'assets/img/close_burger.png');
      } else {
          menuImage.attr('src', 'assets/img/burger.png');
      }
    });
  });