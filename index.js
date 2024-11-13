const extraShape3 = document.getElementById('extra-shape-3');

extraShape3.addEventListener('click', () => {
    extraShape3.style.animation = 'none'; // Temporarily remove the animation
    void extraShape3.offsetWidth; // Trigger reflow to restart the animation
    extraShape3.style.animation = 'up-down-left-right-animation 2s forwards'; // Re-apply the animation
});

const extraShape4 = document.getElementById('extra-shape-4');

extraShape4.addEventListener('click', () => {
    extraShape4.style.animation = 'none'; // Temporarily remove the animation
    void extraShape4.offsetWidth; // Trigger reflow to restart the animation
    extraShape4.style.animation = 'reversed-up-down-left-right-animation 2s forwards'; // Re-apply the animation
});

