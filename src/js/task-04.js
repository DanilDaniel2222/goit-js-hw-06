const valueEl = document.querySelector('#value');

const counterValue = {
    value: 0,
    decrement(value){
        this.value -= 1
    },
    increment(value){
        this.value += 1
    },
};

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener("click", () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener("click", () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});



