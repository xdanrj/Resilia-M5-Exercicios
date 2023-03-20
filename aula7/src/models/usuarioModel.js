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
    }
    }


export default UsuarioModel