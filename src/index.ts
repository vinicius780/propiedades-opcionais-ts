function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined) {
        return `Olá ${usuario.nome} Você está bem ? você tem ${usuario.idade} anos`
    } else {
        return `Olá ${usuario.nome} você está bem ?`
    }
   
}

let u = {
    nome: 'vinicius',
    idade: 24
}
resumo(u)
