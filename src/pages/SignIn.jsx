export default function SignIn() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get("email");
        const password = data.get("password");
        console.log("Primljeno", email, password);

    };

    return (
        <>
            <h1 class="text-2xl uppercase tracking-wider mb-2 w-full text-center">Prijava korisnika</h1>
            <form class="max-w-2xl m-auto" onSubmit={handleSubmit}>
                <label class="floating-label mb-1 w-full">
                    <input class="input input-md w-full" type="email" name="email" placeholder="E-mail adresa" />
                    <span>E-mail adresa</span>
                </label>

                <label class="floating-label mb-1">
                    <input class="input input-md w-full" type="password" name="password" placeholder="Zaporka" />
                    <span>Zaporka</span>
                </label>

                <button type="submit" class="btn btn-primary">Potvrdi</button>
            </form>
        </>
    );
}