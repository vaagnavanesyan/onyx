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

makeAmericano()
