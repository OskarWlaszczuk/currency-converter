{
    const displayResualts = (amount, currencyAmount, currencyName) => {
        const resualtElement = document.querySelector(".js-form__resualts");
        resualtElement.innerHTML = `${amount} zł = <strong>${currencyAmount} ${currencyName} </strong>`;
    };

    const calculateResualt = (amount) => {
        const selectElement = document.querySelector(".js-form__select");
        const currency = selectElement.value;

        const usdOption = document.querySelector(".js-form__usd").value;
        const gbpOption = document.querySelector(".js-form__gbp").value;
        const chfOption = document.querySelector(".js-form__chf").value;
        const eurOption = document.querySelector(".js-form__eur").value;

        const usd = amount * 0.24;
        const gbp = amount * 0.20;
        const chf = amount * 0.22;
        const eur = amount * 0.23;

        switch (currency) {
            case usdOption:
                displayResualts(amount.toFixed(2), usd.toFixed(2), usdOption);
                break;

            case gbpOption:
                displayResualts(amount.toFixed(2), gbp.toFixed(2), gbpOption);
                break;

            case chfOption:
                displayResualts(amount.toFixed(2), chf.toFixed(2), chfOption);
                break;

            case eurOption:
                displayResualts(amount.toFixed(2), eur.toFixed(2), eurOption);
                break;
        };
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputElement = document.querySelector(".js-form__inputField");
        const amount = inputElement.value;

        calculateResualt(+amount);
    };

    const onFormReset = () => {
        const inputElement = document.querySelector(".js-form__inputField");
        inputElement.focus();

        const resualtElement = document.querySelector(".js-form__resualts");
        resualtElement.innerText = "";
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    };

    init();
};