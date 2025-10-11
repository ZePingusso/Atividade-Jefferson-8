const banco = {
    usuario: [
        {nome: "Pedro", idade: 21},
        {nome: "Zé Pinga", idade: 92}
    ],
    produtos: [
        {nome: "Mouse", valor: 21.00},
        {nome: "Teclado", valor: 100.00},
        {nome: "Monitor", valor: 1000.00}
    ]
}
console.log(Array.isArray(banco["usuario"]))