import "./styles.css";
import {loadHomeContent} from "./home.js";
import {loadMenuContent} from "./menu.js";
import {loadContactContent} from "./contact.js";

loadHomeContent();

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');


homeBtn.addEventListener('click',()=>{
    document.querySelector('#content').innerHTML = '';
    loadHomeContent();
});

menuBtn.addEventListener('click',()=>{
    document.querySelector('#content').innerHTML = '';
    loadMenuContent();
});

contactBtn.addEventListener('click',()=>{
    document.querySelector('#content').innerHTML = '';
    loadContactContent();
});
