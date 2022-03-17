
const generateID =()=>{
    return `${Math.floor(1000 + Math.random() * 4000)}-${generateAlphabet()}${generateAlphabet()}${generateAlphabet()}`;
}


const generateAlphabet = ()=>{
    return String.fromCharCode(65+((Math.floor(10 + Math.random() * 100) - 1) % 26));
}

const generateIDRSVP =()=>{
    return `${generateAlphabet()}${generateAlphabet()}${generateAlphabet()}_${Math.floor(4000 + Math.random() * 9000)}`;
}

const generateIDArriving=()=>{
    return `${generateAlphabet()}${generateAlphabet()}${generateAlphabet()}_${Math.floor(10000 + Math.random() * 15000)}`;
}


module.exports = {generateID,generateIDRSVP,generateIDArriving};