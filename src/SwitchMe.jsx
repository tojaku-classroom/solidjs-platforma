import { createSignal, Switch, Match } from "solid-js";

export default function SwitchMe() {
    const [x, setX] = createSignal(0);

    return (
        <>
            <button onClick={() => setX(x() + 1)}>Povećaj</button>
            <Switch fallback={<p>{x()} je između 5 i 10</p>}>
                <Match when={x() > 10}>
                    <p>{x()} je veći od 10</p>
                </Match>
                <Match when={x() < 5}>
                    <p>{x()} je manji od 5</p>
                </Match>
            </Switch>
        </>
    );
}