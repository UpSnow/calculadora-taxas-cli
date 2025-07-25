import promptsTaxa from "../../prompts-schema/prompt-schema-taxa.js";
import prompt from "prompt";
import handle from "./handle.js";

async function createCalcularTaxa() {
    prompt.get(promptsTaxa,handle);
    prompt.start();



    
}

export default createCalcularTaxa