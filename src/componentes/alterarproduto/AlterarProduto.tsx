import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarProduto() {
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://one022a-marketplace-yvb4.onrender.com/produtos/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setDescricao(dados.descricao)
                setNome(dados.nome)
                setImagem(dados.imagem)
            })
    }, [])
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("")
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")

    function handleForm(event: FormEvent) {
        event.preventDefault();
        console.log("Tentei cadastrar produtos");
        const produto = {
            nome: nome,
            descricao: descricao,
            imagem: imagem
        }
        fetch(`https://one022a-marketplace-yvb4.onrender.com/produtos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        }).then(response => {
            if (response.status === 200) {
                alert("Produto alterado com sucesso")
                navigate("/")
            }
            else {
                alert("Erro ao alterar produto")
            }
        })
    }
    function handleDescricao(event: ChangeEvent<HTMLInputElement>) {
        setDescricao(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value)
    }

    return (
        <>
            <main>
                <div>Alterar Produto {id}</div>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">id</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="nome">nome</label>
                        <input type="text" name="nome" value={nome} onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="descricao">descricao</label>
                        <input type="text" name="descricao" value={descricao} onChange={handleDescricao} />
                    </div>
                    <div>
                        <label htmlFor="imagem">imagem</label>
                        <input type="text" name="imagem" value={imagem} onChange={handleImagem} />
                        {imagem && <img className="imagem-previa-upload" src={imagem} />}
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarProduto;