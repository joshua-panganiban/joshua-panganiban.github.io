// Show next timeline entry
function checkVisibility() {
    const containers = document.querySelectorAll('.timeline-container');
    const timeline = document.querySelector('.timeline');
    const triggerBottom = window.innerHeight * 0.8;
    let maxVisibleBottom = 0;
    let lastVisibleContainer = null;

    containers.forEach(container => {
        const boxTop = container.getBoundingClientRect().top;
        const boxBottom = container.getBoundingClientRect().bottom;

        if (boxTop < triggerBottom && boxBottom > 0) {
            container.classList.add('show');
            lastVisibleContainer = container;
        } else {
            container.classList.remove('show');
        }
    });

    if (lastVisibleContainer) {
        const containersArray = Array.from(containers);
        const lastIndex = containersArray.indexOf(lastVisibleContainer);
        const isLastContainer = lastIndex === containersArray.length - 1;

        let offset;
        if (!isLastContainer) {
            offset = lastVisibleContainer.offsetTop + lastVisibleContainer.offsetHeight / 2;
        } else {
            const img = lastVisibleContainer.querySelector('img');
            const logoCenterOffset = img ? img.offsetTop + img.offsetHeight / 2 : 32;
            offset = lastVisibleContainer.offsetTop + logoCenterOffset;
        }

        maxVisibleBottom = offset;
    }

    timeline.style.setProperty('--line-height', maxVisibleBottom + 'px');
    timeline.style.setProperty('position', 'relative');
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Toggle Show More / Show Less
document.querySelectorAll('.text-box').forEach(box => {
    const btn = box.querySelector('.show-more-btn');
    const textWrapper = box.querySelector('.text-wrapper');
    const leftArrow = box.querySelector('.left-container-arrow');
    const rightArrow = box.querySelector('.right-container-arrow');

    if (box.scrollHeight <= box.clientHeight - 1) {
        btn.style.display = 'none'; 
    }

    btn.addEventListener('click', () => {
        box.classList.toggle('expanded');

        textWrapper.classList.toggle('expanded');
        
        btn.textContent = box.classList.contains('expanded') ? 'Show Less' : 'Show More';
    });
});