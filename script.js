const photos = document.querySelectorAll('.carousel-photo');

photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        document.querySelectorAll('.carousel-container').forEach(container => {
            container.style.animationPlayState = 'paused';
        });
    });

    photo.addEventListener('mouseout', () => {
        document.querySelectorAll('.carousel-container').forEach(container => {
            container.style.animationPlayState = 'running';
        });
    });
});
