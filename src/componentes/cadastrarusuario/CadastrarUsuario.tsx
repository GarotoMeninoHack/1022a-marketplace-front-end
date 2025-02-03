import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroUsuario() {
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [funcao, setFuncao] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const [email, setEmail] = useState("")

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei cadastrar usuario");
        const usuario = {
            id: id,
            nome: nome,
            funcao: funcao,
            foto: foto,
            email: email
        }
        fetch("https://one022a-marketplace-yvb4.onrender.com/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        }).then(response => {
            if (response.status === 200) {
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            }
            else {
                alert("Erro ao cadastrar usuario")
            }
        })
    }
    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value)
    }
    function handleFuncao(event: ChangeEvent<HTMLInputElement>) {
        setFuncao(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }
    function handleFoto(event: ChangeEvent<HTMLInputElement>) {
        setFoto(event.target.value)
    }

    return (
        <>
            <main className="container">
                <h1>Tela Cadastro Usuários</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">ID</label>
                        <input type="text" name="id" onChange={handleId} />
                    </div>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="funcao">Função</label>
                        <input type="text" name="funcao" onChange={handleFuncao} />
                    </div>
                    <div>
                        <label htmlFor="foto">Foto</label>
                        <input type="text" name="foto" onChange={handleFoto} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={handleEmail} />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </main>

        </>
    )
}