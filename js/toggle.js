var modalBG = document.querySelector('.modal-bg');
var modalBtn = document.querySelectorAll('.view_project_btn');
var modalClose = document.querySelectorAll('.modal-close');

modalBtn.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).classList.add('bg-active');
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
    };
});


modalClose.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).classList.remove('bg-active');
        document.body.style.overflow = "auto"; 
        document.body.style.height = "auto";  
    };
});
