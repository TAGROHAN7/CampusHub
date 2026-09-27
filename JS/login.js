const supabaseClient =
    window.supabaseClient;


const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();


        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim();


        const password =
            document
                .getElementById("loginPassword")
                .value;


        const {
            data,
            error
        } =
            await supabaseClient
                .auth
                .signInWithPassword({
                    email: email,
                    password: password
                });


        if (error) {

            document
                .getElementById("loginMessage")
                .textContent =
                    error.message;

            return;
        }


        document
            .getElementById("loginMessage")
            .textContent =
                "Login successful!";


        window.location.href =
            "index.html";

    }
);
