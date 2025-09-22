import { createSignal, createEffect } from "solid-js";

export default function HelloWorld() {
    const [sum, setSum] = createSignal(0);

    const doubleSum = () => {
        const temp = sum() * 2;
        return temp;
    };

    const name = 'Pero';
    const code = (
        <div>
            <p>
                Još jednom, dobar dan!
            </p>
            <p>
                Ovo će raditi!
            </p>
        </div>
    );

    setInterval(() => {
        setSum(sum() + 1);
    }, 1000);

    createEffect(() => {
        if (sum() >= 30000) {
            setSum(0);
        }
    });

    return (
        <div>
            Dobar dan, {name}!
            {code}
            <p>
                Brojač: {sum()}
            </p>
            <p>
                Brojač x2: {doubleSum()}
            </p>
        </div>
    );
}