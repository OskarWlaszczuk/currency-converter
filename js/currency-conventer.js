{
    const welcome = () => console.log("Dzień dobry!");

    const onFormElementSubmit = (even) => {
        even.preventDefault()

        const inputElemnet = document.querySelector(".js-pln__input");
        const resualtElement = document.querySelector(".js-form__strong");
        const euroElement = document.querySelector(".js-radioEuro__input");
        const usdElement = document.querySelector(".js-radioUsd__input");
        const cadElement = document.querySelector(".js-radioCad__input");
        const gbpElement = document.querySelector(".js-radioGbp__input");

        const pln = inputElemnet.value;
        const euro = `${pln}` * 0.23;
        const usd = `${pln}` * 0.25;
        const cad = `${pln}` * 0.34;
        const gbp = `${pln}` * 0.20;

        if (euroElement.checked === true) {
            resualtElement.innerText = (`${pln} złotych to w przeliczeniu ${euro.toFixed(2)} euro`);
        } else if (usdElement.checked === true) {
            resualtElement.innerText = (`${pln} złotych to w przeliczeniu ${usd.toFixed(2)} dolarów amerykańskich`);
        } else if (cadElement.checked === true) {
            resualtElement.innerText = (`${pln} złotych to w przeliczeniu ${cad.toFixed(2)} dolarów kanadyjskich`);
        } else if (gbpElement.checked === true) {
            resualtElement.innerText = (`${pln} złotych to w przeliczeniu ${gbp.toFixed(2)} funtów brytyjskich`);
        }
    }

    const initCurrencyConverter = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormElementSubmit)

        welcome();
    }


    initCurrencyConverter();
}