import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarUsuario() {
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://one022a-marketplace-yvb4.onrender.com/usuarios/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setFuncao(dados.descricao)
                setNome(dados.nome)
                setFoto(dados.imagem)
                setEmail(dados.email)
            })
    }, [])
    const navigate = useNavigate();
    const [funcao, setFuncao] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const [email, setEmail] = useState("")

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei cadastrar usuarios");
        const usuario = {
            nome: nome,
            funcao: funcao,
            foto: foto,
            email: email
        }
        fetch(`https://one022a-marketplace-yvb4.onrender.com/usuarios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        }).then(response => {
            if (response.status === 200) {
                alert("Usuário alterado com sucesso")
                navigate("/")
            }
            else {
                alert("Erro ao alterar usuário")
            }
        })
    }
    function handleFuncao(event: ChangeEvent<HTMLInputElement>) {
        setFuncao(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleFoto(event: ChangeEvent<HTMLInputElement>) {
        setFoto(event.target.value)
    }
    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    return (
        <>
            <main>
                <div>Alterar Usuário {id}</div>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">id</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" value={nome} onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="funcao">Função</label>
                        <input type="text" name="funcao" value={funcao} onChange={handleFuncao} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="funcao" value={email} onChange={handleEmail} />
                    </div>
                    <div>
                        <label htmlFor="foto">Foto</label>
                        <input type="text" name="imagem" value={foto} onChange={handleFoto} />
                        {foto && <img className="imagem-previa-upload" src={foto} />}
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarUsuario;