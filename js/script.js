{
    const appStartFocus = () => {
        const firstInput = document.querySelector(".js-weight");

        firstInput.focus();
    };

    const bmiResult = () => {
        const weight = document.querySelector(".js-weight").value;
        const height = document.querySelector(".js-height").value;
        const resultText = document.querySelector(".js-resultText");
        const categoryResult = document.querySelector(".js-bmiCategory");

        let result;

        result = (weight / (height / 100) ** 2).toFixed(1)
        resultText.innerText = `${result}`

        bmiCategory(result, categoryResult);
        bmiSuggestion(height, categoryResult);
    };

    const bmiCategory = (result, categoryResult) => {
        switch (true) {
            case (result < 18.5):
                categoryResult.innerHTML = `<span class="section__resultText--blue">Underweight</span>`;
                break;
            case (result >= 18.5 && result <= 24.9):
                categoryResult.innerHTML = `<span class="section__resultText--green">Normal weight</span>`;
                break;
            case (result >= 25 && result <= 29.9):
                categoryResult.innerHTML = `<span class="section__resultText--orange">Overweight</span>`;
                break;
            case (result >= 30):
                categoryResult.innerHTML = `<span class="section__resultText--red">Obesity</span>`;
                break;
        }
    };

    const bmiSuggestion = (height, categoryResult) => {
        const bmiSuggestion = document.querySelector(".js-bmiSuggestion");

        switch (categoryResult.innerText) {
            case ("Normal weight"):
                bmiSuggestion.innerText = "";
                break;
            default:
                bmiSuggestion.innerText = `To achieve a normal weight at a height of ${height} cm, your weight should fall within the range of ${(18.5 * (height / 100) ** 2).toFixed(0)} kg to ${(24.9 * (height / 100) ** 2).toFixed(0)} kg based on the Body Mass Index (BMI).`
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