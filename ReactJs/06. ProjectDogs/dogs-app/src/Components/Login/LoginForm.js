import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const fetchData = async () => {
            const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username,password})
            })
            const json = await response.json();
            console.log(json)
        }
        fetchData();
    }
    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) => setUsername(target.value)}
                    value={username}
                />
                <input
                    type="password"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                />
                <button>Entrar</button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
}

export default LoginForm;
