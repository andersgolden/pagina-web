function nextSlide() {
    const wrapper = document.getElementById('flechas');
    wrapper.scrollBy({
        left: wrapper.clientWidth,
        behavior: 'smooth'
    });
}

function prevSlide() {
    const wrapper = document.getElementById('flechas');
    wrapper.scrollBy({
        left: -wrapper.clientWidth,
        behavior: 'smooth'

    });
}