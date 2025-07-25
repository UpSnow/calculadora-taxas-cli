import chalk from "chalk";

const PromptSchemaQRCode =[
    {
        name: "link",
        description: chalk.blue.bold("digite o link para gerar o QR-Code")
    },

    {
        name:"type",
        description: chalk.blue.bold("Escolha ente o tipo de QR-Code (1-Normal ou (2-Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Escolha apenas entre 1 e 2"),
        required: true
    }
]


export default PromptSchemaQRCode