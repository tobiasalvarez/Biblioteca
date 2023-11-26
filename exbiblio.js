class EntidadeBibliografica {
    constructor(){
        this.acervo = [];
        this.usuarios = [];
    }
    
    carregarAcervo(acervo){
        
    }

    cadastrarLivro(livro) {
        this.acervo.push(livro);
    }

    emprestar(codigo, usuario) {
        const livro = this.acervo.find(livro => livro.codigo === codigo);

        if(!livro) {
            console.log("Livro nao encontrado.");
        }else{
            livro.emprestado = true;
            livro.usuarioEmprestismo = usuario;
            console.log("Livro emprestado com sucesso.")
        }
    }

    devolver(codigo){
        const livro = this.acervo.find(livro => livro.codigo === codigo);
        if(!livro){
            console.log("Livro nao encontrado.")
        }else{
            livro.emprestado = false;
            livro.usuarioEmprestismo = null;
            console.log("Livro devolvido com sucesso.")
        }
    }
}

class Usuario{
    constructor(nome, registroAcademico, dataNascimento){
        this.nome = nome;
        this.registroAcademico = registroAcademico;
        this.dataNascimento = dataNascimento;
    }
}

const generoLivro ={
    acao : "Acao",
    suspense : "Suspense",
    comedia : "Comedia"
}

class Livro extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, genero) {
        super()
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.codigo = codigo;
        this.genero = genero;
    }
    getGenero(){
        console.log(`Titulo do livro: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de publicação: ${this.anoPublicacao}`);
        console.log(`Código: ${this.codigo}`);
        console.log(`Gênero: ${this.genero}`);
    }
}

class Revista extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo) {
        super();
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.codigo = codigo;
    }
    getGenero(){
        console.log(`Titulo da revista: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de publicação: ${this.anoPublicacao}`);
        console.log(`Código: ${this.codigo}`);
    }
}

const livro1 = new Livro("O Senhor dos Anéis", "J. R. R. Tolkien", 1954, 123, generoLivro.acao);
const usuario1 = new Usuario("João", 123456, "01/01/2000");
const entidad1 = new EntidadeBibliografica();

