import Spread from "./Spread";

export default function TestSpread() {
    const inObject = {
        third: "Slavko",
        first: "Josip",
        second: undefined,
    }

    return (
        <>
            <Spread first="Pero" second="Ivo" third="Mate" />
            <Spread first={inObject.first}
                second={inObject.second}
                third={inObject.third} />
            <Spread {...inObject}/>
        </>
    );
}