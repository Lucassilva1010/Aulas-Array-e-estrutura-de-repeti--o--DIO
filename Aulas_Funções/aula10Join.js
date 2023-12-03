const nomes = [{ nome: 'Antonella' }, { nome: 'Lucas' }, { nome: 'Anastacia' }, { nome: 'Victor' }, { nome: 'Arlina' }]


const teste = nomes.map((elemento => elemento.nome))
    .filter((elemento) => elemento.startsWith('A'))
    .join('- ')

console.log(teste)