
import PromptSchemaQRCode from "../../prompts-schema/prompt-schema-QRCode.js";
import handle from "./handle.js";
import prompt from "prompt";


async function createQRCode() {
    prompt.get(PromptSchemaQRCode,handle)
    prompt.start();
}

export default createQRCode



