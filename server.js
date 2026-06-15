// const express = require ("express")

// const app = express()

// app.use(express.json())

// const produtos = []

// app.get("/inicio", (req, res)=>{
//     res.send("Hello, World!")
// }) // retornar algo

// app.post("/produtos",(req,res)=>{
//     const {nome, preco} = req.body

//     const produto = {
//         nome, 
//         preco
//     }

//     produtos.push(produto)

//     res.status(201).json({mensagem: "Produto cadastrado com sucesso!"})
// })

// app.get("/produtos", (req, res)=>{
//     res.json(produtos)
// })

// app.listen(3001, ()=>{
//     console.log("Servidor rodando...")
// })


const express = require ("express")
const database = require("./config/database")
const routes = require("./routes/produtoRoutes")

const app = express()

app.use(express.json())

app.use(routes)

const produtos = []

app.listen(3001, ()=>{
    console.log("Servidor rodando...")
})



