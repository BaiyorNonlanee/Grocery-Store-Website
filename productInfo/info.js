document.addEventListener("DOMContentLoaded", function () {
    const decrementBtn = document.getElementById("decrement");
    const incrementBtn = document.getElementById("increment");
    const quantityInput = document.getElementById("quantity");

    let quantity = 0;

    decrementBtn.addEventListener("click", function () {
        if (quantity > 0) {
            quantity--;
            updateQuantity();
        }
    });

    incrementBtn.addEventListener("click", function () {
        quantity++;
        updateQuantity();
    });

    function updateQuantity() {
        quantityInput.value = quantity;
    }
});
