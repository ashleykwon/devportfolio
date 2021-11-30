var modalBG = document.querySelector('.modal-bg');
var modalBtn = document.querySelector('.view_project_btn');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function () {
    modalBG.classList.add('bg-active');
})

modalClose.addEventListener('click', function () {
    modalBG.classList.remove('bg-active');
})

