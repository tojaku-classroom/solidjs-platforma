import { createSignal, For } from "solid-js";

export default function Cats() {
    const [cats, setCats] = createSignal([
        { id: '3URtTIdnXIk', name: 'Funny Cats' },
        { id: '2BiUsiIsI2c', name: 'Sleepy Cats' },
        { id: '4dDt5OxKR2M', name: 'Playful Cats' }
    ]);

    return (
        <ul>
            <For each={cats()}>
                {
                    (cat, i) => (
                        <li>
                            <a href={`https://www.youtube.com/watch?v=${cat.id}`} target='_blank'>
                                {i() + 1}. {cat.name}
                            </a>
                        </li>
                    )
                }
            </For>
        </ul>
    );
}