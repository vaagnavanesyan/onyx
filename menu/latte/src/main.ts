const makeEspresso = () => {
  console.group("☕️ Готовим эспрессо:");
  const espresso = "[зерна (обжаренные) (молотые) + вода (горячая)]"
  console.log(espresso);
  console.groupEnd();
  console.log("☕️ Эспрессо готов!");
  return espresso
}

const makeLatte = () => {
  console.group("☕️ 🥛 Готовим латте:");
  const latter = `${makeEspresso()} + молоко`
  console.log(latter);
  console.groupEnd();
  console.log("☕️ 🥛 Латте готов!");
}

makeLatte()
