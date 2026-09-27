const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document
            .getElementById("registerName")
            .value
            .trim();

        const email = document
            .getElementById("registerEmail")
            .value
            .trim();

        const password = document
            .getElementById("registerPassword")
            .value;

        if (!name || !email || !password) {
            alert("Please fill all fields.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (!window.supabaseClient) {
            alert("Supabase is not connected.");
            return;
        }

        const { data, error } =
            await window.supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name
                    }
                }
            });

        if (error) {
            alert("Registration failed: " + error.message);
            return;
        }

        if (data.user) {

            alert("Registration successful!");

            window.location.href = "login.html";

        }

    });

}
