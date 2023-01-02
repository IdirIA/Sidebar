
const btnOpenSideBar = document.getElementById('btn');
const sideBar = document.getElementById('side-bar');
const btnBar1 = document.querySelector('.toggle-btn span:nth-child(1)');
const btnBar2 = document.querySelector('.toggle-btn span:nth-child(2)');
const btnBar3 = document.querySelector('.toggle-btn span:nth-child(3)');
const content = document.querySelector('.content');

btnOpenSideBar.addEventListener('click', ()=>{
    sideBar.classList.toggle('side-bar-visible');
    btnBar1.classList.toggle('bar1');
    btnBar2.classList.toggle('bar2');
    btnBar3.classList.toggle('bar3');
});

content.addEventListener('click', ()=>{
    sideBar.classList.remove('side-bar-visible');
    btnBar1.classList.remove('bar1');
    btnBar2.classList.remove('bar2');
    btnBar3.classList.remove('bar3');
});