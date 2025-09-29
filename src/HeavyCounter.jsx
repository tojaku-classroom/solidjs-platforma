import { createSignal, createMemo } from "solid-js";

export default function HeavyCounter() {
    const [count, setCount] = createSignal(10);
    const fib = createMemo(() => {
        console.log("Izračunavam...");
        return fibonacci(count());
    });

    return (
        <>
            <button onClick={() => setCount(count() + 1)}>Povećaj</button>
            <div>Trenutno je: {count()}</div>
            <div>1. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>2. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>3. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>4. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>5. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>6. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>7. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>8. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>9. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            <div>10. {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()} {fib()}</div>
        </>
    );

}

function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}