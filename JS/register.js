const supabaseClient =
    window.supabaseClient;


const registerForm =
    document.getElementById("registerForm");


registerForm.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const password =
            document
                .getElementById("password")
                .value;


        const {
            data,
            error
        } =
            await supabaseClient
                .auth
                .signUp({
                    email: email,
                    password: password
                });


        if (error) {

            alert(
                error.message
            );

            return;
        }


        alert(
            "Registration successful!"
        );


        window.location.href =
            "login.html";

    }
);
