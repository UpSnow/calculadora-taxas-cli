import chalk from "chalk"

const PromptSchemaMain= [{

    name : "select",
    description: chalk.blue.bold("Escolha a ferramenta (1 - QRCODE, (2- PASSWORD  ou (3-CALCULAR TAXA"),
    pattern: /^[123]+$/,
    message: chalk.red.bold("Escolha apenas entre 1, 2 ou 3"),
    require: true,
}
]

export default PromptSchemaMain