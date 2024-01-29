// Error = Um objeto que é criado para representar algum problema ocorrido.
//         Bem frequente de ocorrer com inputs de usuários e tentativas de conexões. Quando ocorrem, travam o fluxo do programa, e por isso precisam ser manipulados(handled).

// try { } = Encapsula um trecho de código que pode gerar algum erro;
// catch { } = Captura e manuseia qualquer erro gerado pelo bloco try{};
// finally { } = (Opcional) Sempre executa. Usado mais para limpezas. Ex.: Fechar arquivos, fechar conexões e lançar recursos.

// EXEMPLO 1

// Sem tratamento de erro
//console.lag("Testando 1");
//console.log("Testando 2");


// Com tratamento de erro
try {
    // ERROS DE CONEXÃO
    // REJEIÇÕES DE PROMESSAS
    // ERROS DE SEGURANÇA
    console.lag("Testando 3");
} catch (error) {
    // Vai mostrar mais claramente que um erro ocorreu, mesmo que ele tenha sido devidamente tratado
    console.error(error);
} finally{
    // FECHAR ARQUIVOS
    // FECHAR CONEXÕES
    // LANÇAR RECURSOS
    console.log("Testando 3.5");
}

console.log("Testando 4");


// EXEMPLO 2

try {
    const dividendo = Number(window.prompt("Digite um dividendo: "));
    const divisor = Number(window.prompt("Digite um divisor: "));

    if(divisor == 0){
        // Para criar um erro personalizado
        throw new Error("Você não pode dividir por zero!");
    }

    if(isNaN(dividendo) || isNaN(divisor)){
        throw new Error("Valores precisam ser números!");
    }

    const resultado = dividendo / divisor;
    console.log(resultado);
} catch (error) {  
    console.error(error);
}

console.log("Você chegou ao final do programa!");