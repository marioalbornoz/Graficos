// funciones 

const ubicarArea = (motivo)=> {
    console.log(motivo);
    switch (motivo) {
        case 'SIN_SALDO':
            return `ANALISIS`;
    
        default:
            break;
    }
}

module.exports = {
    ubicarArea
}