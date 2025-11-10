export default function SignUp() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const passwordConfirm = data.get("passwordConfirm");
        console.log("Primljeno", name, email, password, passwordConfirm);

    };

    return (
        <>
            <h1 class="text-2xl uppercase tracking-wider mb-2 w-full text-center">Registracija korisnika</h1>
            <form class="max-w-2xl m-auto" onSubmit={handleSubmit}>
                <label class="floating-label mb-1 w-full">
                    <input class="input input-md w-full" type="text" name="name" placeholder="Ime" />
                    <span>Ime</span>
                </label>

                <label class="floating-label mb-1 w-full">
                    <input class="input input-md w-full" type="email" name="email" placeholder="E-mail adresa" />
                    <span>E-mail adresa</span>
                </label>

                <label class="floating-label mb-1">
                    <input class="input input-md w-full" type="password" name="password" placeholder="Zaporka" />
                    <span>Zaporka</span>
                </label>

                <label class="floating-label mb-1">
                    <input class="input input-md w-full" type="password" name="passwordConfirm" placeholder="Potvrda zaporke" />
                    <span>Potvrda zaporke</span>
                </label>

                <button type="submit" class="btn btn-primary">Potvrdi</button>
            </form>
        </>
    );
}