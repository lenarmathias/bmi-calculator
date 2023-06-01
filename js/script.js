{
    const appStartFocus = () => {
        const firstInput = document.querySelector(".js-weight");

        firstInput.focus();
    };

    const bmiResult = () => {
        const weight = document.querySelector(".js-weight").value;
        const height = document.querySelector(".js-height").value;
        const resultText = document.querySelector(".js-resultText");
        let result;

        result = (weight / (height / 100) ** 2).toFixed(1)
        resultText.innerText = `${result}`

        bmiCategory(result);
    };

    const bmiCategory = (result) => {
        const categoryResult = document.querySelector(".js-bmiCategory");

        switch (true) {
            case (result < 18.5):
                categoryResult.innerText = "Underweight";
                break;
            case (result >= 18.5 && result <= 24.9):
                categoryResult.innerText = "Normal weight";
                break;
            case (result >= 25 && result <= 29.9):
                categoryResult.innerText = "Overweight";
                break;
            case (result >= 30):
                categoryResult.innerText = "Obesity";
                break;
        }
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