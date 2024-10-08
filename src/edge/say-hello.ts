import {server$} from "@builder.io/qwik-city";
import {authenticated} from "~/routes/plugin@protected";

export const sayHello = server$(() => {
  return { hi: "Hello World" };
}, authenticated())