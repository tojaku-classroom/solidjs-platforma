import { mergeProps } from "solid-js";

export default function Spread(props) {
    const def = { first: "A", second: "B", third: "C" };
    const validated = mergeProps(def, props);

    return (
        <p>
            Ovo je komponenta koja prima ulazne parametre.<br />
            Prvi je {validated.first}.<br />
            Drugi je {validated.second}, a treći {validated.third}.
        </p>
    );
}