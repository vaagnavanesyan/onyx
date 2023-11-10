import {teaLeaves} from "@onyx/tea-leaves";
import {water} from "@onyx/water";

const makeTea = () => {
  console.group("🍵 Готовим чай:");
  const tea = `[${teaLeaves()} + ${water()}]`
  console.log(tea);
  console.groupEnd();
  console.log("🍵 Чай готов!");
}

makeTea()
