{
    const bmiResult = () => {
        let weight = document.querySelector(".js-weight").value;
        let height = document.querySelector(".js-height").value;
        const result = document.querySelector(".js-resultText");

        result.innerText = `${(weight / (height / 100)** 2).toFixed(1)}`
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        bmiResult();
    };

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}