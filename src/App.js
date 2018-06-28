import AES from './aes.js';
//import personalAlg from './personalAlg';
 const cifrar = () => {
    let text = document.getElementById("text").value
    console.log(text);
    //por mientras
    let textInBytes = aes.textToBytes(text);
    console.log("bytes: "+textInBytes);

    let textInHex = aes.hexFromBytes(textInBytes);
    console.log("hex: "+textInHex);


    let originalText = aes.hexToBytes(textInHex);
    originalText = aes.textFromBytes(originalText);
    console.log("original text: "+originalText);
    }
const aes = new AES();
document.getElementById('cipher').addEventListener('click', cifrar);



