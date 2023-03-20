import bd from "../infra/bd.js"

const UsuarioModel = {
    modelar: (obj) => {
        return {
            
            nome: obj.nome,
            email: obj.email
        }  
    },
    armazenar: (obj) => {
        bd.usuarios.push(obj)
        console.log(bd.usuarios)
        return {
            dados: {msg: "Usuário criado com sucesso"}
        }
    },
    mostrarTodos: () => {
        return {
            dados: {msg: bd.usuarios}
        }
    },
    mostrarUm: (param) => {
        const dados = bd.usuarios.map( (item)  => {
            if (item.email == param) {
                return item
            }
        });
        return {
            dados: {msg: dados}
        }
    },

    deletarUm: (param) => {
        bd.usuarios.splice(param, 1)
    }
    }

export default UsuarioModel