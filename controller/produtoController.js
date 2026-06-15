const ProdutoModel = require ("../model/produtoModel")

async function listar (req,res){
    
    try {
        const produtos = await ProdutoModel.listar()
        res.json(produtos)
    }
    catch (erro){
        console.log(erro)
        res.status(500).json({erro: erro.message})
    }
}


async function cadastrar(req,res) {
    try {
        const{nome, preco} = req.body

        await ProdutoModel.cadastrar(nome,preco)

        res.status(201).json({
            mensagem: "Produto cadastrado"
        })
    } catch (erro) {
        console.log(erro)
        res.status(500).json({erro: erro.message})
    }
}

module.exports = {
    listar, cadastrar
}