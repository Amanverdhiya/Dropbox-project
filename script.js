const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }

    });
}, {
    threshold: 0.2
});

reveals.forEach((element) => {
    observer.observe(element);
});
window.addEventListener("scroll", () => {
    const fashion = document.querySelector(".fashion");
    const video = document.querySelector(".video");

    const scroll = window.scrollY;

    fashion.style.transform =
        `translateY(${scroll * 0.1}px)`;

    video.style.transform =
        `translateY(${-scroll * 0.1}px)`;
});
