import Spread from "./Spread";

export default function TestSpread() {
    const inObject = {
        first: "Pero",
        second: "Ivo",
        third: "Mate"
    }

    return (
        <>
            <Spread first="Ja sam prvi"
                second="Drugi"
                third="Bok" />
            <Spread first={inObject.first}
                second={inObject.second}
                third={inObject.third} />
            <Spread {...inObject} />
            <Spread />
        </>
    )
}