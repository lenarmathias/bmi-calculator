{
    const appStartFocus = () => {
        const firstInput = document.querySelector(".js-weight");

        firstInput.focus();
    };

    const bmiResult = () => {
        const weight = document.querySelector(".js-weight").value;
        const height = document.querySelector(".js-height").value;
        const result = document.querySelector(".js-resultText");

        result.innerText = `${(weight / (height / 100)** 2).toFixed(1)}`
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        bmiResult();
    };

    const init = () => {
        window.addEventListener("DOMContentLoaded", appStartFocus);

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}