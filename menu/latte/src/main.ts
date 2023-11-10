import {espresso} from "@onyx/espresso";

const makeLatte = () => {
  console.group("☕️ 🥛 Готовим латте:");
  const latte = `${espresso()} + молоко`
  console.log(latte);
  console.groupEnd();
  console.log("☕️ 🥛 Латте готов!");
}

makeLatte()
