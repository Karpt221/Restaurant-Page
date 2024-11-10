import about1 from './assets/img/about_1.webp';
import about2 from './assets/img/about_2.webp';
import about3 from './assets/img/about_3.webp';
export const loadHomeContent = () => { 
const contentDiv = document.querySelector('#content');
contentDiv.insertAdjacentHTML('beforeend', 
    `<section class="home-about-us">
            <h2>Who are we?</h2>
            <p>We are a farm to fork inspired kitchen that aims to promote a healthier lifestyle by
                we use, sourcing most of our produce locally and directly from farmers to create
                transparency across the food chain. We would like people to have a deeper
                understanding and appreciation for the food they consume, learn more about
                what’s in season, where it’s grown & how it’s grown.
                By promoting a plant forward, whole food diet we encourage our customers to eat more well balanced meals.</p>
        </section>
        <section class="slogan-images">
            <h2>At its core food is medicine!</h2>
            <div class="img-panel">
                <img src="${about1}" alt="">
                <img src="${about2}" alt="">
                <img src="${about3}" alt="">
            </div>
        </section>`);
};