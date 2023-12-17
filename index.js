


function toggleMoreInfo() {
    var moreInfo = document.getElementById('more-info');

    
    moreInfo.style.display = (moreInfo.style.display === 'none' || moreInfo.style.display === '') ? 'block' : 'none';
}


function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkmode-toggle');

    if (darkModeToggle.checked) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}
function openFullScreen(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('fullScreenImage');
  
    modal.style.display = 'block';
    modalImg.src = imageSrc;
  }
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
  
  document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const level = skillBar.getAttribute('data-level');
        skillBar.innerHTML = `<div class="skill-bar-inner" style="width: ${level}%;"></div>`;
    });

    const images = [
        'college_pilote.png',
        'Lycee_pilote.png',
        'issatmahdia.png',
        'logo_esprit.png'
        
    ];

    let currentIndex = 0;
    const slideshow = document.getElementById('slideshow');

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.src = images[currentIndex];
    }

    // Call showNextImage every 3 seconds (adjust the interval as needed)
    setInterval(showNextImage, 3000);

    
    Promise.all(images.map(img => new Promise((resolve, reject) => {
        const tempImg = new Image();
        tempImg.src = img;
        tempImg.onload = resolve;
        tempImg.onerror = reject;
    })))
    .then(() => {
        
        showNextImage();
    })
    .catch(error => {
        console.error('Error loading images:', error);
    });
});
  document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const level = skillBar.getAttribute('data-level');
        skillBar.innerHTML = `<div class="skill-bar-inner" style="width: ${level}%;"></div>`;
    });
});
document.getElementById('animateBarsButton').addEventListener('click', animateBars);

function animateBars() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`;
    });
}
