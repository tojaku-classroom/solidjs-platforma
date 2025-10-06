import { createSignal } from "solid-js";

export default function Events() {
    const [pos, setPos] = createSignal({
        x: 0,
        y: 0
    });

    function handleMouseEvent(event) {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    }

    return (
        <div onMouseMove={handleMouseEvent} style="background-color: fuchsia; width: 500px; height: 500px;">
            Miš se nalazi na poziciji {pos().x} i {pos().y}
        </div>
    );

}