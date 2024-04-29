{

    const displayResualt = (pln, usd, gbp, chf, eur) => {
        const selectElement = document.querySelector(".js-form__select");
        const currency = selectElement.value;
        const resualts = document.querySelector(".js-form__resualts");

        const usdOption = document.querySelector(".js-form__usd").value;
        const gbpOption = document.querySelector(".js-form__gbp").value;
        const chfOption = document.querySelector(".js-form__chf").value;
        const eurOption = document.querySelector(".js-form__eur").value;


        switch (currency) {
            case usdOption:
                resualts.innerHTML = `${pln} zł = <strong>${usd.toFixed(2)} $</strong`;
                selectElement.classList.toggle("form__select--usaTheme");
                selectElement.classList.remove("form__select--engTheme");
                selectElement.classList.remove("form__select--eurTheme");
                selectElement.classList.remove("form__select--cheTheme");
                break;

            case gbpOption:
                resualts.innerHTML = `${pln} zł = <strong>${gbp.toFixed(2)} £</strong>`;
                selectElement.classList.toggle("form__select--engTheme");
                selectElement.classList.remove("form__select--usaTheme");
                selectElement.classList.remove("form__select--eurTheme");
                selectElement.classList.remove("form__select--cheTheme");
                break;

            case chfOption:
                resualts.innerHTML = `${pln} zł = <strong>${chf.toFixed(2)} CHF</strong>`;
                selectElement.classList.toggle("form__select--cheTheme");
                selectElement.classList.remove("form__select--engTheme");
                selectElement.classList.remove("form__select--eurTheme");
                selectElement.classList.remove("form__select--usaTheme");
                break;

            case eurOption:
                resualts.innerHTML = `${pln} zł = <strong>${eur.toFixed(2)} €</strong> `;
                selectElement.classList.toggle("form__select--eurTheme");
                selectElement.classList.remove("form__select--usaTheme");
                selectElement.classList.remove("form__select--engTheme");
                selectElement.classList.remove("form__select--cheTheme");
                break;
        };
    };

    const calculateResualt = () => {
        const inputElement = document.querySelector(".js-form__inputField");
        const pln = inputElement.value;

        const usd = pln * 0.24;
        const gbp = pln * 0.20;
        const chf = pln * 0.22;
        const eur = pln * 0.23;

        displayResualt(pln, usd, gbp, chf, eur);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResualt();
    };

    const onFormReset = () => {
        const inputElement = document.querySelector(".js-form__inputField");
        const resualts = document.querySelector(".js-form__resualts");

        inputElement.focus();
        resualts.innerText = "";
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    };

    init();
};