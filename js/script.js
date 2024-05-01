{
    const displayResualts = (currency, amount) => {
        const resualtElement = document.querySelector(".js-form__resualts");
        const resualt = resualtElement.value;

        resualt.innerHTML = `${amount} zł = <strong>${currency}</strong>`;
    };

    const calculateResualt = (amount) => {

        const selectElement = document.querySelector(".js-form__select");
        const currentCurrency = selectElement.value;

        const usdOption = document.querySelector(".js-form__usd").value;
        const gbpOption = document.querySelector(".js-form__gbp").value;
        const chfOption = document.querySelector(".js-form__chf").value;
        const eurOption = document.querySelector(".js-form__eur").value;

        const usd = amount * 0.24;
        const gbp = amount * 0.20;
        const chf = amount * 0.22;
        const eur = amount * 0.23;

        switch (currentCurrency) {
            case usdOption:
                displayResualts(usd, amount);
                break;

            case gbpOption:
                displayResualts(gbp, amount);
                break;

            case chfOption:
                displayResualts(chf, amount);
                break;

            case eurOption:
                displayResualts(eur, amount);
                break;
        };
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputElement = document.querySelector(".js-form__inputField");
        const amount = inputElement.value;

        calculateResualt(amount);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
};