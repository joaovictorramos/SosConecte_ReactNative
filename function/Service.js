import { brazillianState, shiftEntity, unityType } from './Enumerate.js'

const centroparto       = require('../resource/cnes_estabelecimentos_centrodepartonormal.json')
const centrosaude       = require('../resource/cnes_estabelecimentos_centrodesaude.json')
const farmacia          = require('../resource/cnes_estabelecimentos_farmacia.json')
const homecare          = require('../resource/cnes_estabelecimentos_homecare.json')
const hospitalgeral     = require('../resource/cnes_estabelecimentos_hospitalgeral.json')
const policlinica       = require('../resource/cnes_estabelecimentos_policlinica.json')
const postosaude        = require('../resource/cnes_estabelecimentos_postodesaude.json')
const prontoatendimento = require('../resource/cnes_estabelecimentos_prontoatendimento.json')
const prontosocorro     = require('../resource/cnes_estabelecimentos_prontosocorrogeral.json')


export const findByName = (text, pickers) => {
    let cnesList = []
    cnesList = mappingToJson(text.trim(), cnesList, pickers)

    var cnesJson = JSON.stringify(cnesList)
    return cnesJson
}

export const mappingToJson = (text, cnesList, pickers) => {
    //let type  = pickers[0]
    //let state = pickers[1]
    //let time  = pickers[2]
    let counter = 1

    if(text != null && text != ''){
        if(pickers[0] == '' && pickers[1] == '' && pickers[2] == ''){
            centroparto.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'CENTRO DE PARTO',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            centrosaude.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'CENTRO DE SAÚDE',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            farmacia.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'FARMÁCIA',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            homecare.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'HOME CARE',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            hospitalgeral.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'HOSPITAL GERAL',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            policlinica.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'POLICLÍNICA',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            postosaude.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'POSTO DE SAÚDE',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            prontoatendimento.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'UPA',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            prontosocorro.map(c => {
                if(c.NO_FANTASIA != null){
                    if(c.NO_FANTASIA.includes(text.toUpperCase())){
                        if(counter <= 50){
                            cnesList.push({
                                "key": c.CO_CNES,
                                "name": c.NO_FANTASIA,
                                "unity": 'PRONTO SOCORRO',
                                "state": brazillianState(c.CO_UF),
                                "neighborhood": c.NO_BAIRRO,
                                "address": c.NO_LOGRADOURO,
                                "phone": c.NU_TELEFONE,
                                "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                                "listing": ''
                            })
                        }
                        counter+=1
                    }
                }
            })
            return cnesList
        }
        return filteringToJson(text, cnesList, pickers)
    }
    return cnesList
}

export const filteringToJson = (text, cnesList, pickers) => {
    let type  = pickers[0]
    let state = pickers[1]
    let time  = pickers[2]
    let counter = 1

    for(let c of centroparto){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of centrosaude){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of farmacia){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of homecare){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of hospitalgeral){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of policlinica){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of postosaude){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of prontoatendimento){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }

    for(let c of prontosocorro){
        if(c.NO_FANTASIA != null){
            if(c.NO_FANTASIA.includes(text.toUpperCase())){
                let typeUpperCase  = unityType(c.TP_UNIDADE) 
                let stateUpperCase = brazillianState(c.CO_UF)
                let timeUpperCase  = shiftEntity(c.DS_TURNO_ATENDIMENTO)

                if(type == typeUpperCase && state == stateUpperCase && time == timeUpperCase){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == stateUpperCase && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && time == timeUpperCase && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && time == timeUpperCase && type == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(type == typeUpperCase && state == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(state == stateUpperCase && type == "" && time == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }else if(time == timeUpperCase && type == "" && state == ""){
                    pushData(c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter)
                    counter+=1
                }
            }
        }
    }
    return cnesList
}

export const pushData = (c, cnesList, typeUpperCase, stateUpperCase, timeUpperCase, counter) => {
    if(counter <= 50){
        cnesList.push({
            "key": c.CO_CNES,
            "name": c.NO_FANTASIA,
            "unity": typeUpperCase,
            "state": stateUpperCase,
            "neighborhood": c.NO_BAIRRO,
            "address": c.NO_LOGRADOURO,
            "phone": c.NU_TELEFONE,
            "time": timeUpperCase,
            "listing": ''
        })
    }
}

export const findBySpecificType = (index) => {
    let cnesList = []
    let counter = 1
    
    switch(index.toString()){
        case '0':
            hospitalgeral.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'HOSPITAL GERAL',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Hospital Geral'
                        })
                    }
                    counter+=1
                }
            })
        case '1':
            postosaude.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'POSTO DE SAÚDE',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Posto de Saúde'
                        })
                    }
                    counter+=1
                }
            })
        case '2':
            homecare.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'HOME CARE',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Home Care'
                        })
                    }
                    counter+=1
                }
            })
        case '3':
            farmacia.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'FARMÁCIA',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Farmácia'
                        })
                    }
                    counter+=1
                }
            })
        case '4':
            policlinica.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'POLICLÍNICA',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Policlínica'
                        })
                    }
                    counter+=1
                }
            })
        case '5':
            centrosaude.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'CENTRO DE SAÚDE',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Centro de Saúde'
                        })
                    }
                    counter+=1
                }
            })
        case '6':
            prontoatendimento.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'UPA',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'UPA'
                        })
                    }
                    counter+=1
                }
            })
        case '7':
            prontosocorro.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'PRONTO SOCORRO GERAL',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Pronto Socorro'
                        })
                    }
                    counter+=1
                }
            })
        case '8':
            centroparto.map(c => {
                if(c.NO_FANTASIA != null){
                    if(counter <= 50){
                        cnesList.push({
                            "key": c.CO_CNES,
                            "name": c.NO_FANTASIA,
                            "unity": 'CENTRO DE PARTO',
                            "state": brazillianState(c.CO_UF),
                            "neighborhood": c.NO_BAIRRO,
                            "address": c.NO_LOGRADOURO,
                            "phone": c.NU_TELEFONE,
                            "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                            "listing": 'Centro de Parto'
                        })
                    }
                    counter+=1 
                }
            })
    }
    var cnesJson = JSON.stringify(cnesList)
    return cnesJson
}

export const findByLatitudeAndLongitude = (minLatitude, minLongitude, maxLatitude, maxLongitude, radius) =>{
    let cnesList = []

    centroparto.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "CENTRO DE PARTO",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    centrosaude.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "CENTRO DE SAÚDE",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    farmacia.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "FARMÁCIA",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    homecare.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "HOME CARE",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    hospitalgeral.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "HOSPITAL GERAL",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    policlinica.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "POLICLÍNICA",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    postosaude.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "POSTO DE SAÚDE",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    prontoatendimento.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "UPA",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    prontosocorro.map(c =>{
        if(c.NO_FANTASIA != null){
            latitude = c.NU_LATITUDE / Math.pow(10, 10)
            longitude = c.NU_LONGITUDE / Math.pow(10, 10)
            
            if(((minLatitude <= latitude) && (latitude <= maxLatitude)) && ((minLongitude <= longitude) && (longitude <= maxLongitude))){
                cnesList.push({
                    "key": c.CO_CNES,
                    "name": c.NO_FANTASIA,
                    "unity": "PRONTO SOCORRO",
                    "state": brazillianState(c.CO_UF),
                    "neighborhood": c.NO_BAIRRO,
                    "address": c.NO_LOGRADOURO,
                    "phone": c.NU_TELEFONE,
                    "time": shiftEntity(c.DS_TURNO_ATENDIMENTO),
                    "listing": radius
                })
            }
        }
    })
    return cnesList
}