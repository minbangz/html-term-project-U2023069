<script>
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const totalSlides = images.length;
    document.querySelector('.prev').addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlidePosition();
    });
    document.querySelector('.next').addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    });
    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
</script>