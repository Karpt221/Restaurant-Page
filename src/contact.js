export const loadContactContent = () => { 
const contentDiv = document.querySelector('#content');
contentDiv.insertAdjacentHTML('beforeend', 
    `<section class="contact-section">
            <h2>Contact Us</h2>
            <p>Please reach out to us if you are interested in a subscription plan, or want to partner/ collaborate with us, or for home and corporate catering needs.</p>
            <form class='contact-form' method='get' action="">
                <lable for='name'>Name*<input id='name' type='text'></lable>
                <lable for='eamil'>Email*<input id='eamil' type='text'></lable>
                <lable for='subject'>Subject*<input id='subject' type='text'></lable>
                <lable for='message'>Message<textarea id='message'></textarea></lable>
                <input type="submit" value="Submit">
            </form>
        </section>`);
};