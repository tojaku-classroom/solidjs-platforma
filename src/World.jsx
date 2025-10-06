import Lifecycle from "./Lifecycle";
import { createSignal, Show } from "solid-js";

export default function World() {
    const [on, setOn] = createSignal(false);

    return (
        <>
            <button onClick={() => setOn(!on())}>Pokaži/sakrij komponentu</button>
            <Show when={on()}>
                <Lifecycle />
            </Show>
        </>
    );

}