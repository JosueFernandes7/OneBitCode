import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
function LoginForm() {
    const username = useForm();
    const password = useForm();

    function handleSubmit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            const fetchData = async () => {
                const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(),
                    }
                );
                const json = await response.json();
            };
            fetchData();
        }
    }
    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
}

export default LoginForm;
