let formElement = document.querySelector(".js-form");
let inputFieldElement = document.querySelector(".js-form__inputField");
let selectElement = document.querySelector(".js-form__select");
let resualts = document.querySelector(".js-form__resualts");

let usdOption = document.querySelector(".js-form__usd").value;
let gbpOption = document.querySelector(".js-form__gbp").value;
let chfOption = document.querySelector(".js-form__chf").value;
let eurOption = document.querySelector(".js-form__eur").value;

formElement.addEventListener("input", () => {
    let pln = inputFieldElement.value;
    let currency = selectElement.value;

    let usd = pln * 0.24;
    let gbp = pln * 0.20;
    let chf = pln * 0.22;
    let eur = pln * 0.23;

    switch (currency) {
        case usdOption:
            resualts.innerText = `${pln} zł = ${usd.toFixed(2)} $`;
            break;

        case gbpOption:
            resualts.innerText = `${pln} zł = ${gbp.toFixed(2)} GBP`;
            break;

        case chfOption:
            resualts.innerText = `${pln} zł = ${chf.toFixed(2)} CHF`;
            break;

        case eurOption:
            resualts.innerText = `${pln} zł = ${eur.toFixed(2)} € `;
            break;
    };
});

formElement.addEventListener("reset", () => {
    inputFieldElement.focus();
    resualts.innerText = "";
});