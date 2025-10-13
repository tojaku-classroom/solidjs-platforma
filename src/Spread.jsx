import { mergeProps } from "solid-js";

export default function Spread(props) {
    const defaults = { first: "A", second: "B", third: "C"};
    const validated = mergeProps(defaults, props);

    return (
        <p>
            Ovo je komponenta koja prima ulazne parametre.<br />
            Prvi je {validated.first}.<br />
            Drugi je {validated.second}, a treći {validated.third}.
        </p>
    );
    
}