const listaDeUsuarios = [
	{ name: 'João', credit: 600 },
	{ name: 'Maria', credit: 900 },
	{ name: 'Carlos', credit: 300 },
	{ name: 'Vanessa', credit: 200 },
];

const resultado1 = listaDeUsuarios.every((usuario, index, array) => usuario.credito < 1000)

const resultado2 = listaDeUsuarios.every(usuario => usuario.credito < 500)

console.log(resultado1)

console.log(resultado2)

/* Serve para testarmos se todos os elementos do Array passam em uma condição.
   Foi passado uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true.

   Na primeira lista é testado se todos os usuários possuem crédito menor que 1000. Como todos passaram no teste, o resultado de resultado1 será true.

   Na segunda lista foi testado se todos os usuários possuem crédito menor que 500. Como não são todos que passam nesse teste, o resultado de resultado2 será false.

   


*/