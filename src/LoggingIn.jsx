import { createSignal, Show } from "solid-js"

export default function LoggingIn() {
    const [loggedIn, setLoggedIn] = createSignal(false);
    const toggle = () => setLoggedIn(!loggedIn());

    return (
        <>
            <Show when={loggedIn()}>
                <button onClick={toggle}>Odjavi me</button>
            </Show>

            <Show when={!loggedIn()}>
                <button onClick={toggle}>Prijavi me</button>
            </Show>

            <h2>Drugi način</h2>

            <Show when={loggedIn()}
                fallback={<button onClick={toggle}>Prijavi me</button>}>
                <button onClick={toggle}>Odjavi me</button>
            </Show>
        </>
    )
}
