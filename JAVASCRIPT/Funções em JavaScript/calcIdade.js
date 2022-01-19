function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 ={
    nome: "Maria",
    idade: 30,
};
const pessoa2 ={
    nome: "Carla",
    idade: 26,
};
const animal ={
    nome: "Cori",
    idade: 16,
    raça: "Pug",
};
console.log(calculaIdade.call(pessoa1, 40));
console.log(calculaIdade.apply(pessoa2, [24]));
