const makeEspresso = () => {
    console.group("☕️ Готовим эспрессо:");
    const espresso = "[зерна (обжаренные) (молотые) + вода (горячая)]"
    console.log(espresso);
    console.groupEnd();
    console.log("☕️ Эспрессо готов!");
    return espresso
}
const makeAmericano = () => {
    console.group("☕️ 💧 Готовим американо:");
    const americano = `${makeEspresso()} + вода (горячая)`
    console.log(americano);
    console.groupEnd();
    console.log("☕️ 💧 Американо готов!");
}

const makeLatte = () => {
    console.group("☕️ 🥛 Готовим латте:");
    const latter = `${makeEspresso()} + молоко`
    console.log(latter);
    console.groupEnd();
    console.log("☕️ 🥛 Латте готов!");
}


const makeTea = () => {
    console.group("🍵 Готовим чай:");
    const tea = "[листовой чай + вода (горячая)]"
    console.log(tea);
    console.groupEnd();
    console.log("🍵 Чай готов!");
}

makeAmericano()
console.log("=====");
makeLatte()
console.log("=====");
makeTea()
