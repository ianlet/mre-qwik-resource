import {component$, Resource, useResource$, useSignal} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {sayHello} from "~/edge/say-hello";

export default component$(() => {
  const trackSig = useSignal(0);

  const hello = useResource$(async ({track}) => {
    track(() => trackSig.value);
    return await sayHello();
  })
  
  return (
    <>
      <h1>Hi 👋</h1>
      <div>Want to see a magic trick?</div>
      <div>open the console then click the button</div>
      <button onClick$={() => (trackSig.value++)}>click me</button>
      <br />
      <Resource value={hello} onResolved={(x) => <div>{x.hi}</div>} onRejected={() => <div>error</div>}/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
