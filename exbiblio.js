const generoLivro = {
    FICCAO_CIENTIFICA : "Ficcao_cientifica.",
    TERROR : "Terror.",
    COMEDIA : "Comedia.",
    SUSPENSE : "Suspense.",
    DRAMA : "Drama.",
    HISTORIA : "Historia.",
    POLICIAL : "Policial."
}

class Usuario{
    constructor(nome, registroAcademico, DataNascimento){
        this.nome = nome;
        this.registroAcademico = registroAcademico;
        this.DataNascimento = DataNascimento;
    }
}

class Biblioteca {
    constructor(){
        this.acervo = [];
        this.usuarios = [];
    }

    popularAcervo(acervo){
        acervo.forEach(item=>{
            if(item.EntidadeBibliografica === "livro"){
                this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.genero, item.isEmprestado, item.usuarioEmprestimo));
            }else{
                this.acervo.push(new Livro(item.codigo, item.titulo, item.autor, item.anoPublicacao, item.edicao, item.isEmprestado, item.usuarioEmprestimo));
            }
        });
    }

    adicionarItem(item){
        this.acervo.push(item);
        console.log("Item adicionado com succeso.");
    }

    listarAcervo(){
        if(this.acervo == []){
            console.log("Acervo vazio.")
        }else{
            this.acervo.forEach(item => {
                console.log(item)
            })
        }
    }

    adicionarUsuario(usuario){
        this.usuarios.push(usuario);
        console.log("Usuario adicionado com sucesso.")
    }

    emprestarItem(codigo, registroAcademico){
        const item = this.acervo.find(item => item.codigo === codigo);
        const user = this.usuarios.find(user => user.registroAcademico === registroAcademico);

        if(item){
            if(user){
                item.emprestar(usuario);
                console.log("Emprestado com sucesso.");
            }else{
                console.log("Usuario nao encontrado.");
            }
        }else{
            console.log("Entidade Bibliografica nao encontrada.");
        }
    }

    devolverItem(codigo){
        const item = this.acervo.find(item => item.codigo === codigo)
        if(item){
            item.isEmprestado = false;
            item.usuarioEmprestimo = null;
            console.log("Devolvido com sucesso")
        }else{
            console.log("Item ja disponivel")
        }
    }
}

class EntidadeBibliografica{
    constructor(codigo, titulo, autor, anoPublicacao){
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.isEmprestado = false;
        this.usuarioEmprestimo = null;
    }

    emprestar(usuario){
        if(this.isEmprestado == false){
            this.isEmprestado = true;
            this.usuarioEmprestimo = usuario;
        }else{
            console.log("Entidade Bibliografica ja emprestada.")
        }
    }

    devolver(){
        if(this.isEmprestado == false){
            console.log("Entidade Bibliografica ja devolvida.")
        }else{
            this.isEmprestado == false;
            this.usuarioEmprestimo == null;
        }
    }
}

class Livro extends EntidadeBibliografica{
    constructor(codigo, titulo, autor, anoPublicacao, genero){
        super(codigo, titulo, autor, anoPublicacao);
        this.genero = genero;
    }

    informacoes(){
        console.log(`Codigo:${this.codigo}, Titulo:${this.titulo}, Autor:${this.autor}, Ano de Publicacao:${this.anoPublicacao}, Genero:${this.genero}`);
    }
}

class Revista extends EntidadeBibliografica{
    constructor(codigo, titulo, autor, anoPublicacao, edicao){
        super(codigo, titulo, autor, anoPublicacao, isEmprestado, usuarioEmprestimo);
        this.edicao = edicao;
    }

    informacoes(){
        console.log(`Codigo:${this.codigo}, Titulo:${this.titulo}, Autor:${this.autor}, Ano de Publicacao:${this.anoPublicacao}, Edicao:${this.edicao}`);
    }
}


const biblio = new Biblioteca();
const livro1 = new Livro(1305,"señor de los anillos", "yo", 1980, generoLivro.COMEDIA);
const user1 = new Usuario("tobias",505362,"05/11/2023");
