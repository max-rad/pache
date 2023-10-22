const initElementSizeObserver = (slider) => {
    console.log(slider);

    const elements = slider.querySelectorAll('[data-element-size]');

    if (!elements.length) {
        return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            if (entry.contentBoxSize) {
                const elementHeight = ((slider.offsetHeight - entry.target.offsetHeight) / 2) + 'px';
                slider.querySelector('.swiper-button-next').style.top = `calc(50% - ${elementHeight})`;
                slider.querySelector('.swiper-button-prev').style.top = `calc(50% - ${elementHeight})`;
                //document.documentElement.style.setProperty('--swiper-navigation-top-offset', `calc(50% - ${elementHeight})`);
            }
        }
    });

    
    elements.forEach((element) => {
        resizeObserver.observe(element);
    });
}

export {initElementSizeObserver};