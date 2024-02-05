// Exemple de modification pour la fonction de déplacement de fenêtre
let isDragging = false;
let offset = { x: 0, y: 0 };

$('.frame').on('mousedown touchstart', function (e) {
    isDragging = true;
    const touch = e.type === 'touchstart' ? e.touches[0] : e;
    offset = {
        x: touch.clientX - $(this).offset().left,
        y: touch.clientY - $(this).offset().top
    };
});

$('.frame').on('mousemove touchmove', function (e) {
    if (!isDragging) return;
    const touch = e.type === 'touchmove' ? e.touches[0] : e;
    const x = touch.clientX - offset.x;
    const y = touch.clientY - offset.y;
    $(this).css({ left: x, top: y });
});

$('.frame').on('mouseup touchend', function () {
    isDragging = false;
});
