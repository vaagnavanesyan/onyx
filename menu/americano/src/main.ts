import {espresso} from "@onyx/espresso";
import {water} from "@onyx/water";

const makeAmericano = () => {
  console.group("☕️ 💧 Готовим американо:");
  const americano = `${espresso()} + ${water()}`
  console.log(americano);
  console.groupEnd();
  console.log("☕️ 💧 Американо готов!");
}

makeAmericano()
