import {groundCoffee} from "@onyx/ground-coffee";
import {water} from "@onyx/water";

export function espresso(): string {
  console.group("☕️ Готовим эспрессо:");
  const espresso = `[${groundCoffee()} + ${water()}]`
  console.log(espresso);
  console.groupEnd();
  console.log("☕️ Эспрессо готов!");
  return espresso
}
