// calculation
function input(x) {
    document.getElementById('input').value += x;
}

function clearall() {
    document.getElementById('input').value = '';
}

function calc() {
    document.getElementById('input').value = eval(document.getElementById('input').value);
}

function backspace (){
    document.getElementById('input').value = document.getElementById('input').value.slice(0,-1);
}

document.getElementsByClassName('btn').style.boxShadow='none'

// mode

function lightmode() {
    document.body.classList.toggle('light-mode');
    document.getElementsByClassName('fa-moon')[0].classList.add('fa-sun');
    document.getElementsByClassName('fa-moon')[0].classList.remove('fa-moon');
    document.getElementsByClassName('btn-lightmode')[0].style.display='none';
    document.getElementsByClassName('btn-darkmode')[0].style.display='inline-block';
}

function darkmode() {
    document.body.classList.toggle('light-mode');
    document.getElementsByClassName('fa-sun')[0].classList.add('fa-moon');
    document.getElementsByClassName('fa-sun')[0].classList.remove('fa-sun');
    document.getElementsByClassName('btn-darkmode')[0].style.display='none';
    document.getElementsByClassName('btn-lightmode')[0].style.display='inline-block';
}