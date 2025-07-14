// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission (for demonstration - replace with actual backend logic)
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('無料体験レッスンのお申し込みありがとうございます！');
    this.reset();
});