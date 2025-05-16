const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

const buttons = document.querySelectorAll('.content-btn');
const contentTitle = document.getElementById('content-title');
const contentText = document.getElementById('content-text');

const contentData = {
    web: {
        title: 'Web Development',
        text: 'we create responsive, high-performance websites tailored to your needs using modern technologies like HTML, CSS, and JavaScript.'
    },
    design: {
        title: 'Graphic Design',
        text: 'Our team designs stunning visuals, including logos, banners, and UI/UX, to elevate your brand identity.'
    },
    marketing: {
        title: 'Digital Marketing',
        text: 'Boost your online presence with our SEO, social media, and content marketing strategies.'
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contentKey = button.getAttribute('data-content');
        contentTitle.textContent = contentData[contentKey].title;
        contentText.textContent = contentData[contentKey].text;
    });
})