import prompt from "prompt";

import chalk from "chalk";

import PromptSchemaMain from "./prompts-schema/prompt-schema-main.js"

import createQRCode from "./services/qr-code/create.js";

import createPassword from "./services/password/create.js";


import calcularTaxa from "./services/taxa/create.js";

async function main() {

    prompt.get(PromptSchemaMain, async (err, choose) => {

        if(err){
            console.log(err)
        }
        else if(choose.select == 1){
            await createQRCode();
        }
        else if(choose.select == 2){
            await createPassword();
        }
        else if(choose.select == 3){
            await calcularTaxa();
        }
        prompt.start;
    } )
    
};

main();