class Cliente {
    nome;
    cpf;
    rg;
};

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Hector";
cliente1.cpf = 37328999888;
cliente1.rg = 987654321;

const cliente2 = new Cliente();
cliente2.nome = "Sabrina";
cliente2.cpf = 11133388809;

// console.log(cliente1);
// console.log(cliente2);

const contaCorrenteHector = new ContaCorrente;
contaCorrenteHector.agencia = 1001;
contaCorrenteHector.depositar(-100);
contaCorrenteHector.depositar(300);
contaCorrenteHector.depositar(200);

const valorSacado = contaCorrenteHector.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteHector);