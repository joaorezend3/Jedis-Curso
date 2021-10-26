var menuButton = document.getElementById('menuToggle');
var menu = document.getElementById('menu');

menuButton.onclick = function (){
    menu.classList.toggle('ativo');
    menuButton.classList.toggle('ativo');
};

menu.style.backgroundColor = 'magenta'