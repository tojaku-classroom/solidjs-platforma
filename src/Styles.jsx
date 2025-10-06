import { createSignal } from "solid-js";

export default function Styles() {
    const [num, setNum] = createSignal(0);

    setInterval(() => {
        setNum((num() + 1) % 255);
    }, 30);

    return(
        <div style={{
            color: `rgb(${num()}, 250, ${num()})`,
            "font-weight": 800,
            "font-size": `${num()}px`
        }}>
            Možete na odmor
        </div>
    );
}