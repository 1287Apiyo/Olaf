// Add event listener to open the gift box
document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.querySelector(".gift-box");
    giftBox.addEventListener("click", function() {
        // Animate the gift box opening
        giftBox.classList.add("open");
    });
});
