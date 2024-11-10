const images = require.context('./assets/img', false, /\.webp$/);
const menuImages = Array.from({ length: 8 }, (_, i) => images(`./menu_${i + 1}.webp`));

export const loadMenuContent = () => { 
const contentDiv = document.querySelector('#content');
contentDiv.insertAdjacentHTML('beforeend', 
        `<section class="menu">
                <h2>This Month's Bowls</h2>
                <div class='dishes-container'></div>
            </section>`);
    
const dishesContainer = document.querySelector('.dishes-container');
menuImages.forEach(image => {
    dishesContainer.insertAdjacentHTML('beforeend',`
                    <div class='dish-card'>
                        <img src="${image}" alt="">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur similique quasi quidem rerum maxime illum ipsum eius qui, dolorem autem, sit reprehenderit adipisci, voluptatem architecto vitae earum natus quisquam quas?</p>
                    </div>
        `);
});

};
