document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.counter');
    let count = 0;

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            if (button.classList.contains('lower')) {
                count--;
            } else if (button.classList.contains('add')) {
                count++;
            }

            const counter = document.querySelector('#counter');
            counter.textContent = count;

            if (count < 0) {
                counter.style.color = 'red';
            } else if (count > 0) {
                counter.style.color = 'green';
            }
        });
    });
})()
