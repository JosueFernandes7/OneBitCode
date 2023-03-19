import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <section>
            <h1>Login</h1>
            <form>
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
