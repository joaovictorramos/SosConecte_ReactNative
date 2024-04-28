export const brazillianState = (uf) => {
    switch(uf.toString()){
        case '11':
            return "RONDÔNIA"
        case '12':
            return "ACRE"
        case '13':
            return "AMAZONAS"
        case '14':
            return "RORAIMA"
        case '15':
            return "PARÁ"
        case '16':
            return "AMAPÁ"
        case '17':
            return "TOCANTIS"
        case '21':
            return "MARANHÃO"
        case '22':
            return "PIAUÍ"
        case '23':
            return "CEARÁ"
        case '24':
            return "RIO GRANDE DO NORTE"
        case '25':
            return "PARAÍBA"
        case '26':
            return "PERNAMBUCO"
        case '27':
            return "ALAGOAS"
        case '28':
            return "SERGIPE"
        case '29':
            return "BAHIA"
        case '31':
            return "MINAS GERAIS"
        case '32':
            return "ESPÍRITO SANTO"
        case '33':
            return "RIO DE JANEIRO"
        case '35':
            return "SÃO PAULO"
        case '41':
            return "PARANÁ"
        case '42':
            return "SANTA CATARINA"
        case '43':
            return "RIO GRANDE DO SUL"
        case '50':
            return "MATO GROSSO DO SUL"
        case '51':
            return "MATO GROSSO"
        case '52':
            return "GOIÁS"
        case '53':
            return "DISTRITO FEDERAL"
        default:
            return ""
    }
}

export const shiftEntity = (shift) => {
    switch(shift){
        case "ATENDIMENTO SOMENTE PELA MANHÃ":
            return "SOMENTE MANHÃ"
        case "ATENDIMENTO SOMENTE A TARDE":
            return "SOMENTE TARDE"
        case "ATENDIMENTO SOMENTE O NOITE":
            return "SOMENTE NOITE"
        case "ATENDIMENTOS NOS TURNOS DA MANHA E A TARDE":
            return "MANHÃ E TARDE"
        case "ATENDIMENTO NOS TURNOS DA MANHA, TARDE E NOITE":
            return "MANHÃ, TARDE E NOITE"
        case "ATENDIMENTO CONTINUO DE 24 HORAS/DIA (PLANTAO:INCLUI SABADOS, DOMINGOS E FERIADOS)":
            return "24 HORAS"
        case "ATENDIMENTO COM TURNOS INTERMITENTES":
            return "TURNOS INTERMITENTES"
        default:
            return ""
    }
}