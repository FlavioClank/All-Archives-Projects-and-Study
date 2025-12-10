

const factoryFunction = (name) => {
    return {
        logou: () => alert(`o usuário ${name} logou`),
        deslogou: () => alert(`o usuário ${name} deslogou`)
    }
}

factoryFunction("paulo").deslogou();