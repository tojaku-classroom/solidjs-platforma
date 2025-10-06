import { onMount, onCleanup, createEffect, createSignal } from "solid-js";

export default function Lifecycle() {

    const [x, setX] = createSignal(0);

    onMount(() => {
        console.log("Rođen sam...");
    });

    onCleanup(() => {
        console.log("Umirem...");
    });

    createEffect(() => {
        console.log(`Vrijednost od x je ${x()}`);
    });

    return (
        <>
            <p>Ovo je glavni dio komponente koji se prikazuje.</p>
            <button onClick={() => setX(x() + 1)}>Stisni me</button>
        </>
    );

}