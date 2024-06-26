import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota Livros",
    "/autores": "Entrei na rota dos Autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor escutando! em http://localhost:3000");
});
