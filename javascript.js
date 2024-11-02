let currentIndex = 0; // Start with the first slide
const items = document.querySelectorAll('.carousal-item'); // Get all carousel items
const totalItems = items.length; // Get the total number of items

function moveSlide(direction) {
    // Remove 'active' class from the current slide
    items[currentIndex].classList.remove('active');

    // Calculate new index
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Apply 'active' class to the new slide
    items[currentIndex].classList.add('active');

    // Move the carousel based on the current index
    document.querySelector('.carousal-inner').style.transform = `translateX(${-currentIndex * 190}px)`;
    // Adjust 190px to match your image width + margin/padding
}

// Auto-run the moveSlide function for automatic carousel (optional)
let autoSlide = setInterval(() => {
    moveSlide(1); // Move forward automatically
}, 3000); // Every 3 seconds

// Pause auto-slide when hovering over carousel (optional)
document.querySelector('.carousal-container').addEventListener('mouseover', () => {
    clearInterval(autoSlide); // Stop auto slide
});

// Resume auto-slide when not hovering (optional)
document.querySelector('.carousal-container').addEventListener('mouseout', () => {
    autoSlide = setInterval(() => {
        moveSlide(1); // Restart auto slide
    }, 3000);
});







// code for ACCORDIAN

let accordian = document.getElementsByClassName("contentbox");

for (i = 0; i < accordian.length; i++) {


accordian[i].addEventListener('click' ,function(){

    for(r=0;r<accordian.length;r++){
        accordian[r].classList.remove('active');
    }

    this.classList.toggle('active');

})

}