/*const generoLivro = {
    Ficcao_cientifica: "Ficcao_cientifica.",
    Terror:"Terror",
    Comedia: "Comedia",
    Suspense: "Suspense",
    Drama:"Drama",
    Historia: "Historia",
    Policial: "Policial"
}*/

class Usuario {
    constructor(nome, registroAcademico, DataNascimento) {
        this.nome = nome;
        this.registroAcademico = registroAcademico;
        this.DataNascimento = DataNascimento;
    }
}

class Biblioteca {
    constructor() {
        this.acervo = [];
        this.usuarios = [];
    }

    popularAcervo(acervo) {
        acervo.forEach(item => {
            if (item.EntidadeBibliografica === "Livro") {
                this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.genero));
            } else if(item.EntidadeBibliografica === "Revista") {
                this.acervo.push(new Revista(item.codigo, item.titulo, item.autor, item.anoPublicacao));
            }
        });
        this.acervo = acervo;
    }
    
    adicionarItem(item) {
        this.acervo.push(item);
        console.log("Item adicionado com succeso.");
    }

    listarAcervo() {
        if (this.acervo.length === 0) {
            console.log("Acervo vazio.")
        } else {
            this.acervo.forEach(item => {
                if (item instanceof Livro) {
                    console.log(`Titulo:${item.titulo}`);
                    console.log(`Genero: ${item.genero}`);
                    console.log(`Ano de publicacao:${item.anoPublicacao}`);
                    console.log(`Autor:${item.autor}`);
                    console.log(`Codigo:${item.codigo}`);
                } else {
                    console.log(`Titulo:${item.titulo}`);
                    console.log(`Edicao: ${item.edicao}`);
                    console.log(`Ano de publicacao:${item.anoPublicacao}`);
                    console.log(`Autor:${item.autor}`);
                    console.log(`Codigo:${item.codigo}`);
                }
            });
        }
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log("Usuario adicionado com sucesso.")
    }

    emprestarItem(codigo, registroAcademico) {
        const item = this.acervo.find(item => item.codigo === codigo);
        const user = this.usuarios.find(user => user.registroAcademico === registroAcademico);

        if (item) {
            if (user) {
                item.emprestar(user);
                console.log("Emprestado com sucesso.");
            } else {
                console.log("Usuario nao encontrado.");
            }
        } else {
            console.log("Entidade Bibliografica nao encontrada.");
        }
    }

    devolverItem(codigo) {
        const item = this.acervo.find(item => item.codigo === codigo)
        if (item) {
            item.isEmprestado = false;
            item.usuarioEmprestimo = null;
            console.log("Devolvido com sucesso")
        } else {
            console.log("Item ja disponivel")
        }
    }
}

class EntidadeBibliografica {
    constructor(codigo, titulo, autor, anoPublicacao) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.isEmprestado = false;
        this.usuarioEmprestimo = null;
    }

    emprestar(usuario) {
        if (this.isEmprestado == false) {
            this.isEmprestado = true;
            this.usuarioEmprestimo = usuario;
        } else {
            console.log("Entidade Bibliografica ja emprestada.")
        }
    }

    devolver() {
        if (this.isEmprestado == false) {
            console.log("Entidade Bibliografica ja devolvida.")
        } else {
            this.isEmprestado == false;
            this.usuarioEmprestimo == null;
        }
    }
}

class Livro extends EntidadeBibliografica {
    constructor(codigo, titulo, autor, anoPublicacao, genero) {
        super(codigo, titulo, autor, anoPublicacao);
        this.genero = genero;
    }

    informacoes() {
        console.log(`Codigo:${this.codigo}, Titulo:${this.titulo}, Autor:${this.autor}, Ano de Publicacao:${this.anoPublicacao}, Genero:${this.genero}`);
    }
}

class Revista extends EntidadeBibliografica {
    constructor(codigo, titulo, autor, anoPublicacao, edicao) {
        super(codigo, titulo, autor, anoPublicacao);
        this.edicao = edicao;
    }

    informacoes() {
        console.log(`Codigo:${this.codigo}, Titulo:${this.titulo}, Autor:${this.autor}, Ano de Publicacao:${this.anoPublicacao}, Edicao:${this.edicao}`);
    }
}


