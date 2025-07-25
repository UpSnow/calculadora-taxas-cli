
const promptsTaxa = [

    {
        name: "valor",
        description: "Digite o valor base (ex: 1000):",
        type: "number",
        message: "Digite um valor maior que zero:",
        required: true,
        conform: (value) => value > 0
    },
    {
        name: "percentual",
        description: "Digite o percentual da taxa (ex: 5):",
        type: "number",
        message: "Digite um valor maior que zero:",
        required: true,
        conform: (value) => value >= 0
    }
] 

export default promptsTaxa