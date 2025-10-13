import { createSignal } from "solid-js";

export default function CondStyles() {
    let mainButton;

    const [current, setCurrent] = createSignal(null);

    return (
        <>
            <button ref={mainButton} classList={{ selected: current() === "first" }}
                onClick={() => setCurrent("first")}>Prvi</button>

            <button classList={{ selected: current() === "second" }}
                onClick={() => setCurrent("second")}>Drugi</button>

            <button classList={{ selected: current() === "third" }}
                onClick={() => setCurrent("third")}>Treći</button>

            <button onClick={() => {
                mainButton.style.fontSize = "5em";
                mainButton.textContent = "Ja sam glavni";
            }}>Klikni me</button>
        </>
    );
}